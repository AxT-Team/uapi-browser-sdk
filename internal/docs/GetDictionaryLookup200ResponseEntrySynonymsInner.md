
# GetDictionaryLookup200ResponseEntrySynonymsInner


## Properties

Name | Type
------------ | -------------
`meaning` | string
`partOfSpeech` | string
`words` | Array&lt;string&gt;

## Example

```typescript
import type { GetDictionaryLookup200ResponseEntrySynonymsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "meaning": 现在的；出席的,
  "partOfSpeech": adj.,
  "words": ["current","existing"],
} satisfies GetDictionaryLookup200ResponseEntrySynonymsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDictionaryLookup200ResponseEntrySynonymsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


