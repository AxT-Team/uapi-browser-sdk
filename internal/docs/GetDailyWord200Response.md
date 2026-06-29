
# GetDailyWord200Response


## Properties

Name | Type
------------ | -------------
`category` | string
`count` | number
`lang` | string
`words` | [Array&lt;GetDailyWord200ResponseWordsInner&gt;](GetDailyWord200ResponseWordsInner.md)

## Example

```typescript
import type { GetDailyWord200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "category": cet4,
  "count": 1,
  "lang": en,
  "words": null,
} satisfies GetDailyWord200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDailyWord200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


