
# GetHistoryProgrammerToday200ResponseEventsInner


## Properties

Name | Type
------------ | -------------
`category` | string
`description` | string
`importance` | number
`relevanceScore` | number
`title` | string
`url` | string
`year` | number

## Example

```typescript
import type { GetHistoryProgrammerToday200ResponseEventsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "category": 公司创立,
  "description": 比尔·盖茨和保罗·艾伦在美国新墨西哥州阿尔伯克基创立微软公司,
  "importance": 9,
  "relevanceScore": 0.95,
  "title": Microsoft 公司成立,
  "url": https://zh.wikipedia.org/wiki/微软,
  "year": 1975,
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


