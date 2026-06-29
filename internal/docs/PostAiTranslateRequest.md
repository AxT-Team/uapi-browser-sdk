
# PostAiTranslateRequest


## Properties

Name | Type
------------ | -------------
`context` | string
`preserveFormat` | boolean
`sourceLang` | string
`style` | string
`text` | string

## Example

```typescript
import type { PostAiTranslateRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "context": business,
  "preserveFormat": true,
  "sourceLang": en,
  "style": professional,
  "text": Hello, how are you today?,
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


