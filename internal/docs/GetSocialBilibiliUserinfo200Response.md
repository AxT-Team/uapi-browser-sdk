
# GetSocialBilibiliUserinfo200Response


## Properties

Name | Type
------------ | -------------
`mid` | number
`name` | string
`sex` | string
`face` | string
`sign` | string
`level` | number
`birthday` | string
`vipType` | number
`vipStatus` | number
`following` | number
`follower` | number
`archiveCount` | number
`articleCount` | number

## Example

```typescript
import type { GetSocialBilibiliUserinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "mid": 483307278,
  "name": bishi,
  "sex": 保密,
  "face": http://i0.hdslb.com/bfs/face/....jpg,
  "sign": 嗶哩嗶哩 - ( ゜- ゜)つロ 乾杯~,
  "level": 6,
  "birthday": 10-24,
  "vipType": 2,
  "vipStatus": 1,
  "following": 148,
  "follower": 123456,
  "archiveCount": 321,
  "articleCount": 12,
} satisfies GetSocialBilibiliUserinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliUserinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


