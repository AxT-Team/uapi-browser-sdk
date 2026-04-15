
# PostSearchAggregate200ResponseMetadata

本次请求的处理元数据

## Properties

Name | Type
------------ | -------------
`requestParams` | [PostSearchAggregate200ResponseMetadataRequestParams](PostSearchAggregate200ResponseMetadataRequestParams.md)
`dedupeRemoved` | number
`rerankApplied` | boolean
`contentFetched` | number

## Example

```typescript
import type { PostSearchAggregate200ResponseMetadata } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "requestParams": null,
  "dedupeRemoved": 0,
  "rerankApplied": true,
  "contentFetched": 0,
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


