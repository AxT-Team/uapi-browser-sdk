# WebParseApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWebTomarkdownAsyncStatus**](WebParseApi.md#getwebtomarkdownasyncstatus) | **GET** /web/tomarkdown/async/{task_id} | 转换任务状态 |
| [**getWebparseExtractimages**](WebParseApi.md#getwebparseextractimages) | **GET** /webparse/extractimages | 提取网页图片 |
| [**getWebparseMetadata**](WebParseApi.md#getwebparsemetadata) | **GET** /webparse/metadata | 提取网页元数据 |
| [**postWebTomarkdownAsync**](WebParseApi.md#postwebtomarkdownasync) | **POST** /web/tomarkdown/async | 网页转 Markdown |



## getWebTomarkdownAsyncStatus

> GetWebTomarkdownAsyncStatus200Response getWebTomarkdownAsyncStatus(taskId)

转换任务状态

提交了网页转 Markdown 任务后，想知道处理进度和结果？用这个接口来查询。  ## 功能概述 通过任务 ID 查询转换任务的当前状态、处理进度和最终结果。任务结果缓存 30 分钟，期间可重复查询。  ## 任务状态  | 状态 | 说明 | |------|------| | &#x60;pending&#x60; | 等待处理 | | &#x60;processing&#x60; | 处理中 | | &#x60;completed&#x60; | 已完成，可获取结果 | | &#x60;failed&#x60; | 失败 | | &#x60;timeout&#x60; | 超时（超过 60 秒） |  &gt; [!NOTE] &gt; 建议每 2-5 秒轮询一次，当状态为 &#x60;completed&#x60;、&#x60;failed&#x60; 或 &#x60;timeout&#x60; 时停止轮询。

### Example

```ts
import {
  Configuration,
  WebParseApi,
} from 'uapi-browser-sdk-browser';
import type { GetWebTomarkdownAsyncStatusRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new WebParseApi();

  const body = {
    // string | 任务ID（由提交接口返回）
    taskId: a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6,
  } satisfies GetWebTomarkdownAsyncStatusRequest;

  try {
    const data = await api.getWebTomarkdownAsyncStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | `string` | 任务ID（由提交接口返回） | [Defaults to `undefined`] |

### Return type

[**GetWebTomarkdownAsyncStatus200Response**](GetWebTomarkdownAsyncStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功获取任务状态（包含各种状态的响应） |  -  |
| **404** | 任务不存在或已过期 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebparseExtractimages

> GetWebparseExtractimages200Response getWebparseExtractimages(url)

提取网页图片

想批量获取一个网页上的所有图片链接？这个接口帮你搞定。  ## 功能概述 提供一个网页 URL，返回该页面中所有图片的链接列表。适合用于图片采集、素材下载等场景。

### Example

```ts
import {
  Configuration,
  WebParseApi,
} from 'uapi-browser-sdk-browser';
import type { GetWebparseExtractimagesRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new WebParseApi();

  const body = {
    // string | 需要提取图片的网页URL
    url: https://cn.bing.com/,
  } satisfies GetWebparseExtractimagesRequest;

  try {
    const data = await api.getWebparseExtractimages(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **url** | `string` | 需要提取图片的网页URL | [Defaults to `undefined`] |

### Return type

[**GetWebparseExtractimages200Response**](GetWebparseExtractimages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | URL参数缺失或无效 |  -  |
| **500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebparseMetadata

> GetWebparseMetadata200Response getWebparseMetadata(url)

提取网页元数据

想在应用里做链接预览卡片？这个接口帮你一键获取网页的标题、描述、图标等信息。  ## 功能概述 提供一个网页 URL，返回该页面的元数据，包括标题、描述、关键词、Favicon、Open Graph 信息等。非常适合用于生成链接预览卡片或做 SEO 分析。

### Example

```ts
import {
  Configuration,
  WebParseApi,
} from 'uapi-browser-sdk-browser';
import type { GetWebparseMetadataRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new WebParseApi();

  const body = {
    // string | 需要提取元数据的网页URL
    url: https://www.bilibili.com,
  } satisfies GetWebparseMetadataRequest;

  try {
    const data = await api.getWebparseMetadata(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **url** | `string` | 需要提取元数据的网页URL | [Defaults to `undefined`] |

### Return type

[**GetWebparseMetadata200Response**](GetWebparseMetadata200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | URL参数缺失或无效 |  -  |
| **500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWebTomarkdownAsync

> PostWebTomarkdownAsync202Response postWebTomarkdownAsync(url)

网页转 Markdown

想把一个网页的内容转成干净的 Markdown 文本？这个异步接口可以帮你搞定，特别适合处理大型或复杂的网页。  ## 功能概述  &gt; [!VIP] &gt; 本 API 目前处于**限时免费**阶段，未来将转为付费服务。  提交一个网页 URL，我们会自动抓取主体内容，剔除广告、导航栏等干扰元素，并转换为 Markdown 格式。同时会提取标题、作者、发布日期等元数据，生成 YAML Front Matter。  任务提交后会立即返回任务 ID，你可以用它来查询处理进度和结果。单个任务最长处理 60 秒，结果缓存 30 分钟。

### Example

```ts
import {
  Configuration,
  WebParseApi,
} from 'uapi-browser-sdk-browser';
import type { PostWebTomarkdownAsyncRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new WebParseApi();

  const body = {
    // string | 需要转换的网页URL。URL必须经过编码。
    url: https://example.com,
  } satisfies PostWebTomarkdownAsyncRequest;

  try {
    const data = await api.postWebTomarkdownAsync(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **url** | `string` | 需要转换的网页URL。URL必须经过编码。 | [Defaults to `undefined`] |

### Return type

[**PostWebTomarkdownAsync202Response**](PostWebTomarkdownAsync202Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | 任务已提交成功，返回任务ID |  -  |
| **400** | 请求参数错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

