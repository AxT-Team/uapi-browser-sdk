
# GetSocialBilibiliUserinfo200Response


## Properties

Name | Type
------------ | -------------
`archiveCount` | number
`articleCount` | number
`birthday` | string
`face` | string
`follower` | number
`following` | number
`level` | number
`mid` | number
`name` | string
`sex` | string
`sign` | string
`vipStatus` | number
`vipType` | number

## Example

```typescript
import type { GetSocialBilibiliUserinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "archiveCount": 321,
  "articleCount": 12,
  "birthday": 10-24,
  "face": http://i0.hdslb.com/bfs/face/....jpg,
  "follower": 123456,
  "following": 148,
  "level": 6,
  "mid": 483307278,
  "name": bishi,
  "sex": 保密,
  "sign": 嗶哩嗶哩 - ( ゜- ゜)つロ 乾杯~,
  "vipStatus": 1,
  "vipType": 2,
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


