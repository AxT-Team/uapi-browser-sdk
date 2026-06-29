
# GetSearchEngines200ResponseEngine

搜索引擎的基本信息

## Properties

Name | Type
------------ | -------------
`available` | boolean
`description` | string
`displayName` | string
`features` | Array&lt;string&gt;
`name` | string
`version` | string

## Example

```typescript
import type { GetSearchEngines200ResponseEngine } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "available": true,
  "description": UAPI Pro 智能搜索引擎，提供高质量的实时网页搜索和智能摘要,
  "displayName": UAPI Pro Search,
  "features": ["实时网页搜索","智能摘要","相关性排序","时间排序 (sort: date)","时间范围过滤 (time_range)","站内搜索 (site:)","文件类型过滤 (filetype:)","分页浏览"],
  "name": uapi-search,
  "version": 2.0,
} satisfies GetSearchEngines200ResponseEngine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSearchEngines200ResponseEngine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


