
# GetDailyWord200ResponseWordsInner


## Properties

Name | Type
------------ | -------------
`definition` | string
`examples` | [Array&lt;GetDailyWord200ResponseWordsInnerExamplesInner&gt;](GetDailyWord200ResponseWordsInnerExamplesInner.md)
`phonetic` | string
`word` | string

## Example

```typescript
import type { GetDailyWord200ResponseWordsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "definition": n. the atmospheric conditions at a place and time,
  "examples": null,
  "phonetic": /ˈweðər/,
  "word": weather,
} satisfies GetDailyWord200ResponseWordsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDailyWord200ResponseWordsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


