
# PostImageOcr200Response


## Properties

Name | Type
------------ | -------------
`blocks` | Array&lt;object&gt;
`image` | object
`lines` | Array&lt;object&gt;
`markdown` | string
`needLocation` | boolean
`pages` | Array&lt;object&gt;
`plainText` | string
`raw` | object
`summary` | object
`text` | string
`timing` | object
`wordsResult` | [Array&lt;PostImageOcr200ResponseWordsResultInner&gt;](PostImageOcr200ResponseWordsResultInner.md)
`wordsResultNum` | number

## Example

```typescript
import type { PostImageOcr200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "blocks": null,
  "image": {"height":720,"width":1280},
  "lines": null,
  "markdown": # 快递面单

收件人：张三
联系电话：13800000000

| 字段 | 内容 |
| --- | --- |
| 地址 | 上海市浦东新区世纪大道 100 号 |,
  "needLocation": true,
  "pages": null,
  "plainText": 收件人：张三
联系电话：13800000000,
  "raw": null,
  "summary": {"block_count":1,"line_count":2},
  "text": 收件人：张三
联系电话：13800000000,
  "timing": {"total_ms":324},
  "wordsResult": null,
  "wordsResultNum": 2,
} satisfies PostImageOcr200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageOcr200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


