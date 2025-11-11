
# PostTextBase64Decode400Response


## Properties

Name | Type
------------ | -------------
`code` | string
`details` | object
`message` | string

## Example

```typescript
import type { PostTextBase64Decode400Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": DECODING_FAILED,
  "details": null,
  "message": Invalid Base64 input.,
} satisfies PostTextBase64Decode400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextBase64Decode400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


