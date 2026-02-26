
# PostSearchAggregateRequest


## Properties

Name | Type
------------ | -------------
`query` | string
`site` | string
`filetype` | string
`fetchFull` | boolean
`timeoutMs` | number
`sort` | string
`timeRange` | string

## Example

```typescript
import type { PostSearchAggregateRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "query": Go最新的版本是多少,
  "site": null,
  "filetype": null,
  "fetchFull": null,
  "timeoutMs": null,
  "sort": null,
  "timeRange": null,
} satisfies PostSearchAggregateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


