
# GetDictionaryLookup200ResponseEntryPhoneticsUk


## Properties

Name | Type
------------ | -------------
`audio` | string
`text` | string

## Example

```typescript
import type { GetDictionaryLookup200ResponseEntryPhoneticsUk } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "audio": /api/v1/dictionary/audio?word=present&accent=uk,
  "text": prɪˈzent,
} satisfies GetDictionaryLookup200ResponseEntryPhoneticsUk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDictionaryLookup200ResponseEntryPhoneticsUk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


