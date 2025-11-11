
# GetMiscTrackingDetect200ResponseData


## Properties

Name | Type
------------ | -------------
`trackingNumber` | string
`carrierCode` | string
`carrierName` | string
`alternatives` | [Array&lt;GetMiscTrackingDetect200ResponseDataAlternativesInner&gt;](GetMiscTrackingDetect200ResponseDataAlternativesInner.md)

## Example

```typescript
import type { GetMiscTrackingDetect200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "trackingNumber": SF1234567890123,
  "carrierCode": shunfeng,
  "carrierName": 顺丰速运,
  "alternatives": null,
} satisfies GetMiscTrackingDetect200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscTrackingDetect200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


