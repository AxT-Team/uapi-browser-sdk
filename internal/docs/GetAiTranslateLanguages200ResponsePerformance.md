
# GetAiTranslateLanguages200ResponsePerformance


## Properties

Name | Type
------------ | -------------
`fastModeAvailable` | boolean
`batchTranslationAvailable` | boolean
`maxTextLength` | number
`maxBatchSize` | number
`typicalResponseTimeMs` | [GetAiTranslateLanguages200ResponsePerformanceTypicalResponseTimeMs](GetAiTranslateLanguages200ResponsePerformanceTypicalResponseTimeMs.md)

## Example

```typescript
import type { GetAiTranslateLanguages200ResponsePerformance } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "fastModeAvailable": true,
  "batchTranslationAvailable": true,
  "maxTextLength": 10000,
  "maxBatchSize": 50,
  "typicalResponseTimeMs": null,
} satisfies GetAiTranslateLanguages200ResponsePerformance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAiTranslateLanguages200ResponsePerformance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


