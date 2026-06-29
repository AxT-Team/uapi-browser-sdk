
# PostWatermarkDecode200Response


## Properties

Name | Type
------------ | -------------
`confidence` | number
`decodeMs` | number
`payload` | string
`present` | boolean

## Example

```typescript
import type { PostWatermarkDecode200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "confidence": 0.99,
  "decodeMs": 41.2,
  "payload": a1B2c3D,
  "present": true,
} satisfies PostWatermarkDecode200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWatermarkDecode200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


