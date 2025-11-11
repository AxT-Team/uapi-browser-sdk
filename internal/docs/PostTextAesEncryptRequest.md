
# PostTextAesEncryptRequest


## Properties

Name | Type
------------ | -------------
`key` | string
`text` | string

## Example

```typescript
import type { PostTextAesEncryptRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "key": a-secret-key-123,
  "text": top secret message,
} satisfies PostTextAesEncryptRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextAesEncryptRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


