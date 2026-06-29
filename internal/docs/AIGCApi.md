# AIGCApi

All URIs are relative to *https://uapis.cn*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postWatermarkDecode**](AIGCApi.md#postwatermarkdecode) | **POST** /watermark/decode | 提取图片隐水印 |
| [**postWatermarkEmbed**](AIGCApi.md#postwatermarkembed) | **POST** /watermark/embed | 添加图片隐水印 |
| [**postWatermarkLabel**](AIGCApi.md#postwatermarklabel) | **POST** /watermark/label | 添加 AI 生成内容标识 |
| [**postWatermarkProducerCode**](AIGCApi.md#postwatermarkproducercodeoperation) | **POST** /watermark/producer-code | 生成 AIGC 服务提供者编码 |



## postWatermarkDecode

> PostWatermarkDecode200Response postWatermarkDecode(ecc, file, imageBase64, modelType, url)

提取图片隐水印

遇到一张疑似被盗用或 AI 生成的图片，想查查它有没有被打过“思想钢印”？直接把图片扔给这个接口，它能把藏在里面的标识完完整整地提取出来。  ## 功能概述 此接口用于检测图片中是否包含隐形水印，若存在则还原出写入的原始标识内容。即使图片经历过压缩、截取或多次网络转发，也具备较高的成功提取率。接口具备防误判机制，若图片确实未经过处理，会明确返回未检测到结果，而不会强制拼接无效内容。  ## 使用须知 如果您在嵌入水印时修改过进阶参数（如 &#x60;ecc&#x60; 或 &#x60;model_type&#x60;），在提取时必须传入相同的参数值。若嵌入时使用的是默认配置，此处直接留空即可。

### Example

```ts
import {
  Configuration,
  AIGCApi,
} from 'uapi-browser-sdk-browser';
import type { PostWatermarkDecodeRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AIGCApi(config);

  const body = {
    // string | 纠错强度，必须和嵌入时填的一致，否则无法正确提取。[查看各档位](#enum-list) (optional)
    ecc: ecc_example,
    // Blob | 要提取水印的图片文件，支持 PNG、JPEG、WebP。 (optional)
    file: BINARY_DATA_HERE,
    // string | 图片的 Base64 编码，可携带或省略 data: 前缀。 (optional)
    imageBase64: imageBase64_example,
    // string | 水印档位，必须和嵌入时用的一致，否则无法正确提取。[查看各档位](#enum-list) (optional)
    modelType: modelType_example,
    // string | 图片链接，需确保公网可直接访问。 (optional)
    url: url_example,
  } satisfies PostWatermarkDecodeRequest;

  try {
    const data = await api.postWatermarkDecode(body);
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
| **ecc** | `BCH_SUPER`, `BCH_5`, `BCH_4`, `BCH_3` | 纠错强度，必须和嵌入时填的一致，否则无法正确提取。[查看各档位](#enum-list) | [Optional] [Defaults to `&#39;BCH_4&#39;`] [Enum: BCH_SUPER, BCH_5, BCH_4, BCH_3] |
| **file** | `Blob` | 要提取水印的图片文件，支持 PNG、JPEG、WebP。 | [Optional] [Defaults to `undefined`] |
| **imageBase64** | `string` | 图片的 Base64 编码，可携带或省略 data: 前缀。 | [Optional] [Defaults to `undefined`] |
| **modelType** | `B`, `Q` | 水印档位，必须和嵌入时用的一致，否则无法正确提取。[查看各档位](#enum-list) | [Optional] [Defaults to `&#39;B&#39;`] [Enum: B, Q] |
| **url** | `string` | 图片链接，需确保公网可直接访问。 | [Optional] [Defaults to `undefined`] |

### Return type

[**PostWatermarkDecode200Response**](PostWatermarkDecode200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 读取完成，返回分析与提取结果。 |  -  |
| **400** | 参数无效，请检查是否正确提供了图片来源。 |  -  |
| **503** | 服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWatermarkEmbed

> PostWatermarkEmbed200Response postWatermarkEmbed(payload, ecc, file, imageBase64, jpegQuality, modelType, outFormat, strength, url)

添加图片隐水印

想给自己的原创图片打上专属烙印，又不想破坏画面美感？或者是为了 AIGC 生成的图片做后续溯源追踪？这个接口能帮您把自定义标识悄悄藏进图片里。  ## 功能概述 您可以上传图片并指定一段标识文本，接口会利用算法将这段文本隐形嵌入到图片的像素之中。嵌入后的图片在肉眼看来毫无变化，但能够有效抵抗常见的缩放、裁剪、社交平台压缩与二次转发。适合用于标记图片来源、追踪分发渠道或进行隐蔽的版权确权。  ## 使用须知 **容量限制**：受限于隐形水印的算法特性，图片能嵌入的字符长度有限（通常为短码）。建议只放入简短的溯源 ID 或特征码，将完整的映射信息存储在您自己的数据库中。  **参数说明**：提供图片的方式（&#x60;file&#x60; / &#x60;url&#x60; / &#x60;image_base64&#x60;）三选一即可；其他进阶参数如无特殊需求，建议保持留空使用默认最佳配置。

### Example

```ts
import {
  Configuration,
  AIGCApi,
} from 'uapi-browser-sdk-browser';
import type { PostWatermarkEmbedRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AIGCApi(config);

  const body = {
    // string | 需要嵌入图片的隐形标识内容。
    payload: payload_example,
    // string | 纠错强度，决定水印能抗多少损坏、最多能嵌入多少字符：纠错越强，图片被压缩、裁剪后越容易读回，但能嵌入的字符越少。不填默认 `BCH_4`。[查看各档位](#enum-list) (optional)
    ecc: ecc_example,
    // Blob | 要加水印的图片文件，支持 PNG、JPEG、WebP。 (optional)
    file: BINARY_DATA_HERE,
    // string | 图片的 Base64 编码，可携带或省略 data: 前缀。 (optional)
    imageBase64: imageBase64_example,
    // number | 输出 JPEG 时的图像质量，范围 1 到 100。 (optional)
    jpegQuality: 56,
    // string | 水印档位，在稳健性和画质之间取舍。不填默认 `B`。[查看各档位](#enum-list) (optional)
    modelType: modelType_example,
    // string | 输出的图片格式。不填则默认保持与原图一致。 (optional)
    outFormat: outFormat_example,
    // number | 水印写入强度，默认 `1.0`。调高更不容易被压缩、转发破坏，但更可能被肉眼看出；调低更隐蔽，但抗损坏能力下降。 (optional)
    strength: 8.14,
    // string | 图片链接，需确保公网可直接访问。 (optional)
    url: url_example,
  } satisfies PostWatermarkEmbedRequest;

  try {
    const data = await api.postWatermarkEmbed(body);
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
| **payload** | `string` | 需要嵌入图片的隐形标识内容。 | [Defaults to `undefined`] |
| **ecc** | `BCH_SUPER`, `BCH_5`, `BCH_4`, `BCH_3` | 纠错强度，决定水印能抗多少损坏、最多能嵌入多少字符：纠错越强，图片被压缩、裁剪后越容易读回，但能嵌入的字符越少。不填默认 &#x60;BCH_4&#x60;。[查看各档位](#enum-list) | [Optional] [Defaults to `&#39;BCH_4&#39;`] [Enum: BCH_SUPER, BCH_5, BCH_4, BCH_3] |
| **file** | `Blob` | 要加水印的图片文件，支持 PNG、JPEG、WebP。 | [Optional] [Defaults to `undefined`] |
| **imageBase64** | `string` | 图片的 Base64 编码，可携带或省略 data: 前缀。 | [Optional] [Defaults to `undefined`] |
| **jpegQuality** | `number` | 输出 JPEG 时的图像质量，范围 1 到 100。 | [Optional] [Defaults to `undefined`] |
| **modelType** | `B`, `Q` | 水印档位，在稳健性和画质之间取舍。不填默认 &#x60;B&#x60;。[查看各档位](#enum-list) | [Optional] [Defaults to `&#39;B&#39;`] [Enum: B, Q] |
| **outFormat** | `png`, `jpeg` | 输出的图片格式。不填则默认保持与原图一致。 | [Optional] [Defaults to `undefined`] [Enum: png, jpeg] |
| **strength** | `number` | 水印写入强度，默认 &#x60;1.0&#x60;。调高更不容易被压缩、转发破坏，但更可能被肉眼看出；调低更隐蔽，但抗损坏能力下降。 | [Optional] [Defaults to `1`] |
| **url** | `string` | 图片链接，需确保公网可直接访问。 | [Optional] [Defaults to `undefined`] |

### Return type

[**PostWatermarkEmbed200Response**](PostWatermarkEmbed200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 嵌入成功，返回带有隐形水印的图片数据。 |  -  |
| **400** | 参数无效，请检查是否正确提供了图片及水印内容。 |  -  |
| **413** | 上传的图片过大，请压缩后再试。 |  -  |
| **503** | 服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWatermarkLabel

> PostWatermarkLabel200Response postWatermarkLabel(contentProducer, contentPropagator, embedWatermark, explicitHeightRatio, explicitLabel, explicitPosition, explicitText, file, imageBase64, jpegQuality, label, outFormat, produceId, propagateId, skipMetadata, url, watermarkPayload)

添加 AI 生成内容标识

AI 生成的图片上线前需要满足国标合规要求？别头疼，调用一次这个接口，就能自动给图片打上符合《GB 45438-2025》标准的三层标识。  ## 三层标识说明 此接口一次性支持注入以下三种符合国标规范的标识： - **元数据隐式标识**（默认开启）：在图片文件的 EXIF/XMP 元数据中记录此内容的“AI 生成”属性及服务提供者信息，不影响视觉呈现。 - **可见角标标识**（可选）：在图片指定角落叠加醒目的“AI 生成”文字，字号会自动计算以符合国标关于“字符高度不小于画面短边 5%”的规定。 - **隐形水印标识**（可选）：在图像像素深层嵌入抗压缩溯源信息。  ## 使用须知 **必填说明**：根据规范，&#x60;content_producer&#x60;（服务提供者编码）为必填项。推荐使用本平台配套的 &#x60;/watermark/producer-code&#x60; 接口快速生成规范的 27 位服务提供者编码。  **标识组合**：若您需要关闭默认的元数据标识（&#x60;skip_metadata&#x3D;true&#x60;），则必须至少开启可见角标或隐形水印中的一项，以保证图片拥有合规标识。

### Example

```ts
import {
  Configuration,
  AIGCApi,
} from 'uapi-browser-sdk-browser';
import type { PostWatermarkLabelRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AIGCApi(config);

  const body = {
    // string | 必需：生成此图片的服务提供者编码（27 位）。
    contentProducer: contentProducer_example,
    // string | 负责内容传播的服务提供者编码（27 位，可选）。 (optional)
    contentPropagator: contentPropagator_example,
    // boolean | 是否额外注入抗压缩的隐形水印。默认不开启。 (optional)
    embedWatermark: true,
    // number | 角标文字高度占画面短边的比例。低于 0.05 会自动补偿至国标下限要求。 (optional)
    explicitHeightRatio: 8.14,
    // boolean | 是否叠加可见的角标文字标识。默认不开启。 (optional)
    explicitLabel: true,
    // string | 角标所处的相对位置，默认为右下角。 (optional)
    explicitPosition: explicitPosition_example,
    // string | 角标显示的具体文案，默认为“AI 生成”。 (optional)
    explicitText: explicitText_example,
    // Blob | 待处理的图片文件，支持 PNG、JPEG、WebP。 (optional)
    file: BINARY_DATA_HERE,
    // string | 图片的 Base64 编码，可携带或省略 data: 前缀。 (optional)
    imageBase64: imageBase64_example,
    // number | 输出 JPEG 时的图像质量，范围 1 到 100。 (optional)
    jpegQuality: 56,
    // string | 生成场景分类：1 代表 AI 生成合成，2 代表人机协同，3 代表其他情况。默认取值为 1。 (optional)
    label: label_example,
    // string | 输出的图片格式。不填则默认保持与原图一致。 (optional)
    outFormat: outFormat_example,
    // string | 服务侧内部生成的内容编号（可选）。 (optional)
    produceId: produceId_example,
    // string | 传播方侧的内容编号（可选）。 (optional)
    propagateId: propagateId_example,
    // boolean | 是否跳过写入元数据标识。若设置为 true，则必须开启另外两项中的至少一项。 (optional)
    skipMetadata: true,
    // string | 图片链接，需确保公网可直接访问。 (optional)
    url: url_example,
    // string | 隐形水印中所记载的标识内容。 (optional)
    watermarkPayload: watermarkPayload_example,
  } satisfies PostWatermarkLabelRequest;

  try {
    const data = await api.postWatermarkLabel(body);
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
| **contentProducer** | `string` | 必需：生成此图片的服务提供者编码（27 位）。 | [Defaults to `undefined`] |
| **contentPropagator** | `string` | 负责内容传播的服务提供者编码（27 位，可选）。 | [Optional] [Defaults to `undefined`] |
| **embedWatermark** | `boolean` | 是否额外注入抗压缩的隐形水印。默认不开启。 | [Optional] [Defaults to `false`] |
| **explicitHeightRatio** | `number` | 角标文字高度占画面短边的比例。低于 0.05 会自动补偿至国标下限要求。 | [Optional] [Defaults to `undefined`] |
| **explicitLabel** | `boolean` | 是否叠加可见的角标文字标识。默认不开启。 | [Optional] [Defaults to `false`] |
| **explicitPosition** | `top-left`, `top-right`, `bottom-left`, `bottom-right` | 角标所处的相对位置，默认为右下角。 | [Optional] [Defaults to `undefined`] [Enum: top-left, top-right, bottom-left, bottom-right] |
| **explicitText** | `string` | 角标显示的具体文案，默认为“AI 生成”。 | [Optional] [Defaults to `undefined`] |
| **file** | `Blob` | 待处理的图片文件，支持 PNG、JPEG、WebP。 | [Optional] [Defaults to `undefined`] |
| **imageBase64** | `string` | 图片的 Base64 编码，可携带或省略 data: 前缀。 | [Optional] [Defaults to `undefined`] |
| **jpegQuality** | `number` | 输出 JPEG 时的图像质量，范围 1 到 100。 | [Optional] [Defaults to `undefined`] |
| **label** | `1`, `2`, `3` | 生成场景分类：1 代表 AI 生成合成，2 代表人机协同，3 代表其他情况。默认取值为 1。 | [Optional] [Defaults to `undefined`] [Enum: 1, 2, 3] |
| **outFormat** | `png`, `jpeg` | 输出的图片格式。不填则默认保持与原图一致。 | [Optional] [Defaults to `undefined`] [Enum: png, jpeg] |
| **produceId** | `string` | 服务侧内部生成的内容编号（可选）。 | [Optional] [Defaults to `undefined`] |
| **propagateId** | `string` | 传播方侧的内容编号（可选）。 | [Optional] [Defaults to `undefined`] |
| **skipMetadata** | `boolean` | 是否跳过写入元数据标识。若设置为 true，则必须开启另外两项中的至少一项。 | [Optional] [Defaults to `false`] |
| **url** | `string` | 图片链接，需确保公网可直接访问。 | [Optional] [Defaults to `undefined`] |
| **watermarkPayload** | `string` | 隐形水印中所记载的标识内容。 | [Optional] [Defaults to `undefined`] |

### Return type

[**PostWatermarkLabel200Response**](PostWatermarkLabel200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 打标成功，返回符合合规要求的多层标识图片。 |  -  |
| **400** | 参数无效，请检查服务提供者编码格式，或确保至少开启了一种标识策略。 |  -  |
| **413** | 上传的图片过大，请压缩后再试。 |  -  |
| **503** | 服务暂时不可用，请稍后重试。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWatermarkProducerCode

> PostWatermarkProducerCode200Response postWatermarkProducerCode(postWatermarkProducerCodeRequest)

生成 AIGC 服务提供者编码

还在发愁怎么拼出符合《GB 45438-2025》要求的 27 位 AIGC 服务提供者编码？无论是想一键生成自己的专属合规编码，还是想校验已有编码对不对，这个接口都能帮您轻松搞定。  ## 功能概述 此接口具备“生成”与“校验”双重能力： - **生成模式**：填入组织或个人的主体身份信息与证件号，接口会自动处理复杂的拼位规则，输出标准的 27 位编码。 - **校验模式**：仅需填入现成的 &#x60;code&#x60;，接口将逐段拆解、验证其合法性，并解析出各个组成部分的实际含义。  ## 使用须知 **模式互斥**：当您在请求体中填入了 &#x60;code&#x60; 参数时，接口会自动进入“校验模式”，其余的生成参数将被忽略；反之则进入“生成模式”。  **独立生成**：该编码不依赖向外部机构注册申请，而是基于您的法定身份标识（如企业统一社会信用代码、个人身份证等）根据标准算法独立生成即可。

### Example

```ts
import {
  Configuration,
  AIGCApi,
} from 'uapi-browser-sdk-browser';
import type { PostWatermarkProducerCodeOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AIGCApi(config);

  const body = {
    // PostWatermarkProducerCodeRequest | 生成所需的身份信息，或用于校验的 27 位现成编码。支持 application/json。
    postWatermarkProducerCodeRequest: ...,
  } satisfies PostWatermarkProducerCodeOperationRequest;

  try {
    const data = await api.postWatermarkProducerCode(body);
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
| **postWatermarkProducerCodeRequest** | [PostWatermarkProducerCodeRequest](PostWatermarkProducerCodeRequest.md) | 生成所需的身份信息，或用于校验的 27 位现成编码。支持 application/json。 | |

### Return type

[**PostWatermarkProducerCode200Response**](PostWatermarkProducerCode200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 操作成功，返回生成的编码或校验的解析报告。 |  -  |
| **400** | 参数无效，主体信息不完整或编码校验失败。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

