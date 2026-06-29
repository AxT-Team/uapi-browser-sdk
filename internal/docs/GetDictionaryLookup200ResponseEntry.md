
# GetDictionaryLookup200ResponseEntry


## Properties

Name | Type
------------ | -------------
`definitions` | [Array&lt;GetDictionaryLookup200ResponseEntryDefinitionsInner&gt;](GetDictionaryLookup200ResponseEntryDefinitionsInner.md)
`englishDefinitions` | [Array&lt;GetDictionaryLookup200ResponseEntryEnglishDefinitionsInner&gt;](GetDictionaryLookup200ResponseEntryEnglishDefinitionsInner.md)
`examTags` | Array&lt;string&gt;
`examples` | [Array&lt;GetDictionaryLookup200ResponseEntryExamplesInner&gt;](GetDictionaryLookup200ResponseEntryExamplesInner.md)
`language` | string
`phonetics` | [GetDictionaryLookup200ResponseEntryPhonetics](GetDictionaryLookup200ResponseEntryPhonetics.md)
`phrases` | [Array&lt;GetDictionaryLookup200ResponseEntryPhrasesInner&gt;](GetDictionaryLookup200ResponseEntryPhrasesInner.md)
`synonyms` | [Array&lt;GetDictionaryLookup200ResponseEntrySynonymsInner&gt;](GetDictionaryLookup200ResponseEntrySynonymsInner.md)
`word` | string
`wordForms` | [Array&lt;GetDictionaryLookup200ResponseEntryWordFormsInner&gt;](GetDictionaryLookup200ResponseEntryWordFormsInner.md)

## Example

```typescript
import type { GetDictionaryLookup200ResponseEntry } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "definitions": null,
  "englishDefinitions": null,
  "examTags": ["CET4","CET6","考研"],
  "examples": null,
  "language": en,
  "phonetics": null,
  "phrases": null,
  "synonyms": null,
  "word": present,
  "wordForms": null,
} satisfies GetDictionaryLookup200ResponseEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDictionaryLookup200ResponseEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


