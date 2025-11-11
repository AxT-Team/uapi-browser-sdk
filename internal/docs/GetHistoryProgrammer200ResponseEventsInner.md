
# GetHistoryProgrammer200ResponseEventsInner


## Properties

Name | Type
------------ | -------------
`year` | number
`title` | string
`description` | string
`category` | string
`importance` | number
`relevanceScore` | number
`url` | string

## Example

```typescript
import type { GetHistoryProgrammer200ResponseEventsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "year": 1968,
  "title": ASCII 标准发布,
  "description": 美国信息交换标准代码正式发布，成为计算机文本编码的基础,
  "category": 技术标准,
  "importance": 8,
  "relevanceScore": 0.92,
  "url": https://zh.wikipedia.org/wiki/ASCII,
} satisfies GetHistoryProgrammer200ResponseEventsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHistoryProgrammer200ResponseEventsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


