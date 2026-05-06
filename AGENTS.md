# AGENTS.md — uapi-browser-sdk

This file tells AI coding agents how to use the **official browser /
vanilla-JS SDK** for the [uapis.cn](https://uapis.cn) public API platform.

## What this package is

Browser-first, dependency-free TypeScript client for UAPI. Built on the
native `fetch` API, ships an ESM bundle, and works equally well from a
`<script type="module">` tag, a Vite/Next/Remix project, or a Cloudflare
Worker. Generated from the live OpenAPI 3.1 spec at
<https://uapis.cn/openapi.json>.

## Install

```bash
npm i uapi-browser-sdk
# or with pnpm / yarn
```

CDN:

```html
<script type="module">
  import { UapiClient } from "https://esm.sh/uapi-browser-sdk";
  const client = new UapiClient("https://uapis.cn");
  console.log(await client.misc.getMiscWeather({ city: "北京" }));
</script>
```

## Quick start

```ts
import { UapiClient } from "uapi-browser-sdk";

const client = new UapiClient("https://uapis.cn");
const weather = await client.misc.getMiscWeather({ city: "北京" });
console.log(weather);
```

The client is grouped by tag (`misc`, `network`, `text`, `image`, `social`,
`translate`, `search`, …) and each method name matches the underlying
`operationId`, camelCased.

## Authentication

Free-tier endpoints work with no key. Paid endpoints take a key:

```ts
const client = new UapiClient("https://uapis.cn", { apiKey: "sk_…" });
```

> **Warning.** Putting an API key inside a public web page exposes it to
> anyone who reads the JS bundle. For browser-side calls to paid
> endpoints, prefer a thin server-side proxy that injects the key.

## Errors

Methods throw a typed `UapiApiError` on non-2xx responses. The error
carries `code`, `error`, and `requestId` fields. Surface `error` verbatim.

## Rate limits

Headers `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`,
`Retry-After` are exposed via `error.response.headers` (and on success
responses via the optional `withResponse` overload). Honor them.

## Related repos

- Server-side TS SDK: <https://github.com/AxT-Team/uapi-sdk-typescript>.
- MCP server: <https://github.com/AxT-Team/uapi-mcp>.
- Skills bundle: <https://github.com/AxT-Team/uapi-agent-skills>.
- Other languages: `uapi-sdk-python`, `uapi-sdk-go`, `uapi-sdk-rust`,
  `uapi-sdk-java`, `uapi-sdk-csharp`, `uapi-sdk-cpp`, `uapi-sdk-php`.
