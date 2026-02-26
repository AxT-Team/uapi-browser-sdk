# DefaultApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSearchEngines**](DefaultApi.md#getsearchengines) | **GET** /search/engines | 搜索引擎配置 |
| [**getSensitiveWordAnalyzeQuery**](DefaultApi.md#getsensitivewordanalyzequery) | **GET** /sensitive-word/analyze-query | 敏感词分析 (GET) |
| [**postSearchAggregate**](DefaultApi.md#postsearchaggregateoperation) | **POST** /search/aggregate | 智能搜索 |
| [**postSensitiveWordAnalyze**](DefaultApi.md#postsensitivewordanalyzeoperation) | **POST** /sensitive-word/analyze | 分析敏感词 |
| [**postSensitiveWordQuickCheck**](DefaultApi.md#postsensitivewordquickcheckoperation) | **POST** /text/profanitycheck | 敏感词检测（快速） |



## getSearchEngines

> GetSearchEngines200Response getSearchEngines()

搜索引擎配置

获取 UAPI Pro Search 引擎的详细信息，包括支持的功能特性、参数限制和使用说明。  ## 功能概述  此接口返回搜索引擎的完整配置信息，你可以用它来： - 了解搜索引擎支持哪些功能（如站内搜索、文件类型过滤等） - 获取参数的默认值和限制范围 - 查看当前引擎版本和可用状态  适合在应用初始化时调用，或用于动态配置搜索界面。       

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'uapi-browser-sdk-browser';
import type { GetSearchEnginesRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getSearchEngines();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSearchEngines200Response**](GetSearchEngines200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功返回搜索引擎的详细信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSensitiveWordAnalyzeQuery

> PostSensitiveWordAnalyze200Response getSensitiveWordAnalyzeQuery(keyword)

敏感词分析 (GET)

通过URL查询参数分析单个关键词，便于GET请求调用。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'uapi-browser-sdk-browser';
import type { GetSensitiveWordAnalyzeQueryRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DefaultApi();

  const body = {
    // string | 要分析的关键词，最长50字符。
    keyword: 喵,
  } satisfies GetSensitiveWordAnalyzeQueryRequest;

  try {
    const data = await api.getSensitiveWordAnalyzeQuery(body);
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
| **keyword** | `string` | 要分析的关键词，最长50字符。 | [Defaults to `undefined`] |

### Return type

[**PostSensitiveWordAnalyze200Response**](PostSensitiveWordAnalyze200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 分析成功 |  -  |
| **400** | 请求参数错误 |  -  |
| **401** | 未授权访问 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postSearchAggregate

> PostSearchAggregate200Response postSearchAggregate(postSearchAggregateRequest)

智能搜索

想在你的应用中集成搜索功能？我们提供了一个强大的搜索引擎API，让你可以轻松实现实时网页搜索。  ## 功能概述  UAPI Pro Search 是一个智能搜索引擎，采用机器学习算法对搜索结果进行智能排序，确保最相关的内容排在前面。你可以用它搜索任何关键词，也可以限定在特定网站或特定文件类型中搜索。  - **实时网页搜索**: 毫秒级响应，快速返回搜索结果 - **智能排序**: 采用机器学习回归排序算法，结果更精准 - **时间排序**: 支持按发布时间排序，获取最新内容 - **时间范围过滤**: 支持按天/周/月/年过滤结果 - **站内搜索**: 支持 &#x60;site:&#x60; 操作符，在指定网站内搜索 - **文件类型过滤**: 支持 &#x60;filetype:&#x60; 操作符，快速找到 PDF、Word 等特定格式文件  &gt; [!VIP] &gt; 本API目前处于**限时免费**阶段，我们鼓励开发者集成和测试。未来，它将转为付费API，为用户提供更稳定和强大的服务。       

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'uapi-browser-sdk-browser';
import type { PostSearchAggregateOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DefaultApi();

  const body = {
    // PostSearchAggregateRequest | 包含搜索参数的JSON对象
    postSearchAggregateRequest: ...,
  } satisfies PostSearchAggregateOperationRequest;

  try {
    const data = await api.postSearchAggregate(body);
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
| **postSearchAggregateRequest** | [PostSearchAggregateRequest](PostSearchAggregateRequest.md) | 包含搜索参数的JSON对象 | |

### Return type

[**PostSearchAggregate200Response**](PostSearchAggregate200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 搜索成功，返回经过AI排序的高质量结果 |  -  |
| **400** | 请求参数错误 |  -  |
| **401** | 未授权 |  -  |
| **429** | 请求过于频繁 |  -  |
| **500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postSensitiveWordAnalyze

> PostSensitiveWordAnalyze200Response postSensitiveWordAnalyze(postSensitiveWordAnalyzeRequest)

分析敏感词

分析单个或多个关键词的敏感程度，返回标准化风险标签与置信度结果。  &gt; [!VIP] &gt; 本API基于先进的分析模型，提供三级缓存策略和并发处理能力。  ## 功能概述  - **模型驱动**: 使用先进的分析模型进行语义分析。 - **高性能**: 采用三级缓存策略（持久化存储 → 统一缓存 → 模型分析），确保高频请求的响应速度。 - **并发支持**: 支持批量并发处理，单次最多可分析100个关键词。 - **标准标签**: 返回 &#x60;label&#x60; 字段，明确区分 &#x60;sensitive&#x60; 与 &#x60;normal&#x60;。 - **分类清晰**: 返回 &#x60;category&#x60; 字段，用于标识具体风险类别。 - **置信度输出**: 返回 &#x60;confidence&#x60; 字段，范围为0.0到1.0。  ## 响应字段说明  | 字段 | 类型 | 说明 | |------|------|------| | &#x60;results&#x60; | array | 分析结果对象的数组。 | | &#x60;results[].k&#x60; | string | 您在请求中提供的原始关键词。 | | &#x60;results[].label&#x60; | string | 核心判断字段：&#x60;sensitive&#x60;(敏感)、&#x60;normal&#x60;(正常)。 | | &#x60;results[].category&#x60; | string | 风险分类：&#x60;safe&#x60;(安全)、&#x60;threat&#x60;(威胁)、&#x60;porn&#x60;(色情)、&#x60;fraud&#x60;(欺诈)、&#x60;insult&#x60;(辱骂)。 | | &#x60;results[].confidence&#x60; | number | 当前分类的置信度，范围0.0到1.0。 | | &#x60;total&#x60; | integer | 本次请求成功分析的关键词总数。 |       

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'uapi-browser-sdk-browser';
import type { PostSensitiveWordAnalyzeOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DefaultApi();

  const body = {
    // PostSensitiveWordAnalyzeRequest | 包含待检测文本 \'keywords\' 的JSON对象
    postSensitiveWordAnalyzeRequest: ...,
  } satisfies PostSensitiveWordAnalyzeOperationRequest;

  try {
    const data = await api.postSensitiveWordAnalyze(body);
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
| **postSensitiveWordAnalyzeRequest** | [PostSensitiveWordAnalyzeRequest](PostSensitiveWordAnalyzeRequest.md) | 包含待检测文本 \&#39;keywords\&#39; 的JSON对象 | |

### Return type

[**PostSensitiveWordAnalyze200Response**](PostSensitiveWordAnalyze200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 分析成功 |  -  |
| **400** | 请求参数错误 |  -  |
| **401** | 未授权访问 |  -  |
| **429** | 请求频率超限 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postSensitiveWordQuickCheck

> PostSensitiveWordQuickCheck200Response postSensitiveWordQuickCheck(postSensitiveWordQuickCheckRequest)

敏感词检测（快速）

在你的社区或应用中，需要来过滤掉不和谐的声音吗？这个接口可以助你一臂之力。  ## 功能概述  我们对敏感词检测接口进行了大幅升级，现在采用高效的 **Aho-Corasick 算法**，实现了多模式字符串匹配。这意味着你不再需要手动编写复杂的正则表达式，系统会自动高效地检测出文本中的所有敏感词。  ### 主要特性  - **高性能算法**：基于 Aho-Corasick 算法，单次扫描即可检测多个敏感词模式 - **简繁体支持**：自动识别和处理简体中文、繁体中文内容 - **多模匹配**：无需编写正则表达式，系统内置智能匹配逻辑 - **快速响应**：相比传统方法，检测速度显著提升  无论是论坛、社交平台还是评论系统，这个接口都能帮你快速构建内容审核功能。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'uapi-browser-sdk-browser';
import type { PostSensitiveWordQuickCheckOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DefaultApi();

  const body = {
    // PostSensitiveWordQuickCheckRequest | 包含待检测文本 \'text\' 的JSON对象
    postSensitiveWordQuickCheckRequest: ...,
  } satisfies PostSensitiveWordQuickCheckOperationRequest;

  try {
    const data = await api.postSensitiveWordQuickCheck(body);
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
| **postSensitiveWordQuickCheckRequest** | [PostSensitiveWordQuickCheckRequest](PostSensitiveWordQuickCheckRequest.md) | 包含待检测文本 \&#39;text\&#39; 的JSON对象 | |

### Return type

[**PostSensitiveWordQuickCheck200Response**](PostSensitiveWordQuickCheck200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 请求体无效或文本为空 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

