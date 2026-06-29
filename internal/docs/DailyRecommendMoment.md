
# DailyRecommendMoment

包装对象。外层字段随 mode 不同而不同，语录本体统一放在 item 中。

## Properties

Name | Type
------------ | -------------
`currentTime` | string
`date` | string
`item` | [DailyRecommendMomentItem](DailyRecommendMomentItem.md)
`mode` | string
`scene` | [DailyRecommendMomentScene](DailyRecommendMomentScene.md)
`seed` | string
`timeSegment` | string

## Example

```typescript
import type { DailyRecommendMoment } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "currentTime": 2026-06-25T13:57:33+08:00,
  "date": 2026-06-25,
  "item": null,
  "mode": daily,
  "scene": null,
  "seed": daily20260625-,
  "timeSegment": noon,
} satisfies DailyRecommendMoment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DailyRecommendMoment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


