
# PostSensitiveWordQuickCheck200Response


## Properties

Name | Type
------------ | -------------
`status` | string
`originalText` | string
`maskedText` | string
`forbiddenWords` | Array&lt;string&gt;

## Example

```typescript
import type { PostSensitiveWordQuickCheck200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "status": forbidden,
  "originalText": 假装是违禁词,
  "maskedText": 假装是屏蔽后词语,
  "forbiddenWords": ["假装是违禁词列表"],
} satisfies PostSensitiveWordQuickCheck200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSensitiveWordQuickCheck200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


