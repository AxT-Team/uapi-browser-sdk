# TextApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTextMd5**](TextApi.md#gettextmd5) | **GET** /text/md5 | MD5 哈希 |
| [**postTextAesDecrypt**](TextApi.md#posttextaesdecryptoperation) | **POST** /text/aes/decrypt | AES 解密 |
| [**postTextAesDecryptAdvanced**](TextApi.md#posttextaesdecryptadvancedoperation) | **POST** /text/aes/decrypt-advanced | AES高级解密 |
| [**postTextAesEncrypt**](TextApi.md#posttextaesencryptoperation) | **POST** /text/aes/encrypt | AES 加密 |
| [**postTextAesEncryptAdvanced**](TextApi.md#posttextaesencryptadvancedoperation) | **POST** /text/aes/encrypt-advanced | AES高级加密 |
| [**postTextAnalyze**](TextApi.md#posttextanalyzeoperation) | **POST** /text/analyze | 文本分析 |
| [**postTextBase64Decode**](TextApi.md#posttextbase64decodeoperation) | **POST** /text/base64/decode | Base64 解码 |
| [**postTextBase64Encode**](TextApi.md#posttextbase64encodeoperation) | **POST** /text/base64/encode | Base64 编码 |
| [**postTextConvert**](TextApi.md#posttextconvertoperation) | **POST** /text/convert | 格式转换 |
| [**postTextMd5**](TextApi.md#posttextmd5operation) | **POST** /text/md5 | MD5 哈希 (POST) |
| [**postTextMd5Verify**](TextApi.md#posttextmd5verifyoperation) | **POST** /text/md5/verify | MD5 校验 |



## getTextMd5

> GetTextMd5200Response getTextMd5(text)

MD5 哈希

一个快速计算文本 MD5 哈希值的工具，适用于短文本且不关心参数暴露的场景。  ## 功能概述 通过GET请求的查询参数传入文本，返回其32位小写的MD5哈希值。  &gt; [!NOTE] &gt; 对于较长或敏感的文本，我们推荐使用本接口的 POST 版本，以避免URL长度限制和参数暴露问题。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { GetTextMd5Request } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // string | 需要计算哈希值的文本
    text: hello world,
  } satisfies GetTextMd5Request;

  try {
    const data = await api.getTextMd5(body);
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
| **text** | `string` | 需要计算哈希值的文本 | [Defaults to `undefined`] |

### Return type

[**GetTextMd5200Response**](GetTextMd5200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 缺少text参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextAesDecrypt

> PostTextAesDecrypt200Response postTextAesDecrypt(postTextAesDecryptRequest)

AES 解密

收到了用AES加密的密文？把它、密钥和随机数（nonce）交给我们，就能还原出原始内容。  ## 功能概述 这是一个标准的AES解密接口。你需要提供经过Base64编码的密文、加密时使用的密钥和nonce（随机数，通常为16字节字符串）。  &gt; [!IMPORTANT] &gt; **关于密钥 &#x60;key&#x60;** &gt; 我们支持 AES-128, AES-192, 和 AES-256。请确保你提供的密钥 &#x60;key&#x60; 的长度（字节数）正好是 **16**、**24** 或 **32**，以分别对应这三种加密强度。 &gt;  &gt; **关于随机数 &#x60;nonce&#x60;** &gt; 通常为16字节字符串，需与加密时一致。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextAesDecryptOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextAesDecryptRequest | 包含待解密文本 \'text\'、密钥 \'key\' 和随机数 \'nonce\' 的JSON对象
    postTextAesDecryptRequest: ...,
  } satisfies PostTextAesDecryptOperationRequest;

  try {
    const data = await api.postTextAesDecrypt(body);
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
| **postTextAesDecryptRequest** | [PostTextAesDecryptRequest](PostTextAesDecryptRequest.md) | 包含待解密文本 \&#39;text\&#39;、密钥 \&#39;key\&#39; 和随机数 \&#39;nonce\&#39; 的JSON对象 | |

### Return type

[**PostTextAesDecrypt200Response**](PostTextAesDecrypt200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 无效的请求参数 |  -  |
| **500** | 解密失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextAesDecryptAdvanced

> PostTextAesDecryptAdvanced200Response postTextAesDecryptAdvanced(postTextAesDecryptAdvancedRequest)

AES高级解密

需要解密通过高级加密接口加密的数据？这个接口提供与加密接口完全配对的解密功能，支持相同的6种加密模式和3种填充方式。  &gt; [!IMPORTANT] &gt; **解密参数必须与加密时一致** &gt; 解密时，必须提供与加密时相同的密钥、模式和填充方式。对于非GCM模式，还需要提供加密时返回的IV。  ## 功能概述 这是一个功能完整的AES解密接口，能够解密通过高级加密接口加密的所有密文。支持所有6种加密模式和3种填充方式，与加密接口完全配对。  ### 解密流程 1. 获取加密时返回的密文和配置参数 2. 使用相同的密钥、模式、填充方式和IV（如需要） 3. 调用本接口进行解密 4. 获取原始明文  ### 支持的解密模式 - **GCM模式**（推荐）：自动验证数据完整性，如果密文被篡改会解密失败 - **CBC模式**：经典块解密模式，需要提供加密时的IV - **CTR/OFB/CFB模式**：流密码解密，需要提供加密时的IV - **ECB模式**：不需要IV，但安全性较低  ### 填充方式处理 - **PKCS7填充**：解密后自动移除填充 - **Zero填充**：解密后自动移除0x00填充 - **None填充**：无填充处理  ## 参数说明 - **&#x60;text&#x60;**: 待解密的密文（Base64编码，来自加密接口返回的ciphertext字段） - **&#x60;key&#x60;**: 解密密钥（必须与加密时相同） - **&#x60;mode&#x60;**: 加密模式（必须与加密时相同） - **&#x60;padding&#x60;**: 填充方式（可选，默认PKCS7，必须与加密时相同） - **&#x60;iv&#x60;**: 初始化向量（非GCM模式必须提供，Base64编码）  ## 常见错误处理 如果解密失败，请检查以下几点： - 密钥是否与加密时完全相同 - 模式和填充方式是否匹配 - 非GCM模式下是否提供了正确的IV - 密文是否完整且未被修改 - GCM模式下密文是否被篡改

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextAesDecryptAdvancedOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextAesDecryptAdvancedRequest | 包含解密配置的JSON对象
    postTextAesDecryptAdvancedRequest: ...,
  } satisfies PostTextAesDecryptAdvancedOperationRequest;

  try {
    const data = await api.postTextAesDecryptAdvanced(body);
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
| **postTextAesDecryptAdvancedRequest** | [PostTextAesDecryptAdvancedRequest](PostTextAesDecryptAdvancedRequest.md) | 包含解密配置的JSON对象 | |

### Return type

[**PostTextAesDecryptAdvanced200Response**](PostTextAesDecryptAdvanced200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 解密成功，返回原始明文 |  -  |
| **400** | 无效的请求参数或解密失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextAesEncrypt

> PostTextAesEncrypt200Response postTextAesEncrypt(postTextAesEncryptRequest)

AES 加密

需要安全地传输或存储一些文本信息？AES加密是一个可靠的选择。  ## 功能概述 这是一个标准的AES加密接口。你提供需要加密的明文和密钥，我们返回经过Base64编码的密文。  &gt; [!IMPORTANT] &gt; **关于密钥 &#x60;key&#x60;** &gt; 我们支持 AES-128, AES-192, 和 AES-256。请确保你提供的密钥 &#x60;key&#x60; 的长度（字节数）正好是 **16**、**24** 或 **32**，以分别对应这三种加密强度。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextAesEncryptOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextAesEncryptRequest | 包含待加密文本 \'text\' 和密钥 \'key\' 的JSON对象
    postTextAesEncryptRequest: ...,
  } satisfies PostTextAesEncryptOperationRequest;

  try {
    const data = await api.postTextAesEncrypt(body);
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
| **postTextAesEncryptRequest** | [PostTextAesEncryptRequest](PostTextAesEncryptRequest.md) | 包含待加密文本 \&#39;text\&#39; 和密钥 \&#39;key\&#39; 的JSON对象 | |

### Return type

[**PostTextAesEncrypt200Response**](PostTextAesEncrypt200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 无效的请求参数 |  -  |
| **500** | 加密失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextAesEncryptAdvanced

> PostTextAesEncryptAdvanced200Response postTextAesEncryptAdvanced(postTextAesEncryptAdvancedRequest)

AES高级加密

需要更灵活的AES加密方案？这个高级接口支持6种加密模式和3种填充方式，让你根据具体场景选择最合适的加密配置。  &gt; [!IMPORTANT] &gt; **推荐使用GCM模式** &gt; GCM模式提供认证加密(AEAD)，不仅能加密数据，还能验证数据完整性，防止密文被篡改。这是目前最推荐的加密模式。  ## 功能概述 这是一个功能全面的AES加密接口，支持多种加密模式和填充方式。你可以根据不同的安全需求和性能要求，灵活选择合适的加密配置。  ### 支持的加密模式 - **GCM模式**（推荐）：认证加密模式，提供完整性保护 - **CBC模式**：经典块加密模式，需要IV和填充，适用于文件加密 - **CTR模式**：流密码模式，无需填充，适用于实时数据加密 - **OFB/CFB模式**：流密码模式，无需填充，适用于流数据加密 - **ECB模式**（不推荐）：仅用于兼容性需求  ### 支持的填充方式 - **PKCS7填充**（推荐）：标准填充方式 - **Zero填充**：使用0x00字节填充 - **None填充**：无填充，用于流密码模式  ### 输出格式支持 - **base64**（默认）：标准Base64编码输出，适合传输和存储 - **hex**：十六进制编码输出，方便与在线加密工具对比验证  通过 &#x60;output_format&#x60; 参数可以直接获取HEX格式的密文，无需额外调用转换接口。  ## 参数说明 - **&#x60;text&#x60;**: 待加密的明文文本 - **&#x60;key&#x60;**: 加密密钥（支持任意长度） - **&#x60;mode&#x60;**: 加密模式（可选，默认GCM） - **&#x60;padding&#x60;**: 填充方式（可选，默认PKCS7） - **&#x60;iv&#x60;**: 自定义IV（可选，Base64编码，16字节） - **&#x60;output_format&#x60;**: 输出格式（可选，默认base64）  ## 使用示例  **示例1：HEX格式输出** &#x60;&#x60;&#x60;json {   \&quot;text\&quot;: \&quot;测试文本123\&quot;,   \&quot;key\&quot;: \&quot;1234567890123456\&quot;,   \&quot;mode\&quot;: \&quot;ECB\&quot;,   \&quot;padding\&quot;: \&quot;PKCS7\&quot;,   \&quot;output_format\&quot;: \&quot;hex\&quot; } &#x60;&#x60;&#x60; 返回示例： &#x60;&#x60;&#x60;json {   \&quot;ciphertext\&quot;: \&quot;aaaca6027da10918bb5d23d81939552c\&quot;,   \&quot;mode\&quot;: \&quot;ECB\&quot;,   \&quot;padding\&quot;: \&quot;PKCS7\&quot; } &#x60;&#x60;&#x60;  **示例2：Base64格式输出（默认）** &#x60;&#x60;&#x60;json {   \&quot;text\&quot;: \&quot;测试文本123\&quot;,   \&quot;key\&quot;: \&quot;1234567890123456\&quot;,   \&quot;mode\&quot;: \&quot;ECB\&quot;,   \&quot;padding\&quot;: \&quot;PKCS7\&quot; } &#x60;&#x60;&#x60; 返回示例： &#x60;&#x60;&#x60;json {   \&quot;ciphertext\&quot;: \&quot;qqymAn2hCRi7XSPYGTlVLA&#x3D;&#x3D;\&quot;,   \&quot;mode\&quot;: \&quot;ECB\&quot;,   \&quot;padding\&quot;: \&quot;PKCS7\&quot; } &#x60;&#x60;&#x60;  ## 技术规格 - **加密算法**: AES-256 - **编码格式**: Base64/HEX（输入/输出） - **IV长度**: 16字节（128位） - **版本标注**: v3.4.8+  &gt; [!NOTE] &gt; **关于IV（初始化向量）** &gt; - GCM模式无需提供IV &gt; - CBC/CTR/OFB/CFB模式可选提供IV &gt; - ECB模式不使用IV &gt; - 建议每次加密使用不同的IV以确保安全性  &gt; [!TIP] &gt; **关于输出格式** &gt; - 如需与在线加密工具（如 toolhelper.cn）对比结果，建议使用 &#x60;output_format: \&quot;hex\&quot;&#x60;  &gt; - Base64格式更适合网络传输和API调用 &gt; - 两种格式可以相互转换，数据完全一致

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextAesEncryptAdvancedOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextAesEncryptAdvancedRequest | 包含加密配置的JSON对象
    postTextAesEncryptAdvancedRequest: ...,
  } satisfies PostTextAesEncryptAdvancedOperationRequest;

  try {
    const data = await api.postTextAesEncryptAdvanced(body);
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
| **postTextAesEncryptAdvancedRequest** | [PostTextAesEncryptAdvancedRequest](PostTextAesEncryptAdvancedRequest.md) | 包含加密配置的JSON对象 | |

### Return type

[**PostTextAesEncryptAdvanced200Response**](PostTextAesEncryptAdvanced200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 加密成功，返回密文和加密配置 |  -  |
| **400** | 无效的请求参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextAnalyze

> PostTextAnalyze200Response postTextAnalyze(postTextAnalyzeRequest)

文本分析

想知道一篇文章有多少字、多少个词、或者多少行？这个接口可以帮你快速统计。  ## 功能概述 你提供一段文本，我们会从多个维度进行分析，并返回其字符数、词数、句子数、段落数和行数。这对于文本编辑、内容管理等场景非常有用。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextAnalyzeOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextAnalyzeRequest | 包含待分析文本 \'text\' 的JSON对象
    postTextAnalyzeRequest: ...,
  } satisfies PostTextAnalyzeOperationRequest;

  try {
    const data = await api.postTextAnalyze(body);
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
| **postTextAnalyzeRequest** | [PostTextAnalyzeRequest](PostTextAnalyzeRequest.md) | 包含待分析文本 \&#39;text\&#39; 的JSON对象 | |

### Return type

[**PostTextAnalyze200Response**](PostTextAnalyze200Response.md)

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


## postTextBase64Decode

> PostTextBase64Decode200Response postTextBase64Decode(postTextBase64DecodeRequest)

Base64 解码

这是一个简单实用的 Base64 解码工具。  ## 功能概述 你提供一个 Base64 编码的字符串，我们帮你解码成原始的 UTF-8 文本。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextBase64DecodeOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextBase64DecodeRequest | 包含待解码文本 \'text\' 的JSON对象
    postTextBase64DecodeRequest: ...,
  } satisfies PostTextBase64DecodeOperationRequest;

  try {
    const data = await api.postTextBase64Decode(body);
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
| **postTextBase64DecodeRequest** | [PostTextBase64DecodeRequest](PostTextBase64DecodeRequest.md) | 包含待解码文本 \&#39;text\&#39; 的JSON对象 | |

### Return type

[**PostTextBase64Decode200Response**](PostTextBase64Decode200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 无效的请求参数或解码失败 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextBase64Encode

> PostTextBase64Encode200Response postTextBase64Encode(postTextBase64EncodeRequest)

Base64 编码

这是一个简单实用的 Base64 编码工具。  ## 功能概述 你提供一段原始文本，我们帮你转换成 Base64 编码的字符串。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextBase64EncodeOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextBase64EncodeRequest | 包含待编码文本 \'text\' 的JSON对象
    postTextBase64EncodeRequest: ...,
  } satisfies PostTextBase64EncodeOperationRequest;

  try {
    const data = await api.postTextBase64Encode(body);
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
| **postTextBase64EncodeRequest** | [PostTextBase64EncodeRequest](PostTextBase64EncodeRequest.md) | 包含待编码文本 \&#39;text\&#39; 的JSON对象 | |

### Return type

[**PostTextBase64Encode200Response**](PostTextBase64Encode200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 无效的请求参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextConvert

> PostTextConvert200Response postTextConvert(postTextConvertRequest)

格式转换

需要在不同文本格式之间转换？这个接口支持Base64、Hex、URL、HTML、Unicode等多种格式互转，还能生成MD5、SHA256等哈希值。  ## 功能概述 你提供待转换的文本、源格式和目标格式，接口会自动完成转换。支持7种双向格式（plain、base64、hex、url、html、unicode、binary）和4种单向哈希（md5、sha1、sha256、sha512）。  ## 格式说明 **双向转换格式**：plain（纯文本）、base64、hex（十六进制）、url、html（HTML实体）、unicode（\\uXXXX转义）、binary（二进制字符串）  **单向哈希格式**：md5、sha1、sha256、sha512（仅可作为目标格式，不可逆）  ## 链式转换 支持多次调用实现复杂转换，如先将文本转为base64，再将base64转为hex。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextConvertOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextConvertRequest | 包含转换配置的JSON对象
    postTextConvertRequest: ...,
  } satisfies PostTextConvertOperationRequest;

  try {
    const data = await api.postTextConvert(body);
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
| **postTextConvertRequest** | [PostTextConvertRequest](PostTextConvertRequest.md) | 包含转换配置的JSON对象 | |

### Return type

[**PostTextConvert200Response**](PostTextConvert200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 转换成功 |  -  |
| **400** | 转换失败或参数错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextMd5

> GetTextMd5200Response postTextMd5(postTextMd5Request)

MD5 哈希 (POST)

一个用于计算文本 MD5 哈希值的标准工具，推荐使用此版本。  ## 功能概述 通过POST请求的表单体传入文本，返回其32位小写的MD5哈希值。相比GET版本，此方法更适合处理较长或包含敏感信息的文本。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextMd5OperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextMd5Request
    postTextMd5Request: ...,
  } satisfies PostTextMd5OperationRequest;

  try {
    const data = await api.postTextMd5(body);
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
| **postTextMd5Request** | [PostTextMd5Request](PostTextMd5Request.md) |  | |

### Return type

[**GetTextMd5200Response**](GetTextMd5200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 缺少text参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTextMd5Verify

> PostTextMd5Verify200Response postTextMd5Verify(postTextMd5VerifyRequest)

MD5 校验

下载了一个文件，想确认它在传输过程中有没有损坏？校验MD5值是最常用的方法。  ## 功能概述 你提供原始文本和一个MD5哈希值，我们帮你计算文本的哈希，并与你提供的哈希进行比对，告诉你它们是否匹配。这在文件完整性校验等场景下非常有用。

### Example

```ts
import {
  Configuration,
  TextApi,
} from 'uapi-browser-sdk-browser';
import type { PostTextMd5VerifyOperationRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new TextApi();

  const body = {
    // PostTextMd5VerifyRequest | 包含待校验文本 \'text\' 和哈希值 \'hash\' 的JSON对象
    postTextMd5VerifyRequest: ...,
  } satisfies PostTextMd5VerifyOperationRequest;

  try {
    const data = await api.postTextMd5Verify(body);
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
| **postTextMd5VerifyRequest** | [PostTextMd5VerifyRequest](PostTextMd5VerifyRequest.md) | 包含待校验文本 \&#39;text\&#39; 和哈希值 \&#39;hash\&#39; 的JSON对象 | |

### Return type

[**PostTextMd5Verify200Response**](PostTextMd5Verify200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应 |  -  |
| **400** | 无效的请求参数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

