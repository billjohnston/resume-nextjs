{
  pkgs,
  lib,
  inputs,
  config,
  ...
}:
let
  pkgs-unstable = import inputs.nixpkgs-unstable {
    system = pkgs.system;
    config.allowUnfree = true;
  };
  dotEnv = "${config.devenv.root}/.env.devenv";
  bitwardenEnvFolder = "resume";
in
{

  env = {
    BITWARDENCLI_APPDATA_DIR = "${config.devenv.root}/.bitwarden";
    AWS_CONFIG_FILE = "${config.devenv.root}/.aws/config";
    AWS_SHARED_CREDENTIALS_FILE = "${config.devenv.root}/.aws/credentials";
  };

  # https://devenv.sh/basics/
  packages = [
    pkgs.liquidprompt
    pkgs.jq
    pkgs.bitwarden-cli
    pkgs.awscli2

    pkgs-unstable.codex
    pkgs-unstable.claude-code
    pkgs-unstable.gemini-cli
  ];
  languages.javascript = {
    enable = true;
    bun = {
      enable = true;
    };
  };

  enterShell = ''
    # Exit immediately if the .env.devenv file already exists.
    if [ -f ${dotEnv} ]; then
      source ${dotEnv}
    else

      echo "🔐 Initializing secrets from Bitwarden..."

      # Ensure we have an active session by logging in or unlocking the vault.
      if ! bw status | grep -q "unlocked"; then
        if bw status | grep -q "locked"; then
          export BW_SESSION=$(bw unlock --raw)
        else
          bw login
          export BW_SESSION=$(bw unlock --raw)  
        fi
      fi

      # Exit if we failed to get a session key.
      if [ -z "$BW_SESSION" ]; then
          echo "❌ Failed to unlock Bitwarden vault."
          exit 1
      fi

      bw sync
      echo "🔍 Searching for items named '${bitwardenEnvFolder}...'"

      # Fetch items, parse with jq, and write the 'export KEY="VALUE"' lines to env file.
      FOLDER_ID=$(bw list folders --search ${bitwardenEnvFolder} | jq -r '.[0].id')
      bw list items --folderid $FOLDER_ID | jq -r '.[] | "export \(.name)=\"\(.login.password)\""' > ${dotEnv}

      # Verify that the command succeeded and the secrets file is not empty.
      if [ $? -eq 0 ] && [ -s ${dotEnv} ]; then
        echo "✅ Secrets successfully written to ${dotEnv}."
        echo "The following variables are now available:"
        # Show the keys that were set, without exposing values.
        cut -d'=' -f1 ${dotEnv} | sed 's/export/  -/'
      else
        echo "⚠️  No secrets found or an error occurred. The ${dotEnv} file was not created."
        # Clean up an empty file on failure to avoid preventing a retry.
        rm -f ${dotEnv}
        exit 1
      fi
    fi

    source ${dotEnv}

    # Source liquidprompt
    source "${pkgs.liquidprompt}/bin/liquidprompt" 2>/dev/null
    source "${pkgs.liquidprompt}/share/liquidprompt/themes/powerline/powerline.theme"
    lp_theme powerline

    # Optionally, you can remove or comment out the custom PS1 if liquidprompt handles it
    # export PS1="\[\033[1;32m\](devenv)\[\033[0m\] \[\[\033[1;34m\]store-curator\[\033[0m\] \[\[\033[1;33m\]\w\[\033[0m\]$ "
  '';
}

