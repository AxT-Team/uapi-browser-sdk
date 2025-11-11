
# GetSocialBilibiliReplies200ResponseRepliesInner


## Properties

Name | Type
------------ | -------------
`rpid` | number
`oid` | number
`mid` | number
`root` | number
`parent` | number
`count` | number
`ctime` | number
`like` | number
`member` | [GetSocialBilibiliReplies200ResponseRepliesInnerMember](GetSocialBilibiliReplies200ResponseRepliesInnerMember.md)
`content` | [GetSocialBilibiliReplies200ResponseRepliesInnerContent](GetSocialBilibiliReplies200ResponseRepliesInnerContent.md)
`replies` | Array&lt;object&gt;

## Example

```typescript
import type { GetSocialBilibiliReplies200ResponseRepliesInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "rpid": 4189337397,
  "oid": 1706416465,
  "mid": 12345678,
  "root": 4189337300,
  "parent": 4189337300,
  "count": 520,
  "ctime": 1579532400,
  "like": 1314,
  "member": null,
  "content": null,
  "replies": null,
} satisfies GetSocialBilibiliReplies200ResponseRepliesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliReplies200ResponseRepliesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


