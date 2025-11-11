
# GetHistoryProgrammerToday200ResponseEventsInner


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
import type { GetHistoryProgrammerToday200ResponseEventsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "year": 1975,
  "title": Microsoft 公司成立,
  "description": 比尔·盖茨和保罗·艾伦在美国新墨西哥州阿尔伯克基创立微软公司,
  "category": 公司创立,
  "importance": 9,
  "relevanceScore": 0.95,
  "url": https://zh.wikipedia.org/wiki/微软,
} satisfies GetHistoryProgrammerToday200ResponseEventsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHistoryProgrammerToday200ResponseEventsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


