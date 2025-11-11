
# GetAiTranslateLanguages200ResponseData


## Properties

Name | Type
------------ | -------------
`languages` | [Array&lt;GetAiTranslateLanguages200ResponseDataLanguagesInner&gt;](GetAiTranslateLanguages200ResponseDataLanguagesInner.md)
`styles` | [Array&lt;GetAiTranslateLanguages200ResponseDataStylesInner&gt;](GetAiTranslateLanguages200ResponseDataStylesInner.md)
`contexts` | [Array&lt;GetAiTranslateLanguages200ResponseDataContextsInner&gt;](GetAiTranslateLanguages200ResponseDataContextsInner.md)

## Example

```typescript
import type { GetAiTranslateLanguages200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "languages": null,
  "styles": null,
  "contexts": null,
} satisfies GetAiTranslateLanguages200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAiTranslateLanguages200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


