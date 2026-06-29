# PoemApi

All URIs are relative to *https://uapis.cn*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSaying**](PoemApi.md#getsaying) | **GET** /saying | 一言 |
| [**getSayingRandom**](PoemApi.md#getsayingrandom) | **GET** /saying/random | 一言（随机/每日/场景/此刻） |



## getSaying

> GetSaying200Response getSaying()

一言

想在你的应用里每天展示一句不一样的话，给用户一点小小的惊喜吗？这个“一言”接口就是为此而生。  ## 功能概述 每次调用，它都会从我们精心收集的、包含数千条诗词、动漫台词、名人名言的语料库中，随机返回一条。你可以用它来做网站首页的Slogan、应用的启动语，或者任何需要灵感点缀的地方。

### Example

```ts
import {
  Configuration,
  PoemApi,
} from 'uapi-browser-sdk-browser';
import type { GetSayingRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new PoemApi();

  try {
    const data = await api.getSaying();
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

[**GetSaying200Response**](GetSaying200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 请求成功！返回一条随机的语录。 |  -  |
| **500** | 当语料库为空或无法读取时。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSayingRandom

> GetSayingRandom200Response getSayingRandom(mode, scene, source, category, tag)

一言（随机/每日/场景/此刻）

一言接口，返回一条随机语录。通过 &#x60;mode&#x60; 参数切换四种返回方式，并支持按来源、分类、标签过滤。  ## 四种模式（&#x60;mode&#x60;） - **&#x60;random&#x60;（默认）**：每次调用随机返回一条语录。 - **&#x60;daily&#x60;**：同一天内返回固定的同一条，适合每日打卡、签到等场景。 - **&#x60;recommend&#x60;**：配合 &#x60;scene&#x60; 参数，返回指定场景（如 &#x60;night&#x60;、&#x60;morning&#x60;）的语录。 - **&#x60;moment&#x60;**：根据请求时所处时段，自动返回应景语录。  ## 语言控制 语料分中英文两类，可通过 &#x60;source&#x60; 或 &#x60;category&#x60; 控制： - 需要中文：&#x60;source&#x60; 选「综合句子语料库 / 曹星宇句子集」，或 &#x60;category&#x60; 选中文分类（如 影视、文学、诗词）。 - 需要英文：&#x60;source&#x60; 选「Quotable / 英文历史名言」。  ## 使用须知 &gt; [!NOTE] &gt; - &#x60;source&#x60;、&#x60;category&#x60;、&#x60;tag&#x60; 支持多值，用英文逗号 &#x60;,&#x60; 或分号 &#x60;;&#x60; 分隔。 &gt; - &#x60;scene&#x60; 仅在 &#x60;mode&#x3D;recommend&#x60; 时生效且必填，其他模式下会被忽略。 &gt; - 请求示例： &gt;   - 随机：&#x60;GET /api/v1/saying/random&#x60; &gt;   - 每日：&#x60;GET /api/v1/saying/random?mode&#x3D;daily&#x60; &gt;   - 场景：&#x60;GET /api/v1/saying/random?mode&#x3D;recommend&amp;scene&#x3D;night&#x60; &gt;   - 此刻：&#x60;GET /api/v1/saying/random?mode&#x3D;moment&#x60;

### Example

```ts
import {
  Configuration,
  PoemApi,
} from 'uapi-browser-sdk-browser';
import type { GetSayingRandomRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new PoemApi();

  const body = {
    // 'random' | 'daily' | 'recommend' | 'moment' | 运行模式。不传或 random 为随机一言；可选 daily、recommend、moment。 (optional)
    mode: mode_example,
    // 'dawn' | 'morning' | 'noon' | 'afternoon' | 'evening' | 'night' | 'deep-night' | 'work' | 'coding' | 'meeting' | 'relax' | 'emo' | 'philosophy' | 推荐场景。当 mode=recommend 时必填，例如 night、morning、work 等。请从[支持的场景列表](#enum-list)中选择。 (optional)
    scene: scene_example,
    // 'caoxingyu sentence' | 'english historical quotes' | 'quotable' | 'sentences bundle' | 语料来源过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的来源列表](#enum-list)中选择。 (optional)
    source: source_example,
    // string | 分类过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的分类列表](#enum-list)中选择。 (optional)
    category: category_example,
    // string | 标签过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的标签列表](#enum-list)中选择。 (optional)
    tag: tag_example,
  } satisfies GetSayingRandomRequest;

  try {
    const data = await api.getSayingRandom(body);
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
| **mode** | `random`, `daily`, `recommend`, `moment` | 运行模式。不传或 random 为随机一言；可选 daily、recommend、moment。 | [Optional] [Defaults to `&#39;random&#39;`] [Enum: random, daily, recommend, moment] |
| **scene** | `dawn`, `morning`, `noon`, `afternoon`, `evening`, `night`, `deep-night`, `work`, `coding`, `meeting`, `relax`, `emo`, `philosophy` | 推荐场景。当 mode&#x3D;recommend 时必填，例如 night、morning、work 等。请从[支持的场景列表](#enum-list)中选择。 | [Optional] [Defaults to `undefined`] [Enum: dawn, morning, noon, afternoon, evening, night, deep-night, work, coding, meeting, relax, emo, philosophy] |
| **source** | `caoxingyu sentence`, `english historical quotes`, `quotable`, `sentences bundle` | 语料来源过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的来源列表](#enum-list)中选择。 | [Optional] [Defaults to `undefined`] [Enum: caoxingyu sentence, english historical quotes, quotable, sentences bundle] |
| **category** | `string` | 分类过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的分类列表](#enum-list)中选择。 | [Optional] [Defaults to `undefined`] |
| **tag** | `string` | 标签过滤。支持重复传参，或使用逗号/分号分隔多个值。请从[支持的标签列表](#enum-list)中选择。 | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSayingRandom200Response**](GetSayingRandom200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 请求成功。&#x60;random&#x60; 模式直接返回语录对象；&#x60;daily&#x60; / &#x60;recommend&#x60; / &#x60;moment&#x60; 模式返回带模式信息的包装对象，语录本体在 &#x60;item&#x60; 字段中。 |  -  |
| **400** | 参数无效。通常是由于指定的推荐场景不存在，或者过滤参数格式有误。 |  -  |
| **404** | 未找到满足当前过滤条件的语录数据。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

