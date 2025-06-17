{ pkgs, ... }:

{

  # https://devenv.sh/packages/
  packages = [
    pkgs.liquidprompt
    pkgs.nodejs_20 # Or your preferred Node.js version
    pkgs.yarn
  ];

  # https://devenv.sh/languages/
  languages.javascript.enable = true;
  languages.javascript.yarn.enable = true; # Enables npm, yarn, and pnpm
  # languages.javascript.corepack.enable = true; # If you want to manage package manager versions

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks = {
  #   nixpkgs-fmt.enable = true;
  # };

  enterShell = ''
    source "${pkgs.liquidprompt}/bin/liquidprompt" 2>/dev/null
    source "${pkgs.liquidprompt}/share/liquidprompt/themes/powerline/powerline.theme"
    lp_theme powerline
    echo "💥"
  '';
}