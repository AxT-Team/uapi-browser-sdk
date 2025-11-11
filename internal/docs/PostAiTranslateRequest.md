
# PostAiTranslateRequest


## Properties

Name | Type
------------ | -------------
`text` | string
`texts` | Array&lt;string&gt;
`sourceLang` | string
`style` | string
`context` | string
`preserveFormat` | boolean
`fastMode` | boolean
`maxConcurrency` | number

## Example

```typescript
import type { PostAiTranslateRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "text": Hello, how are you today?,
  "texts": null,
  "sourceLang": en,
  "style": professional,
  "context": business,
  "preserveFormat": true,
  "fastMode": true,
  "maxConcurrency": 3,
} satisfies PostAiTranslateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


