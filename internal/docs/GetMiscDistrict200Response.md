
# GetMiscDistrict200Response


## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;GetMiscDistrict200ResponseResultsInner&gt;](GetMiscDistrict200ResponseResultsInner.md)
`total` | number

## Example

```typescript
import type { GetMiscDistrict200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "results": null,
  "total": 2,
} satisfies GetMiscDistrict200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscDistrict200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


