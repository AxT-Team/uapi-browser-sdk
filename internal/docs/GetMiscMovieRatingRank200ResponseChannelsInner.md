
# GetMiscMovieRatingRank200ResponseChannelsInner


## Properties

Name | Type
------------ | -------------
`channel` | string
`items` | [Array&lt;GetMiscMovieRatingRank200ResponseChannelsInnerItemsInner&gt;](GetMiscMovieRatingRank200ResponseChannelsInnerItemsInner.md)
`platform` | string

## Example

```typescript
import type { GetMiscMovieRatingRank200ResponseChannelsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "channel": web,
  "items": null,
  "platform": 爱奇艺,
} satisfies GetMiscMovieRatingRank200ResponseChannelsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscMovieRatingRank200ResponseChannelsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


