
# GetSocialBilibiliVideoinfo200ResponseStat

视频的核心数据统计。

## Properties

Name | Type
------------ | -------------
`view` | number
`danmaku` | number
`reply` | number
`favorite` | number
`coin` | number
`share` | number
`like` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseStat } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "view": 14227982,
  "danmaku": 269829,
  "reply": 81682,
  "favorite": 498308,
  "coin": 787228,
  "share": 98661,
  "like": 989718,
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


