
# PostAiTranslate200ResponseData

翻译结果的详细信息。

## Properties

Name | Type
------------ | -------------
`translatedText` | string

## Example

```typescript
import type { PostAiTranslate200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "translatedText": 你好，你今天怎么样？,
} satisfies PostAiTranslate200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


