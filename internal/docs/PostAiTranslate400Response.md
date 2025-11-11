
# PostAiTranslate400Response


## Properties

Name | Type
------------ | -------------
`code` | number
`message` | string
`error` | string

## Example

```typescript
import type { PostAiTranslate400Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 400,
  "message": Invalid request parameters,
  "error": either 'text' or 'texts' must be provided,
} satisfies PostAiTranslate400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


