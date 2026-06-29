
# GetGameMinecraftHistoryid200Response

响应结构根据查询参数不同而变化

## Properties

Name | Type
------------ | -------------
`count` | number
`history` | [Array&lt;GetGameMinecraftHistoryid200ResponseHistoryInner&gt;](GetGameMinecraftHistoryid200ResponseHistoryInner.md)
`id` | string
`nameNum` | number
`query` | string
`results` | [Array&lt;GetGameMinecraftHistoryid200ResponseResultsInner&gt;](GetGameMinecraftHistoryid200ResponseResultsInner.md)
`uuid` | string

## Example

```typescript
import type { GetGameMinecraftHistoryid200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "count": 2,
  "history": null,
  "id": T8K_,
  "nameNum": 4,
  "query": ExamplePlayer,
  "results": null,
  "uuid": ee9b4ed1-aac1-491e-b761-1471be374b80,
} satisfies GetGameMinecraftHistoryid200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftHistoryid200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


