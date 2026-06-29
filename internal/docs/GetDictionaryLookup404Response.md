
# GetDictionaryLookup404Response


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { GetDictionaryLookup404Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": WORD_NOT_FOUND,
  "message": 未找到该单词的释义,
} satisfies GetDictionaryLookup404Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDictionaryLookup404Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


