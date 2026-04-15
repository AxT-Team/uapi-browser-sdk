
# HTML


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { HTML } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": UNSUPPORTED_MARKDOWN,
  "message": 当前暂不支持原始 HTML 标签，请改用标准 Markdown 语法,
} satisfies HTML

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HTML
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


