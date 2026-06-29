
# PostWatermarkEmbed200Response


## Properties

Name | Type
------------ | -------------
`capacityChars` | number
`embedMs` | number
`format` | string
`imageBase64` | string
`imageName` | string
`payload` | string

## Example

```typescript
import type { PostWatermarkEmbed200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "capacityChars": 7,
  "embedMs": 118.4,
  "format": png,
  "imageBase64": null,
  "imageName": null,
  "payload": a1B2c3D,
} satisfies PostWatermarkEmbed200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWatermarkEmbed200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


