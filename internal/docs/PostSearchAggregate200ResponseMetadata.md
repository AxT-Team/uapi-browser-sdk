
# PostSearchAggregate200ResponseMetadata

本次请求的处理元数据

## Properties

Name | Type
------------ | -------------
`contentFetched` | number
`dedupeRemoved` | number
`requestParams` | [PostSearchAggregate200ResponseMetadataRequestParams](PostSearchAggregate200ResponseMetadataRequestParams.md)
`rerankApplied` | boolean

## Example

```typescript
import type { PostSearchAggregate200ResponseMetadata } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "contentFetched": 0,
  "dedupeRemoved": 0,
  "requestParams": null,
  "rerankApplied": true,
} satisfies PostSearchAggregate200ResponseMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregate200ResponseMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


