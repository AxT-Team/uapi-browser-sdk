
# PostImageOcr200ResponseWordsResultInnerLocation

当前文字片段的矩形坐标。只有在 `need_location=true` 时才会返回。

## Properties

Name | Type
------------ | -------------
`left` | number
`top` | number
`width` | number
`height` | number

## Example

```typescript
import type { PostImageOcr200ResponseWordsResultInnerLocation } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "left": 56,
  "top": 128,
  "width": 240,
  "height": 32,
} satisfies PostImageOcr200ResponseWordsResultInnerLocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageOcr200ResponseWordsResultInnerLocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


