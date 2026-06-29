
# GetSocialBilibiliVideoinfo200ResponseStat

视频的核心数据统计。

## Properties

Name | Type
------------ | -------------
`aid` | number
`coin` | number
`danmaku` | number
`dislike` | number
`evaluation` | string
`favorite` | number
`hisRank` | number
`like` | number
`nowRank` | number
`reply` | number
`share` | number
`view` | number
`vt` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseStat } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "aid": 75836761,
  "coin": 787228,
  "danmaku": 269829,
  "dislike": 0,
  "evaluation": ,
  "favorite": 498308,
  "hisRank": 0,
  "like": 989718,
  "nowRank": 0,
  "reply": 81682,
  "share": 98661,
  "view": 14227982,
  "vt": 0,
} satisfies GetSocialBilibiliVideoinfo200ResponseStat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200ResponseStat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


