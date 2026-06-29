# DictionaryApi

All URIs are relative to *https://uapis.cn*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDictionaryAudio**](DictionaryApi.md#getdictionaryaudio) | **GET** /dictionary/audio | 单词发音 |
| [**getDictionaryLookup**](DictionaryApi.md#getdictionarylookup) | **GET** /dictionary/lookup | 单词查询 |



## getDictionaryAudio

> Blob getDictionaryAudio(word, accent)

单词发音

光看音标不知道怎么读？用这个接口为单词配上纯正的真人发音，并且支持英式与美式两种口音自由切换。  ## 功能概述 只需传入单词文本和所需的口音类型，接口就会直接响应 &#x60;.mp3&#x60; 格式的二进制音频流。你可以直接把接口地址塞进前端的 &#x60;&lt;audio&gt;&#x60; 标签里播放，或者将其下载保存为本地音频文件。另外，“单词查询”接口中返回的 &#x60;audio&#x60; 字段，实际上也就是直接拼装好的本接口地址。  ## 使用须知 &gt; [!NOTE] &gt; 本接口成功调用时返回的是 &#x60;audio/mpeg&#x60; 格式的二进制音频流，而不是常规的 JSON。如果在代码里使用 Fetch 或 Axios 调用并处理返回数据，请务必以 &#x60;blob&#x60; 或 &#x60;arraybuffer&#x60; 的形式接收响应内容。

### Example

```ts
import {
  Configuration,
  DictionaryApi,
} from 'uapi-browser-sdk-browser';
import type { GetDictionaryAudioRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DictionaryApi();

  const body = {
    // string | 要发音的英文单词，长度不超过 64 个字符。
    word: present,
    // 'uk' | 'us' | 口音偏好：uk（英式）或 us（美式），默认 uk。 (optional)
    accent: accent_example,
  } satisfies GetDictionaryAudioRequest;

  try {
    const data = await api.getDictionaryAudio(body);
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
| **word** | `string` | 要发音的英文单词，长度不超过 64 个字符。 | [Defaults to `undefined`] |
| **accent** | `uk`, `us` | 口音偏好：uk（英式）或 us（美式），默认 uk。 | [Optional] [Defaults to `&#39;uk&#39;`] [Enum: uk, us] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `audio/mpeg`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 请求成功，响应体为 MP3 格式的二进制音频数据。 |  -  |
| **400** | 参数错误。例如 word 参数为空或 accent 指定了不支持的口音。 |  -  |
| **404** | 未找到该单词的音频文件。 |  -  |
| **502** | 发音服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDictionaryLookup

> GetDictionaryLookup200Response getDictionaryLookup(word, lang)

单词查询

想在自己的背单词应用、阅读插件或聊天机器人里加个查词功能？输入一个英文单词，就能立刻拿到一本详尽的“微型词典”。  ## 功能概述 传入你要查询的英文单词，接口会返回一整份全方位的词条数据。数据结构是高度动态的——如果某个单词没有常见词组或近义词，对应的字段会自动省略，方便前端精简渲染。  ## 返回内容涵盖 - **音标与发音** (&#x60;phonetics&#x60;)：包含英式（UK）与美式（US）音标，以及可直接在前端播放的发音音频链接。 - **中文释义** (&#x60;definitions&#x60;)：按词性归类的中文翻译。 - **英英释义** (&#x60;english_definitions&#x60;)：英文原汁原味的解释及附带的短例句。 - **词形变化** (&#x60;word_forms&#x60;)：复数、过去式、比较级等形态转换。 - **词组与近义词** (&#x60;phrases&#x60; / &#x60;synonyms&#x60;)：常见的搭配词组，以及按词性归类的近义词。 - **双语例句** (&#x60;examples&#x60;)：真实语境下的中英双语例句。

### Example

```ts
import {
  Configuration,
  DictionaryApi,
} from 'uapi-browser-sdk-browser';
import type { GetDictionaryLookupRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DictionaryApi();

  const body = {
    // string | 要查询的英文单词，长度不超过 64 个字符。
    word: present,
    // 'en' | 目标语种。目前仅支持 en（默认）。 (optional)
    lang: lang_example,
  } satisfies GetDictionaryLookupRequest;

  try {
    const data = await api.getDictionaryLookup(body);
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
| **word** | `string` | 要查询的英文单词，长度不超过 64 个字符。 | [Defaults to `undefined`] |
| **lang** | `en` | 目标语种。目前仅支持 en（默认）。 | [Optional] [Defaults to `&#39;en&#39;`] [Enum: en] |

### Return type

[**GetDictionaryLookup200Response**](GetDictionaryLookup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 查询成功，返回该单词的完整词条数据。 |  -  |
| **400** | 参数错误。例如 word 参数为空或超过了最大长度限制。 |  -  |
| **404** | 未找到该单词的释义，可能是由于拼写错误或词库暂未收录。 |  -  |
| **502** | 查词服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

