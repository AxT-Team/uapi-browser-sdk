
# PostTextAesEncryptAdvancedRequest


## Properties

Name | Type
------------ | -------------
`text` | string
`key` | string
`mode` | string
`padding` | string
`iv` | string
`outputFormat` | string

## Example

```typescript
import type { PostTextAesEncryptAdvancedRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "text": Hello, World! 你好世界！,
  "key": my-super-secret-key,
  "mode": GCM,
  "padding": PKCS7,
  "iv": cmFuZG9tSVZoZXJl,
  "outputFormat": hex,
} satisfies PostTextAesEncryptAdvancedRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextAesEncryptAdvancedRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


