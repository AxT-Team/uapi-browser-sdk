
# DailyRecommendMomentScene

仅 recommend 模式返回，命中的场景画像。

## Properties

Name | Type
------------ | -------------
`description` | string
`key` | string
`name` | string

## Example

```typescript
import type { DailyRecommendMomentScene } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "description": 偏思考、回味、轻情绪化的语料,
  "key": night,
  "name": 夜晚,
} satisfies DailyRecommendMomentScene

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DailyRecommendMomentScene
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


