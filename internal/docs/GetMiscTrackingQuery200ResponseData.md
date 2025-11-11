
# GetMiscTrackingQuery200ResponseData


## Properties

Name | Type
------------ | -------------
`trackingNumber` | string
`carrierCode` | string
`carrierName` | string
`trackCount` | number
`tracks` | [Array&lt;GetMiscTrackingQuery200ResponseDataTracksInner&gt;](GetMiscTrackingQuery200ResponseDataTracksInner.md)

## Example

```typescript
import type { GetMiscTrackingQuery200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "trackingNumber": YT1234567890123,
  "carrierCode": yuantong,
  "carrierName": 圆通速递,
  "trackCount": 3,
  "tracks": null,
} satisfies GetMiscTrackingQuery200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscTrackingQuery200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


