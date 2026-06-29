
# PostTextAesDecryptRequest


## Properties

Name | Type
------------ | -------------
`key` | string
`nonce` | string
`text` | string

## Example

```typescript
import type { PostTextAesDecryptRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "key": a-secret-key-123,
  "nonce": 1234567890abcdef,
  "text": uyzVKczxZi3HdoGfeuaAt4F2/20WSmwFzIhJWMmDIaxeu97nLqbsX3wdp+NnRw==,
} satisfies PostTextAesDecryptRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextAesDecryptRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


