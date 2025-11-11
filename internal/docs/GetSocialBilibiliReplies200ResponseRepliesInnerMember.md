
# GetSocialBilibiliReplies200ResponseRepliesInnerMember

发表评论的用户信息。

## Properties

Name | Type
------------ | -------------
`uname` | string
`sex` | string
`avatar` | string
`levelInfo` | [GetSocialBilibiliReplies200ResponseRepliesInnerMemberLevelInfo](GetSocialBilibiliReplies200ResponseRepliesInnerMemberLevelInfo.md)

## Example

```typescript
import type { GetSocialBilibiliReplies200ResponseRepliesInnerMember } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "uname": 评论区大神,
  "sex": 男,
  "avatar": http://i0.hdslb.com/bfs/face/....jpg,
  "levelInfo": null,
} satisfies GetSocialBilibiliReplies200ResponseRepliesInnerMember

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliReplies200ResponseRepliesInnerMember
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


