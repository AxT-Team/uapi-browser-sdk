
# GetSearchEngines200Response


## Properties

Name | Type
------------ | -------------
`engine` | [GetSearchEngines200ResponseEngine](GetSearchEngines200ResponseEngine.md)
`limits` | [GetSearchEngines200ResponseLimits](GetSearchEngines200ResponseLimits.md)
`supportedParameters` | Array&lt;string&gt;

## Example

```typescript
import type { GetSearchEngines200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "engine": null,
  "limits": null,
  "supportedParameters": ["query (必需) - 搜索查询","limit (可选) - 返回条数，默认10，最大100","page (可选) - 页码，默认1","site (可选) - 站内搜索，例如：github.com","filetype (可选) - 文件类型，例如：pdf","fetch_full (可选) - 是否获取完整正文","timeout_ms (可选) - 超时时间（毫秒），默认3000","sort (可选) - 排序方式：relevance(相关性) 或 date(时间)","time_range (可选) - 时间范围：day/week/month/year"],
} satisfies GetSearchEngines200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSearchEngines200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


