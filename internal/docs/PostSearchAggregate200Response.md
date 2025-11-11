
# PostSearchAggregate200Response


## Properties

Name | Type
------------ | -------------
`query` | string
`totalResults` | number
`results` | [Array&lt;PostSearchAggregate200ResponseResultsInner&gt;](PostSearchAggregate200ResponseResultsInner.md)
`sources` | [Array&lt;PostSearchAggregate200ResponseSourcesInner&gt;](PostSearchAggregate200ResponseSourcesInner.md)
`processTimeMs` | number
`cached` | boolean

## Example

```typescript
import type { PostSearchAggregate200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "query": Go最新的版本是多少,
  "totalResults": null,
  "results": null,
  "sources": null,
  "processTimeMs": null,
  "cached": null,
} satisfies PostSearchAggregate200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregate200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


