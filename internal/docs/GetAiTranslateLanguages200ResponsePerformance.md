
# GetAiTranslateLanguages200ResponsePerformance


## Properties

Name | Type
------------ | -------------
`batchTranslationAvailable` | boolean
`maxBatchSize` | number
`maxTextLength` | number

## Example

```typescript
import type { GetAiTranslateLanguages200ResponsePerformance } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "batchTranslationAvailable": true,
  "maxBatchSize": 50,
  "maxTextLength": 10000,
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


