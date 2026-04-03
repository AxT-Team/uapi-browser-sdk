# uapi-browser-sdk

![Banner](https://raw.githubusercontent.com/AxT-Team/uapi-browser-sdk/main/banner.png)

[![Browser TS](https://img.shields.io/badge/TypeScript-ES2020-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docs](https://img.shields.io/badge/Docs-uapis.cn-2EAE5D?style=flat-square)](https://uapis.cn/)
[![npm](https://img.shields.io/npm/v/uapi-browser-sdk?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/uapi-browser-sdk)

> [!NOTE]
> 所有接口的 Browser (TypeScript) 示例都可以在 [UApi](https://uapis.cn/docs/introduction) 的接口文档页面，向下滚动至 **快速启动** 区块后直接复制。

## 快速开始

```bash
npm i uapi-browser-sdk
```

```ts
import { UapiClient } from 'uapi-browser-sdk'

const client = new UapiClient('https://uapis.cn/api/v1')
const result = await client.social.getSocialQqUserinfo({ qq: '10001' })
console.log(result)
```

## CDN 引入

`uapi-browser-sdk` 发布在 npm，因而可以直接通过常见 CDN 以 ES Module 方式加载。建议在生产环境固定版本号（`@latest` 仅用于快速试用）。

### jsDelivr（推荐）

```html
<script type="module">
  import { UapiClient } from 'https://cdn.jsdelivr.net/npm/uapi-browser-sdk@latest/dist/index.js';

  const client = new UapiClient('https://uapis.cn/api/v1');
  const data = await client.social.getSocialQqUserinfo({ qq: '10001' });
  console.log(data);
</script>
```

### UNPKG（原生 ESM）

```html
<script type="module">
  import { UapiClient } from 'https://unpkg.com/uapi-browser-sdk@latest/dist/index.js?module';
  // ...
</script>
```

### ESM CDN（esm.run / esm.sh）

```ts
import { UapiClient } from 'https://esm.run/uapi-browser-sdk@latest';
```

三种 CDN 均会返回同一份浏览器模块，可按自己的缓存/区域策略选择。

## 特性

现在你不再需要反反复复的查阅文档了。

只需在 IDE 中键入 `client.`，所有核心模块——如 `social`、`game`、`image`——即刻同步展现。进一步输入即可直接定位到 `getSocialQqUserinfo` 这样的具体方法，其名称与文档的 `operationId` 严格保持一致，确保了开发过程的直观与高效。

所有方法签名只接受真实且必需的参数。当你在构建请求时，TypeScript 会即时提示 `qq`、`username` 等键名，这彻底杜绝了在对象字面量中因键名拼写错误而导致的运行时错误。

针对 401、404、429 等标准 HTTP 响应，SDK 已将其统一映射为 `UapiError`。错误对象自带 `code`、`status` 与 `details` 字段，确保你在浏览器日志中能第一时间准确、快速地诊断问题。

SDK 采用原生 `fetch`，自动补上 `Authorization` 头且不依赖任何 Node.js API；需要自定义超时或重试时，只要包装 `_request` 或替换调用处即可。

如果你需要查看字段细节或内部逻辑，仓库中的 `./internal` 目录同步保留了由 `openapi-generator` 生成的完整结构体，随时可供参考。

## 响应元信息

每次请求完成后，SDK 会自动把响应 Header 解析成结构化的 `ResponseMeta`，你不用自己拆原始字符串。

成功时可以通过 `client.lastResponseMeta` 读取，失败时可以通过 `err.meta` 读取，两条路径拿到的是同一套字段。

```ts
import { UapiClient, UapiError } from 'uapi-browser-sdk'

const client = new UapiClient('https://uapis.cn/api/v1')

// 成功路径
const result = await client.social.getSocialQqUserinfo({ qq: '10001' })
const meta = client.lastResponseMeta
if (meta) {
  console.log('余额剩余:', meta.balanceRemainingCents ?? 0, '分')
  console.log('资源包剩余:', meta.quotaRemainingCredits ?? 0, '积分')
  console.log('Request ID:', meta.requestId)
}

// 失败路径
try {
  await client.social.getSocialQqUserinfo({ qq: '10001' })
} catch (err) {
  if (err instanceof UapiError && err.meta) {
    console.log('限流，稍后重试秒数:', err.meta.retryAfterSeconds ?? 0)
    console.log('Request ID:', err.meta.requestId)
  }
}
```

常用字段一览：

| 字段 | 说明 |
|------|------|
| `balanceRemainingCents` | 账户余额剩余（分） |
| `quotaRemainingCredits` | 资源包剩余积分 |
| `visitorQuotaRemainingCredits` | 访客配额剩余积分 |
| `retryAfterSeconds` | 触发限流后的建议等待时长 |
| `requestId` | 请求唯一 ID，排障时使用 |
| `debitStatus` | 本次计费状态 |
| `rateLimitPolicies` / `rateLimits` | 完整结构化限流策略数据 |

## 错误模型概览

| HTTP 状态码 | SDK 错误类型 | 附加信息                                     |
|-------------|-------------|----------------------------------------------|
| 401/403     | `UapiError` | `code`、`status`、`details`                  |
| 404         | `UapiError` | `code`、`status`                             |
| 400         | `UapiError` | `code`、`status`、`details`                  |
| 429         | `UapiError` | `code`、`status`、`retry_after_seconds`      |
| 5xx         | `UapiError` | `code`、`status`                             |

## 其他 SDK

| 语言        | 仓库地址                                                     |
|-------------|--------------------------------------------------------------|
| Go          | https://github.com/AxT-Team/uapi-sdk-go                      |
| Python      | https://github.com/AxT-Team/uapi-sdk-python                  |
| TypeScript| https://github.com/AxT-Team/uapi-sdk-typescript           |
| Browser (TypeScript/JavaScript)（当前）| https://github.com/AxT-Team/uapi-browser-sdk        |
| Java        | https://github.com/AxT-Team/uapi-sdk-java                    |
| PHP         | https://github.com/AxT-Team/uapi-sdk-php                     |
| C#          | https://github.com/AxT-Team/uapi-sdk-csharp                  |
| C++         | https://github.com/AxT-Team/uapi-sdk-cpp                     |
| Rust        | https://github.com/AxT-Team/uapi-sdk-rust                    |

## 文档

访问 [UApi文档首页](https://uapis.cn/docs/introduction) 并选择任意接口，向下滚动到 **快速启动** 区块即可看到最新的 Browser (TypeScript) 示例代码。


