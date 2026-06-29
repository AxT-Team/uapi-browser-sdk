
# PostAiTranslate429Response


## Properties

Name | Type
------------ | -------------
`code` | number
`error` | string
`message` | string

## Example

```typescript
import type { PostAiTranslate429Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 429,
  "error": Too many requests, please try again later,
  "message": Rate limit exceeded,
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


