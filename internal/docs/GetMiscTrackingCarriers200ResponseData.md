
# GetMiscTrackingCarriers200ResponseData


## Properties

Name | Type
------------ | -------------
`total` | number
`carriers` | [Array&lt;GetMiscTrackingCarriers200ResponseDataCarriersInner&gt;](GetMiscTrackingCarriers200ResponseDataCarriersInner.md)

## Example

```typescript
import type { GetMiscTrackingCarriers200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "total": 60,
  "carriers": null,
} satisfies GetMiscTrackingCarriers200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscTrackingCarriers200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


