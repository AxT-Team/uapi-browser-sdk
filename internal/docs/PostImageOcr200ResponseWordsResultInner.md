
# PostImageOcr200ResponseWordsResultInner


## Properties

Name | Type
------------ | -------------
`location` | [PostImageOcr200ResponseWordsResultInnerLocation](PostImageOcr200ResponseWordsResultInnerLocation.md)
`score` | number
`vertexesLocation` | [Array&lt;PostImageOcr200ResponseWordsResultInnerVertexesLocationInner&gt;](PostImageOcr200ResponseWordsResultInnerVertexesLocationInner.md)
`words` | string

## Example

```typescript
import type { PostImageOcr200ResponseWordsResultInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "location": null,
  "score": 0.992,
  "vertexesLocation": null,
  "words": 收件人：张三,
} satisfies PostImageOcr200ResponseWordsResultInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageOcr200ResponseWordsResultInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


