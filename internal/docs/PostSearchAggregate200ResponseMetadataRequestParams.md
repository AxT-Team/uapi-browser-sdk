
# PostSearchAggregate200ResponseMetadataRequestParams

服务端实际生效的请求参数回显

## Properties

Name | Type
------------ | -------------
`limit` | number
`page` | number
`query` | string
`sort` | string
`timeoutMs` | number

## Example

```typescript
import type { PostSearchAggregate200ResponseMetadataRequestParams } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "limit": 10,
  "page": 1,
  "query": Go最新的版本是多少,
  "sort": relevance,
  "timeoutMs": 60000,
} satisfies PostSearchAggregate200ResponseMetadataRequestParams

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregate200ResponseMetadataRequestParams
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


