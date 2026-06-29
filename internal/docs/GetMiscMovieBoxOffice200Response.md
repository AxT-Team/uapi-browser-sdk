
# GetMiscMovieBoxOffice200Response


## Properties

Name | Type
------------ | -------------
`list` | [Array&lt;GetMiscMovieBoxOffice200ResponseListInner&gt;](GetMiscMovieBoxOffice200ResponseListInner.md)
`market` | [GetMiscMovieBoxOffice200ResponseMarket](GetMiscMovieBoxOffice200ResponseMarket.md)
`totalItems` | number
`updateGapSeconds` | number
`updateTime` | string
`updatedAt` | number

## Example

```typescript
import type { GetMiscMovieBoxOffice200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "list": null,
  "market": null,
  "totalItems": 70,
  "updateGapSeconds": 5,
  "updateTime": 2026-05-06 13:39:12,
  "updatedAt": 1778045952699,
} satisfies GetMiscMovieBoxOffice200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscMovieBoxOffice200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


