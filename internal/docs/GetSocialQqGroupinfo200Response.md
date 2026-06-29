
# GetSocialQqGroupinfo200Response


## Properties

Name | Type
------------ | -------------
`activeMemberNum` | number
`avatarUrl` | string
`certText` | string
`certType` | number
`createTime` | number
`createTimeStr` | string
`description` | string
`groupGrade` | number
`groupId` | string
`groupMemo` | string
`groupName` | string
`joinUrl` | string
`lastUpdated` | string
`maxMemberCount` | number
`memberCount` | number
`ownerUid` | string
`ownerUin` | string
`tag` | string

## Example

```typescript
import type { GetSocialQqGroupinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "activeMemberNum": 856,
  "avatarUrl": https://p.qlogo.cn/gh/526357265/526357265_1/100,
  "certText": 官方认证群,
  "certType": 0,
  "createTime": 1652321207,
  "createTimeStr": 2022-05-12 10:06:47,
  "description": 在这里，发现更多~,
  "groupGrade": 3,
  "groupId": 526357265,
  "groupMemo": 欢迎加入本群,
  "groupName": 罗小黑桌宠二群,
  "joinUrl": http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=xxx&group_code=526357265,
  "lastUpdated": 2025-10-04T12:34:56Z,
  "maxMemberCount": 500,
  "memberCount": 498,
  "ownerUid": u_IuagWQ41A6XZhfJv4UpYqA,
  "ownerUin": 1164779091,
  "tag": 推荐群聊,
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


