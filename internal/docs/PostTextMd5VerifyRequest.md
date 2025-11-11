
# PostTextMd5VerifyRequest


## Properties

Name | Type
------------ | -------------
`hash` | string
`text` | string

## Example

```typescript
import type { PostTextMd5VerifyRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "hash": 5d41402abc4b2a76b9719d911017c592,
  "text": hello world,
} satisfies PostTextMd5VerifyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextMd5VerifyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


