
# PostAiTranslate429Response


## Properties

Name | Type
------------ | -------------
`code` | number
`message` | string
`error` | string

## Example

```typescript
import type { PostAiTranslate429Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 429,
  "message": Rate limit exceeded,
  "error": Too many requests, please try again later,
} satisfies PostAiTranslate429Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate429Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


