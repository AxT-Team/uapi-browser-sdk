# TranslateApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAiTranslateLanguages**](TranslateApi.md#getaitranslatelanguages) | **GET** /ai/translate/languages | 获取AI翻译支持的语言和配置 |
| [**postAiTranslate**](TranslateApi.md#postaitranslateoperation) | **POST** /ai/translate | AI智能翻译 |
| [**postTranslateStream**](TranslateApi.md#posttranslatestreamoperation) | **POST** /translate/stream | 流式翻译（中英互译） |
| [**postTranslateText**](TranslateApi.md#posttranslatetextoperation) | **POST** /translate/text | 多语言文本翻译 |



## getAiTranslateLanguages

> GetAiTranslateLanguages200Response getAiTranslateLanguages()

获取AI翻译支持的语言和配置

获取AI智能翻译服务支持的完整语言列表、翻译风格选项、上下文场景选项以及性能指标信息。这个接口对于需要在前端动态展示翻译配置选项的应用非常有用，它会返回当前AI翻译服务所支持的所有语言代码、原生名称、翻译风格说明、上下文场景描述，以及服务的性能特征和限制信息。通过此接口，开发者可以构建用户友好的翻译界面，让用户选择合适的翻译参数。

### Example

```ts
import {
  Configuration,
  TranslateApi,
} from 'uapi-browser-sdk-browser';
import type { GetAiTranslateLanguagesRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TranslateApi();

  try {
    const data = await api.getAiTranslateLanguages();
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

[**GetAiTranslateLanguages200Response**](GetAiTranslateLanguages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功获取AI翻译配置信息！ |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postAiTranslate

> PostAiTranslate200Response postAiTranslate(targetLang, postAiTranslateRequest)

AI智能翻译

这是一个商业级的AI智能翻译服务，采用最新的神经网络翻译技术和大语言模型，提供远超传统机器翻译的质量。它不仅能够智能处理单个文本翻译，还支持高效的批量文本翻译，并且具备上下文感知、风格适配、格式保留等高级功能。  &gt; [!VIP] &gt; 本API目前处于**限时免费**阶段，我们鼓励开发者深度集成和测试。未来，它将转为付费API，为用户提供更稳定、更智能的翻译服务。  ## 功能概述  - **智能双模式**: 支持单个文本翻译和批量文本翻译的统一接口设计，自动识别请求类型并提供相应的翻译服务。系统会根据输入自动判断是处理单条文本还是批量文本，无需使用不同的接口。 - **多风格适配**: 提供随意口语化、专业商务、学术正式、文学艺术四种翻译风格，能够根据不同场景需求调整翻译的语言风格和表达方式。 - **上下文感知**: 支持通用、商务、技术、医疗、法律、市场营销、娱乐、教育、新闻等九种专业领域的上下文翻译，确保术语准确性和表达地道性。 - **高质量保证**: 内置质量评估系统，对每次翻译结果进行流畅度、准确度、完整性评分，并提供置信度分数和替代翻译建议。 - **智能解释**: 提供关键词组翻译注释、文化背景说明和语法结构分析，帮助用户理解翻译逻辑和文化差异。 - **高效批量**: 批量翻译支持最多50条文本，总计10万字符，配备智能并发控制（1-10并发）和失败重试机制。 - **快速模式**: 提供快速模式选项，在保证95%+准确率的前提下，响应时间缩短至800ms内，适合实时翻译和聊天应用。 - **格式保留**: 智能识别并保持原文的格式结构，包括换行、缩进、特殊符号等，确保翻译后的文本保持良好的可读性。

### Example

```ts
import {
  Configuration,
  TranslateApi,
} from 'uapi-browser-sdk-browser';
import type { PostAiTranslateOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TranslateApi();

  const body = {
    // 'sq' | 'ga' | 'et' | 'ar' | 'am' | 'az' | 'be' | 'bg' | 'eu' | 'is' | 'pl' | 'bs-Latn' | 'fa' | 'da' | 'de' | 'ru' | 'fr' | 'tl' | 'fi' | 'fy' | 'km' | 'ka' | 'gu' | 'ht' | 'ko' | 'ha' | 'kk' | 'nl' | 'gl' | 'ca' | 'cs' | 'ky' | 'kn' | 'tlh' | 'hr' | 'otq' | 'co' | 'ku' | 'la' | 'lo' | 'lv' | 'lt' | 'ro' | 'lb' | 'mg' | 'mt' | 'mr' | 'ms' | 'ml' | 'mi' | 'mk' | 'mn' | 'bn' | 'my' | 'mww' | 'hmn' | 'xh' | 'zu' | 'ne' | 'false' | 'pa' | 'ps' | 'pt' | 'ny' | 'ja' | 'sv' | 'sr-Latn' | 'sr-Cyrl' | 'st' | 'sm' | 'si' | 'eo' | 'sk' | 'sl' | 'sw' | 'gd' | 'so' | 'ceb' | 'te' | 'ta' | 'th' | 'tg' | 'tr' | 'cy' | 'zh-lzh' | 'ur' | 'uk' | 'uz' | 'haw' | 'es' | 'he' | 'el' | 'sd' | 'hu' | 'sn' | 'hy' | 'ig' | 'it' | 'yi' | 'hi' | 'id' | 'en' | 'su' | 'jw' | 'yua' | 'yo' | 'vi' | 'zh-CHS' | 'zh-CHT' | 目标语言代码。请从支持的语言列表中选择一个语言代码。
    targetLang: zh-CHS,
    // PostAiTranslateRequest | 包含翻译参数的JSON对象，支持单个文本或批量文本翻译
    postAiTranslateRequest: ...,
  } satisfies PostAiTranslateOperationRequest;

  try {
    const data = await api.postAiTranslate(body);
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
| **targetLang** | `sq`, `ga`, `et`, `ar`, `am`, `az`, `be`, `bg`, `eu`, `is`, `pl`, `bs-Latn`, `fa`, `da`, `de`, `ru`, `fr`, `tl`, `fi`, `fy`, `km`, `ka`, `gu`, `ht`, `ko`, `ha`, `kk`, `nl`, `gl`, `ca`, `cs`, `ky`, `kn`, `tlh`, `hr`, `otq`, `co`, `ku`, `la`, `lo`, `lv`, `lt`, `ro`, `lb`, `mg`, `mt`, `mr`, `ms`, `ml`, `mi`, `mk`, `mn`, `bn`, `my`, `mww`, `hmn`, `xh`, `zu`, `ne`, `false`, `pa`, `ps`, `pt`, `ny`, `ja`, `sv`, `sr-Latn`, `sr-Cyrl`, `st`, `sm`, `si`, `eo`, `sk`, `sl`, `sw`, `gd`, `so`, `ceb`, `te`, `ta`, `th`, `tg`, `tr`, `cy`, `zh-lzh`, `ur`, `uk`, `uz`, `haw`, `es`, `he`, `el`, `sd`, `hu`, `sn`, `hy`, `ig`, `it`, `yi`, `hi`, `id`, `en`, `su`, `jw`, `yua`, `yo`, `vi`, `zh-CHS`, `zh-CHT` | 目标语言代码。请从支持的语言列表中选择一个语言代码。 | [Defaults to `undefined`] [Enum: sq, ga, et, ar, am, az, be, bg, eu, is, pl, bs-Latn, fa, da, de, ru, fr, tl, fi, fy, km, ka, gu, ht, ko, ha, kk, nl, gl, ca, cs, ky, kn, tlh, hr, otq, co, ku, la, lo, lv, lt, ro, lb, mg, mt, mr, ms, ml, mi, mk, mn, bn, my, mww, hmn, xh, zu, ne, false, pa, ps, pt, ny, ja, sv, sr-Latn, sr-Cyrl, st, sm, si, eo, sk, sl, sw, gd, so, ceb, te, ta, th, tg, tr, cy, zh-lzh, ur, uk, uz, haw, es, he, el, sd, hu, sn, hy, ig, it, yi, hi, id, en, su, jw, yua, yo, vi, zh-CHS, zh-CHT] |
| **postAiTranslateRequest** | [PostAiTranslateRequest](PostAiTranslateRequest.md) | 包含翻译参数的JSON对象，支持单个文本或批量文本翻译 | |

### Return type

[**PostAiTranslate200Response**](PostAiTranslate200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 翻译成功！返回翻译结果、质量指标和性能统计。 |  -  |
| **400** | 请求参数错误。请检查必填参数和参数格式是否正确。 |  -  |
| **401** | 认证失败。请检查API密钥是否有效。 |  -  |
| **429** | 请求频率过高。请稍后重试。 |  -  |
| **500** | 翻译服务内部错误。请稍后重试或联系技术支持。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTranslateStream

> string postTranslateStream(postTranslateStreamRequest)

流式翻译（中英互译）

想让翻译结果像打字机一样逐字显示出来？这个流式翻译接口能实现这种效果。  ## 功能概述 不同于传统翻译API一次性返回完整结果，这个接口会实时地、一个字一个字地把翻译内容推给你（就像ChatGPT回复消息那样），非常适合用在聊天应用、直播字幕等需要即时反馈的场景。  ## 它能做什么 - **中英互译**：支持中文和英文之间的双向翻译 - **自动识别**：不确定源语言？设置为 &#x60;auto&#x60; 让我们自动检测 - **逐字返回**：翻译结果会像打字机一样逐字流式返回，用户体验更流畅 - **音频朗读**：部分翻译结果会附带音频链接，方便朗读  ## 支持的语言 目前专注于中英互译，支持以下选项： - &#x60;中文&#x60;（简体/繁体） - &#x60;英文&#x60; - &#x60;auto&#x60;（自动检测）

### Example

```ts
import {
  Configuration,
  TranslateApi,
} from 'uapi-browser-sdk-browser';
import type { PostTranslateStreamOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TranslateApi();

  const body = {
    // PostTranslateStreamRequest | 包含翻译参数的JSON对象
    postTranslateStreamRequest: ...,
  } satisfies PostTranslateStreamOperationRequest;

  try {
    const data = await api.postTranslateStream(body);
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
| **postTranslateStreamRequest** | [PostTranslateStreamRequest](PostTranslateStreamRequest.md) | 包含翻译参数的JSON对象 | |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/event-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SSE流式响应。Content-Type为text/event-stream |  -  |
| **400** | 请求参数错误 |  -  |
| **500** | 翻译服务错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTranslateText

> PostTranslateText200Response postTranslateText(toLang, postTranslateTextRequest)

多语言文本翻译

需要跨越语言的鸿沟进行交流？这个翻译接口是你可靠的\&#39;同声传译\&#39;。  ## 功能概述 你可以将一段源语言文本（我们能自动检测源语言）翻译成你指定的任何目标语言。无论是中译英、日译法，都不在话下。  ## 支持的语言 我们支持超过100种语言的互译，包括但不限于：中文（简体/繁体）、英语、日语、韩语、法语、德语、西班牙语、俄语、阿拉伯语等主流语言，以及各种小语种。详见下方参数列表。

### Example

```ts
import {
  Configuration,
  TranslateApi,
} from 'uapi-browser-sdk-browser';
import type { PostTranslateTextOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TranslateApi();

  const body = {
    // 'sq' | 'ga' | 'et' | 'ar' | 'am' | 'az' | 'be' | 'bg' | 'eu' | 'is' | 'pl' | 'bs-Latn' | 'fa' | 'da' | 'de' | 'ru' | 'fr' | 'tl' | 'fi' | 'fy' | 'km' | 'ka' | 'gu' | 'ht' | 'ko' | 'ha' | 'kk' | 'nl' | 'gl' | 'ca' | 'cs' | 'ky' | 'kn' | 'tlh' | 'hr' | 'otq' | 'co' | 'ku' | 'la' | 'lo' | 'lv' | 'lt' | 'ro' | 'lb' | 'mg' | 'mt' | 'mr' | 'ms' | 'ml' | 'mi' | 'mk' | 'mn' | 'bn' | 'my' | 'mww' | 'hmn' | 'xh' | 'zu' | 'ne' | 'false' | 'pa' | 'ps' | 'pt' | 'ny' | 'ja' | 'sv' | 'sr-Latn' | 'sr-Cyrl' | 'st' | 'sm' | 'si' | 'eo' | 'sk' | 'sl' | 'sw' | 'gd' | 'so' | 'ceb' | 'te' | 'ta' | 'th' | 'tg' | 'tr' | 'cy' | 'zh-lzh' | 'ur' | 'uk' | 'uz' | 'haw' | 'es' | 'he' | 'el' | 'sd' | 'hu' | 'sn' | 'hy' | 'ig' | 'it' | 'yi' | 'hi' | 'id' | 'en' | 'su' | 'jw' | 'yua' | 'yo' | 'vi' | 'zh-CHS' | 'zh-CHT' | 目标语言代码。请从支持的语言列表中选择一个语言代码。
    toLang: zh-CHS,
    // PostTranslateTextRequest | 包含待翻译文本的JSON对象
    postTranslateTextRequest: ...,
  } satisfies PostTranslateTextOperationRequest;

  try {
    const data = await api.postTranslateText(body);
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
| **toLang** | `sq`, `ga`, `et`, `ar`, `am`, `az`, `be`, `bg`, `eu`, `is`, `pl`, `bs-Latn`, `fa`, `da`, `de`, `ru`, `fr`, `tl`, `fi`, `fy`, `km`, `ka`, `gu`, `ht`, `ko`, `ha`, `kk`, `nl`, `gl`, `ca`, `cs`, `ky`, `kn`, `tlh`, `hr`, `otq`, `co`, `ku`, `la`, `lo`, `lv`, `lt`, `ro`, `lb`, `mg`, `mt`, `mr`, `ms`, `ml`, `mi`, `mk`, `mn`, `bn`, `my`, `mww`, `hmn`, `xh`, `zu`, `ne`, `false`, `pa`, `ps`, `pt`, `ny`, `ja`, `sv`, `sr-Latn`, `sr-Cyrl`, `st`, `sm`, `si`, `eo`, `sk`, `sl`, `sw`, `gd`, `so`, `ceb`, `te`, `ta`, `th`, `tg`, `tr`, `cy`, `zh-lzh`, `ur`, `uk`, `uz`, `haw`, `es`, `he`, `el`, `sd`, `hu`, `sn`, `hy`, `ig`, `it`, `yi`, `hi`, `id`, `en`, `su`, `jw`, `yua`, `yo`, `vi`, `zh-CHS`, `zh-CHT` | 目标语言代码。请从支持的语言列表中选择一个语言代码。 | [Defaults to `undefined`] [Enum: sq, ga, et, ar, am, az, be, bg, eu, is, pl, bs-Latn, fa, da, de, ru, fr, tl, fi, fy, km, ka, gu, ht, ko, ha, kk, nl, gl, ca, cs, ky, kn, tlh, hr, otq, co, ku, la, lo, lv, lt, ro, lb, mg, mt, mr, ms, ml, mi, mk, mn, bn, my, mww, hmn, xh, zu, ne, false, pa, ps, pt, ny, ja, sv, sr-Latn, sr-Cyrl, st, sm, si, eo, sk, sl, sw, gd, so, ceb, te, ta, th, tg, tr, cy, zh-lzh, ur, uk, uz, haw, es, he, el, sd, hu, sn, hy, ig, it, yi, hi, id, en, su, jw, yua, yo, vi, zh-CHS, zh-CHT] |
| **postTranslateTextRequest** | [PostTranslateTextRequest](PostTranslateTextRequest.md) | 包含待翻译文本的JSON对象 | |

### Return type

[**PostTranslateText200Response**](PostTranslateText200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 无效的请求体 |  -  |
| **500** | 翻译失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

