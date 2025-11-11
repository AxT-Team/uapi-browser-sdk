
# GetSocialQqGroupinfo200Response


## Properties

Name | Type
------------ | -------------
`groupId` | string
`groupName` | string
`avatarUrl` | string
`description` | string
`tag` | string
`joinUrl` | string
`lastUpdated` | string

## Example

```typescript
import type { GetSocialQqGroupinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "groupId": 526357265,
  "groupName": 罗小黑桌宠二群,
  "avatarUrl": https://p.qlogo.cn/gh/526357265/526357265_1/100,
  "description": 在这里，发现更多~,
  "tag": 推荐群聊,
  "joinUrl": http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=xxx&group_code=526357265,
  "lastUpdated": 2025-10-04T12:34:56Z,
} satisfies GetSocialQqGroupinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialQqGroupinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


