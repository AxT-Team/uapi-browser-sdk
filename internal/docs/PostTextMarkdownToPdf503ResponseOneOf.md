
# PostTextMarkdownToPdf503ResponseOneOf


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { PostTextMarkdownToPdf503ResponseOneOf } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": SERVICE_TEMPORARILY_UNAVAILABLE,
  "message": Markdown 转 PDF 服务暂时不可用，请稍后再试,
} satisfies PostTextMarkdownToPdf503ResponseOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextMarkdownToPdf503ResponseOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


