
# PostImageOcr200Response


## Properties

Name | Type
------------ | -------------
`text` | string
`plainText` | string
`markdown` | string
`wordsResult` | [Array&lt;PostImageOcr200ResponseWordsResultInner&gt;](PostImageOcr200ResponseWordsResultInner.md)
`wordsResultNum` | number
`needLocation` | boolean
`timing` | object
`summary` | object
`image` | object
`lines` | Array&lt;object&gt;
`blocks` | Array&lt;object&gt;
`pages` | Array&lt;object&gt;
`raw` | object

## Example

```typescript
import type { PostImageOcr200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "text": 收件人：张三
联系电话：13800000000,
  "plainText": 收件人：张三
联系电话：13800000000,
  "markdown": # 快递面单

收件人：张三
联系电话：13800000000

| 字段 | 内容 |
| --- | --- |
| 地址 | 上海市浦东新区世纪大道 100 号 |,
  "wordsResult": null,
  "wordsResultNum": 2,
  "needLocation": true,
  "timing": {"total_ms":324},
  "summary": {"line_count":2,"block_count":1},
  "image": {"width":1280,"height":720},
  "lines": null,
  "blocks": null,
  "pages": null,
  "raw": null,
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


