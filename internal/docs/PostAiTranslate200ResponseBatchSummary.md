
# PostAiTranslate200ResponseBatchSummary

批量翻译汇总信息，仅在批量翻译时返回。

## Properties

Name | Type
------------ | -------------
`totalItems` | number
`successItems` | number
`failedItems` | number
`averageQuality` | number

## Example

```typescript
import type { PostAiTranslate200ResponseBatchSummary } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "totalItems": null,
  "successItems": null,
  "failedItems": null,
  "averageQuality": null,
} satisfies PostAiTranslate200ResponseBatchSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate200ResponseBatchSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


