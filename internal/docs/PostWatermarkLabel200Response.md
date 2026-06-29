
# PostWatermarkLabel200Response


## Properties

Name | Type
------------ | -------------
`applied` | Array&lt;string&gt;
`capacityChars` | number
`contentProducer` | string
`format` | string
`imageBase64` | string
`imageName` | string
`watermarkPayload` | string

## Example

```typescript
import type { PostWatermarkLabel200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "applied": ["explicit","metadata"],
  "capacityChars": null,
  "contentProducer": null,
  "format": jpeg,
  "imageBase64": null,
  "imageName": null,
  "watermarkPayload": null,
} satisfies PostWatermarkLabel200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWatermarkLabel200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


