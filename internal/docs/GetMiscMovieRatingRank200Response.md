
# GetMiscMovieRatingRank200Response


## Properties

Name | Type
------------ | -------------
`channels` | [Array&lt;GetMiscMovieRatingRank200ResponseChannelsInner&gt;](GetMiscMovieRatingRank200ResponseChannelsInner.md)
`date` | string
`period` | string

## Example

```typescript
import type { GetMiscMovieRatingRank200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "channels": null,
  "date": 2026-06-08,
  "period": realtime,
} satisfies GetMiscMovieRatingRank200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscMovieRatingRank200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


