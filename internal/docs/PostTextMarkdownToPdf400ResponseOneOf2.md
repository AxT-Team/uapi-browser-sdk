
# PostTextMarkdownToPdf400ResponseOneOf2


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { PostTextMarkdownToPdf400ResponseOneOf2 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": UNSUPPORTED_MARKDOWN,
  "message": Markdown 图片只允许使用 data URI 或公网可访问的 http、https 地址，不支持本地文件路径,
} satisfies PostTextMarkdownToPdf400ResponseOneOf2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextMarkdownToPdf400ResponseOneOf2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


