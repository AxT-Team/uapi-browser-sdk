
# PostTextAesEncryptAdvanced200Response


## Properties

Name | Type
------------ | -------------
`ciphertext` | string
`iv` | string
`mode` | string
`padding` | string

## Example

```typescript
import type { PostTextAesEncryptAdvanced200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "ciphertext": kJB3X5YxNzA2MTA1NDQ3Mjc3ODg5...,
  "iv": cmFuZG9tSVZoZXJl,
  "mode": GCM,
  "padding": NONE,
} satisfies PostTextAesEncryptAdvanced200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextAesEncryptAdvanced200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


