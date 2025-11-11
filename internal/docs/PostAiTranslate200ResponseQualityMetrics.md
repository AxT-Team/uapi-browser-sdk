
# PostAiTranslate200ResponseQualityMetrics

翻译质量指标，仅在单个翻译时返回。

## Properties

Name | Type
------------ | -------------
`fluencyScore` | number
`accuracyScore` | number
`completenessScore` | number
`totalScore` | number

## Example

```typescript
import type { PostAiTranslate200ResponseQualityMetrics } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "fluencyScore": 0.95,
  "accuracyScore": 0.92,
  "completenessScore": 0.98,
  "totalScore": 0.95,
} satisfies PostAiTranslate200ResponseQualityMetrics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate200ResponseQualityMetrics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


