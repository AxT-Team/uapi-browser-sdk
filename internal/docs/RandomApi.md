# RandomApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAnswerbookAsk**](RandomApi.md#getanswerbookask) | **GET** /answerbook/ask | 答案之书 |
| [**getRandomImage**](RandomApi.md#getrandomimage) | **GET** /random/image | 随机图片 |
| [**getRandomString**](RandomApi.md#getrandomstring) | **GET** /random/string | 随机字符串 |
| [**postAnswerbookAsk**](RandomApi.md#postanswerbookaskoperation) | **POST** /answerbook/ask | 答案之书 (POST) |



## getAnswerbookAsk

> GetAnswerbookAsk200Response getAnswerbookAsk(question)

答案之书

想要获得人生问题的神秘答案吗？答案之书API提供了一个神奇8球风格的问答服务，你可以提问并获得随机的神秘答案。  ## 功能概述 通过向答案之书提问，你将获得一个充满智慧（或许）的随机答案。这个API支持通过查询参数或POST请求体两种方式提问。  ## 使用须知  &gt; [!TIP] &gt; **提问技巧** &gt; - 提出明确的问题会获得更好的体验 &gt; - 问题不能为空 &gt; - 支持中文问题 &gt; - 答案具有随机性，仅供娱乐参考

### Example

```ts
import {
  Configuration,
  RandomApi,
} from 'uapi-browser-sdk-browser';
import type { GetAnswerbookAskRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new RandomApi();

  const body = {
    // string | 你想要提问的问题。问题不能为空。
    question: 我今天会有好运吗？,
  } satisfies GetAnswerbookAskRequest;

  try {
    const data = await api.getAnswerbookAsk(body);
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
| **question** | `string` | 你想要提问的问题。问题不能为空。 | [Defaults to `undefined`] |

### Return type

[**GetAnswerbookAsk200Response**](GetAnswerbookAsk200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功获取答案。 |  -  |
| **400** | 请求参数无效。 |  -  |
| **500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRandomImage

> Blob getRandomImage(category, type)

随机图片

需要一张随机图片作为占位符或者背景吗？这个接口是你的不二之选。  ## 功能概述 这是一个非常简单的接口，它会从我们庞大的图库和精选外部图床中随机挑选一张图片，然后通过 302 重定向让你直接访问到它。这使得它可以非常方便地直接用在 HTML 的 &#x60;&lt;img&gt;&#x60; 标签中。  你可以通过 &#x60;/api/v1/random/image?category&#x3D;acg&amp;type&#x3D;4k&#x60; 这样的请求获取由UapiPro服务器提供的图片，也可以通过 &#x60;/api/v1/random/image?category&#x3D;ai_drawing&#x60; 获取由外部图床精选的图片。  如果你不提供任何 category 参数，程序会从所有图片（包括本地的和URL的）中随机抽取一张（**全局随机图片不包含ikun和AI绘画**）。  &gt; [!TIP] &gt; 如果你需要更精确地控制图片类型，请使用 &#x60;/image/random/{category}/{type}&#x60; 接口。  ### 支持的主类别与子类别 - **acg**（二次元动漫）     - pc     - mb - **外部图床精选/混合动漫**   - **landscape**: 风景图。   - **anime**: 混合了UapiPro服务器的acg和外部图床的general_anime分类下的图片。   - **pc_wallpaper**: 电脑壁纸。   - **mobile_wallpaper**: 手机壁纸。   - **general_anime**: 动漫图。   - **ai_drawing**: AI绘画。 - **其他分类**   - **bq**（表情包/趣图）     - eciyuan     - ikun     - xiongmao     - waiguoren     - maomao   - **furry**（福瑞）     - z4k     - szs8k     - s4k     - 4k  &gt; [!NOTE] &gt; 默认全局随机（未指定category参数）时，不会包含ikun和AI绘画（ai_drawing）类别的图片。 

### Example

```ts
import {
  Configuration,
  RandomApi,
} from 'uapi-browser-sdk-browser';
import type { GetRandomImageRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new RandomApi();

  const body = {
    // 'acg' | 'landscape' | 'anime' | 'pc_wallpaper' | 'mobile_wallpaper' | 'general_anime' | 'ai_drawing' | 'bq' | 'furry' | （可选）指定图片主类别。  **支持的主类别：** - `acg`（二次元动漫，UapiPro服务器） - `landscape`（风景图，外部图床） - `anime`（混合动漫） - `pc_wallpaper`（电脑壁纸，外部图床） - `mobile_wallpaper`（手机壁纸，外部图床） - `general_anime`（动漫图，外部图床） - `ai_drawing`（AI绘画，外部图床） - `bq`（表情包/趣图，UapiPro服务器） - `furry`（福瑞，UapiPro服务器）  > [!TIP] > 如果不指定，将从所有图片中随机抽取（不包含 `ikun` 和 `ai_drawing`）。  (optional)
    category: acg,
    // 'pc' | 'mb' | 'eciyuan' | 'ikun' | '4k' | 's4k' | 'z4k' | 'szs8k' | 'xiongmao' | 'maomao' | 'waiguoren' | （可选，仅UapiPro服务器图片支持）指定图片子类别。  - **bq**: `xiongmao`, `waiguoren`, `maomao`, `ikun`, `eciyuan` - **acg**: `pc`, `mb` - **furry**: `z4k`, `szs8k`, `s4k`, `4k`  > [!TIP] > 外部图床类别和 `anime` 混合类别不支持 `type` 参数。  (optional)
    type: pc,
  } satisfies GetRandomImageRequest;

  try {
    const data = await api.getRandomImage(body);
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
| **category** | `acg`, `landscape`, `anime`, `pc_wallpaper`, `mobile_wallpaper`, `general_anime`, `ai_drawing`, `bq`, `furry` | （可选）指定图片主类别。  **支持的主类别：** - &#x60;acg&#x60;（二次元动漫，UapiPro服务器） - &#x60;landscape&#x60;（风景图，外部图床） - &#x60;anime&#x60;（混合动漫） - &#x60;pc_wallpaper&#x60;（电脑壁纸，外部图床） - &#x60;mobile_wallpaper&#x60;（手机壁纸，外部图床） - &#x60;general_anime&#x60;（动漫图，外部图床） - &#x60;ai_drawing&#x60;（AI绘画，外部图床） - &#x60;bq&#x60;（表情包/趣图，UapiPro服务器） - &#x60;furry&#x60;（福瑞，UapiPro服务器）  &gt; [!TIP] &gt; 如果不指定，将从所有图片中随机抽取（不包含 &#x60;ikun&#x60; 和 &#x60;ai_drawing&#x60;）。  | [Optional] [Defaults to `undefined`] [Enum: acg, landscape, anime, pc_wallpaper, mobile_wallpaper, general_anime, ai_drawing, bq, furry] |
| **type** | `pc`, `mb`, `eciyuan`, `ikun`, `4k`, `s4k`, `z4k`, `szs8k`, `xiongmao`, `maomao`, `waiguoren` | （可选，仅UapiPro服务器图片支持）指定图片子类别。  - **bq**: &#x60;xiongmao&#x60;, &#x60;waiguoren&#x60;, &#x60;maomao&#x60;, &#x60;ikun&#x60;, &#x60;eciyuan&#x60; - **acg**: &#x60;pc&#x60;, &#x60;mb&#x60; - **furry**: &#x60;z4k&#x60;, &#x60;szs8k&#x60;, &#x60;s4k&#x60;, &#x60;4k&#x60;  &gt; [!TIP] &gt; 外部图床类别和 &#x60;anime&#x60; 混合类别不支持 &#x60;type&#x60; 参数。  | [Optional] [Defaults to `undefined`] [Enum: pc, mb, eciyuan, ikun, 4k, s4k, z4k, szs8k, xiongmao, maomao, waiguoren] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/jpeg`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功！将随机图片以图片二进制 (image/jpeg) 直接返回给客户端，可直接在 &lt;img&gt; 标签中使用。 |  -  |
| **404** | 未找到指定类别的图片。 |  -  |
| **500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRandomString

> GetRandomString200Response getRandomString(length, type)

随机字符串

无论是需要生成一个安全的随机密码、一个唯一的Token，还是一个简单的随机ID，这个接口都能满足你。  ## 功能概述 你可以精确地控制生成字符串的长度和字符集类型，非常灵活。  ## 使用须知  &gt; [!TIP] &gt; **字符集类型 &#x60;type&#x60; 详解** &gt; 你可以通过 &#x60;type&#x60; 参数精确控制生成的字符集： &gt; - **&#x60;numeric&#x60;**: 纯数字 (0-9) &gt; - **&#x60;lower&#x60;**: 纯小写字母 (a-z) &gt; - **&#x60;upper&#x60;**: 纯大写字母 (A-Z) &gt; - **&#x60;alpha&#x60;**: 大小写字母 (a-zA-Z) &gt; - **&#x60;alphanumeric&#x60;** (默认): 数字和大小写字母 (0-9a-zA-Z) &gt; - **&#x60;hex&#x60;**: 十六进制字符 (0-9a-f)

### Example

```ts
import {
  Configuration,
  RandomApi,
} from 'uapi-browser-sdk-browser';
import type { GetRandomStringRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new RandomApi();

  const body = {
    // number | 你希望生成的字符串的长度。有效范围是 1 到 1024。 (optional)
    length: 32,
    // 'numeric' | 'lower' | 'upper' | 'alpha' | 'alphanumeric' | 'hex' | 指定构成字符串的字符类型。 (optional)
    type: alphanumeric,
  } satisfies GetRandomStringRequest;

  try {
    const data = await api.getRandomString(body);
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
| **length** | `number` | 你希望生成的字符串的长度。有效范围是 1 到 1024。 | [Optional] [Defaults to `16`] |
| **type** | `numeric`, `lower`, `upper`, `alpha`, `alphanumeric`, `hex` | 指定构成字符串的字符类型。 | [Optional] [Defaults to `&#39;alphanumeric&#39;`] [Enum: numeric, lower, upper, alpha, alphanumeric, hex] |

### Return type

[**GetRandomString200Response**](GetRandomString200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 生成成功！ |  -  |
| **400** | 无效的请求参数。 |  -  |
| **500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postAnswerbookAsk

> PostAnswerbookAsk200Response postAnswerbookAsk(postAnswerbookAskRequest)

答案之书 (POST)

通过POST请求向答案之书提问并获得神秘答案。  ## 功能概述 与GET方式相同，但通过JSON请求体发送问题，适合在需要发送较长问题或希望避免URL编码问题的场景中使用。  ## 请求体格式 请求体必须是有效的JSON格式，包含question字段。

### Example

```ts
import {
  Configuration,
  RandomApi,
} from 'uapi-browser-sdk-browser';
import type { PostAnswerbookAskOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new RandomApi();

  const body = {
    // PostAnswerbookAskRequest | 包含问题的JSON对象
    postAnswerbookAskRequest: ...,
  } satisfies PostAnswerbookAskOperationRequest;

  try {
    const data = await api.postAnswerbookAsk(body);
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
| **postAnswerbookAskRequest** | [PostAnswerbookAskRequest](PostAnswerbookAskRequest.md) | 包含问题的JSON对象 | |

### Return type

[**PostAnswerbookAsk200Response**](PostAnswerbookAsk200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功获取答案。 |  -  |
| **400** | 请求参数无效。 |  -  |
| **500** | 服务器内部错误。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

