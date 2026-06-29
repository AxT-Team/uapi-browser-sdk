
# GetDictionaryLookup200ResponseEntryEnglishDefinitionsInner


## Properties

Name | Type
------------ | -------------
`definition` | string
`examples` | Array&lt;string&gt;
`partOfSpeech` | string

## Example

```typescript
import type { GetDictionaryLookup200ResponseEntryEnglishDefinitionsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "definition": the period of time that is happening now,
  "examples": null,
  "partOfSpeech": n.,
} satisfies GetDictionaryLookup200ResponseEntryEnglishDefinitionsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDictionaryLookup200ResponseEntryEnglishDefinitionsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


