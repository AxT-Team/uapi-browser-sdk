
# GetStatusUsage200ResponseAnyOf1

查询指定path参数时返回的单个端点统计数据

## Properties

Name | Type
------------ | -------------
`path` | string
`count` | number

## Example

```typescript
import type { GetStatusUsage200ResponseAnyOf1 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "path": /api/v1/image/motou,
  "count": 22310,
} satisfies GetStatusUsage200ResponseAnyOf1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatusUsage200ResponseAnyOf1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


