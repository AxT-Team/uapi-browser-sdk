
# PostTextAnalyze200Response


## Properties

Name | Type
------------ | -------------
`characters` | number
`lines` | number
`paragraphs` | number
`sentences` | number
`words` | number

## Example

```typescript
import type { PostTextAnalyze200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "characters": 74,
  "lines": 2,
  "paragraphs": 1,
  "sentences": 3,
  "words": 13,
} satisfies PostTextAnalyze200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextAnalyze200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


