
# PostTextAesDecryptAdvancedRequest


## Properties

Name | Type
------------ | -------------
`text` | string
`key` | string
`mode` | string
`padding` | string
`iv` | string

## Example

```typescript
import type { PostTextAesDecryptAdvancedRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "text": 68vWkaxJPg1vx0LWJONpEfYdvW3Wz7V5uXiYg0WWfGJHIZWBmVVghHg=,
  "key": my-super-secret-key,
  "mode": GCM,
  "padding": NONE,
  "iv": cmFuZG9tSVZoZXJl,
} satisfies PostTextAesDecryptAdvancedRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextAesDecryptAdvancedRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


