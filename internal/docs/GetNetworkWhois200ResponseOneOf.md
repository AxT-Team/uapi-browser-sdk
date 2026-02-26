
# GetNetworkWhois200ResponseOneOf

### 文本格式响应 当 `format=text` 或未指定时，`whois` 字段包含原始的WHOIS查询文本。这保留了最完整的信息，适合需要自行解析或展示原始数据的场景。

## Properties

Name | Type
------------ | -------------
`whois` | string

## Example

```typescript
import type { GetNetworkWhois200ResponseOneOf } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "whois": Domain Name: GOOGLE.COM
Registry Domain ID: 2138514_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.markmonitor.com
...,
} satisfies GetNetworkWhois200ResponseOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkWhois200ResponseOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


