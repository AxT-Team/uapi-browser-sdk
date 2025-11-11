
# PostAiTranslate401Response


## Properties

Name | Type
------------ | -------------
`code` | number
`message` | string
`error` | string

## Example

```typescript
import type { PostAiTranslate401Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 401,
  "message": Unauthorized,
  "error": Invalid or missing API token,
} satisfies PostAiTranslate401Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate401Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


