# StatusApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStatusRatelimit**](StatusApi.md#getstatusratelimit) | **GET** /status/ratelimit | 限流状态 |
| [**getStatusUsage**](StatusApi.md#getstatususage) | **GET** /status/usage | 获取API端点使用统计 |



## getStatusRatelimit

> GetStatusRatelimit200Response getStatusRatelimit(authorization)

限流状态

想了解我们API的当前负载情况吗？这个接口为你提供了服务的“心电图”。  ## 功能概述 此接口返回我们后端自适应限流器的实时状态。你可以看到当前并发请求数、并发上限、系统负载、请求接受/拒绝数等核心指标。这对于监控API健康状况和性能表现至关重要。  &gt; [!IMPORTANT] &gt; 此接口为管理接口，需要提供有效的管理员级别API密钥才能访问。  ### 认证方式 请在请求头中添加 &#x60;Authorization: Bearer &lt;你的API密钥&gt;&#x60;。

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'uapi-browser-sdk-browser';
import type { GetStatusRatelimitRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new StatusApi();

  const body = {
    // string | Bearer类型的API密钥认证头。例如：`Bearer sk-xxx`
    authorization: Bearer sk-xxx,
  } satisfies GetStatusRatelimitRequest;

  try {
    const data = await api.getStatusRatelimit(body);
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
| **authorization** | `string` | Bearer类型的API密钥认证头。例如：&#x60;Bearer sk-xxx&#x60; | [Defaults to `undefined`] |

### Return type

[**GetStatusRatelimit200Response**](GetStatusRatelimit200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 查询成功，返回限流器的详细状态数据。 |  -  |
| **401** | 未授权 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatusUsage

> GetStatusUsage200Response getStatusUsage(path)

获取API端点使用统计

想知道哪个API接口最受欢迎吗？这个接口提供了详细的“账单”。  ## 功能概述 此接口用于获取每个API端点（Endpoint）的使用情况统计。你可以查询所有端点的列表，也可以通过 &#x60;path&#x60; 参数指定查询某一个特定端点。返回信息包括调用次数和平均处理时长

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'uapi-browser-sdk-browser';
import type { GetStatusUsageRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new StatusApi();

  const body = {
    // string | （可选）如果你想查询某个特定的端点，请提供它的路径，例如 \'/api/v1/image/motou\'。如果留空，则返回所有端点的统计列表。 (optional)
    path: /api/v1/image/motou,
  } satisfies GetStatusUsageRequest;

  try {
    const data = await api.getStatusUsage(body);
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
| **path** | `string` | （可选）如果你想查询某个特定的端点，请提供它的路径，例如 \&#39;/api/v1/image/motou\&#39;。如果留空，则返回所有端点的统计列表。 | [Optional] [Defaults to `undefined`] |

### Return type

[**GetStatusUsage200Response**](GetStatusUsage200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 查询某条路径时 |  -  |
| **404** | 未找到 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

