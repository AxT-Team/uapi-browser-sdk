
# PostAiTranslate200ResponseData

单个翻译的详细结果，仅在单个翻译时返回。

## Properties

Name | Type
------------ | -------------
`originalText` | string
`translatedText` | string
`detectedLang` | string
`confidenceScore` | number
`alternatives` | Array&lt;string&gt;
`explanation` | [PostAiTranslate200ResponseDataExplanation](PostAiTranslate200ResponseDataExplanation.md)

## Example

```typescript
import type { PostAiTranslate200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "originalText": Hello, how are you today?,
  "translatedText": 你好，你今天怎么样？,
  "detectedLang": en,
  "confidenceScore": 0.98,
  "alternatives": ["你好，今天过得如何？"],
  "explanation": null,
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


