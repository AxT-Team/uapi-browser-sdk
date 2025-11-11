
# GetSocialQqUserinfo200Response


## Properties

Name | Type
------------ | -------------
`qq` | string
`nickname` | string
`longNick` | string
`avatarUrl` | string
`age` | number
`sex` | string
`qid` | string
`qqLevel` | number
`location` | string
`email` | string
`isVip` | boolean
`vipLevel` | number
`regTime` | string
`lastUpdated` | string

## Example

```typescript
import type { GetSocialQqUserinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "qq": 12519212,
  "nickname": 小明,
  "longNick": 今天天气真不错,
  "avatarUrl": http://q.qlogo.cn/g?b=qq&nk=12519212&s=640,
  "age": 25,
  "sex": 男,
  "qid": xiaoming2024,
  "qqLevel": 64,
  "location": 广东 深圳,
  "email": 12519212@qq.com,
  "isVip": true,
  "vipLevel": 7,
  "regTime": 2008-03-15T10:30:00Z,
  "lastUpdated": 2024-08-14T15:45:30Z,
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


