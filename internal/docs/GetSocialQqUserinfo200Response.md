
# GetSocialQqUserinfo200Response


## Properties

Name | Type
------------ | -------------
`age` | number
`avatarUrl` | string
`bigClubLevel` | number
`email` | string
`greenDiamondLevel` | number
`isBigClub` | boolean
`isSvip` | boolean
`isVip` | boolean
`isYearsVip` | boolean
`lastUpdated` | string
`location` | string
`longNick` | string
`loverVipLevel` | number
`nickname` | string
`privilegeIcons` | [GetSocialQqUserinfo200ResponsePrivilegeIcons](GetSocialQqUserinfo200ResponsePrivilegeIcons.md)
`qid` | string
`qq` | string
`qqLevel` | number
`regTime` | string
`sex` | string
`videoVipLevel` | number
`vipLevel` | number
`vipStatus` | number
`vipType` | number
`yellowDiamondLevel` | number

## Example

```typescript
import type { GetSocialQqUserinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "age": 25,
  "avatarUrl": http://q.qlogo.cn/g?b=qq&nk=10001&s=640,
  "bigClubLevel": 1,
  "email": 10001@qq.com,
  "greenDiamondLevel": 9,
  "isBigClub": true,
  "isSvip": false,
  "isVip": true,
  "isYearsVip": true,
  "lastUpdated": 2024-08-14T15:45:30Z,
  "location": 广东 深圳,
  "longNick": 今天天气真不错,
  "loverVipLevel": 2,
  "nickname": 小明,
  "privilegeIcons": null,
  "qid": xiaoming2024,
  "qq": 10001,
  "qqLevel": 64,
  "regTime": 2008-03-15T10:30:00Z,
  "sex": 男,
  "videoVipLevel": 7,
  "vipLevel": 7,
  "vipStatus": 1,
  "vipType": 3,
  "yellowDiamondLevel": 10,
} satisfies GetSocialQqUserinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialQqUserinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


