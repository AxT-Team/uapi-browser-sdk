
# PostAiTranslate200Response


## Properties

Name | Type
------------ | -------------
`code` | number
`message` | string
`isBatch` | boolean
`data` | [PostAiTranslate200ResponseData](PostAiTranslate200ResponseData.md)
`batchData` | [Array&lt;PostAiTranslate200ResponseBatchDataInner&gt;](PostAiTranslate200ResponseBatchDataInner.md)
`batchSummary` | [PostAiTranslate200ResponseBatchSummary](PostAiTranslate200ResponseBatchSummary.md)
`performance` | [PostAiTranslate200ResponsePerformance](PostAiTranslate200ResponsePerformance.md)
`qualityMetrics` | [PostAiTranslate200ResponseQualityMetrics](PostAiTranslate200ResponseQualityMetrics.md)

## Example

```typescript
import type { PostAiTranslate200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 200,
  "message": Translation completed successfully,
  "isBatch": false,
  "data": null,
  "batchData": null,
  "batchSummary": null,
  "performance": null,
  "qualityMetrics": null,
} satisfies PostAiTranslate200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


