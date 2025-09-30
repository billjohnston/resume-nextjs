# Resume Web Client

```sh
bun install
bun run dev
```

To deploy the static site and infrastructure:

```sh
cp infra/.env.example infra/.env
# edit infra/.env with your domain, ACM certificate ARN, and optional export path
bun run deploy:cdk
```

Add `--context domainName=staging.billjohnston.dev --context exportPath=apps/web/out` after the command if you need one-off overrides.
