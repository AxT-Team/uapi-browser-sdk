
# PostMiscDateDiff400Response


## Properties

Name | Type
------------ | -------------
`errorCode` | string
`errorMessage` | string
`errorDetails` | string

## Example

```typescript
import type { PostMiscDateDiff400Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "errorCode": DATE_PARSE_ERROR,
  "errorMessage": 解析开始日期失败: 无法识别日期格式: invalid-date,
  "errorDetails": ,
} satisfies PostMiscDateDiff400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostMiscDateDiff400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


