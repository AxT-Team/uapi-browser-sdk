
# GetImageBingDailyHistory200Response


## Properties

Name | Type
------------ | -------------
`resolution` | string
`items` | [Array&lt;GetImageBingDailyHistory200ResponseItemsInner&gt;](GetImageBingDailyHistory200ResponseItemsInner.md)
`pagination` | [GetImageBingDailyHistory200ResponsePagination](GetImageBingDailyHistory200ResponsePagination.md)

## Example

```typescript
import type { GetImageBingDailyHistory200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "resolution": 1080,
  "items": null,
  "pagination": null,
} satisfies GetImageBingDailyHistory200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetImageBingDailyHistory200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


