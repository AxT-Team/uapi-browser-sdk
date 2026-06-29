
# GetSocialBilibiliReplies200ResponseRepliesInner


## Properties

Name | Type
------------ | -------------
`content` | [GetSocialBilibiliReplies200ResponseRepliesInnerContent](GetSocialBilibiliReplies200ResponseRepliesInnerContent.md)
`count` | number
`ctime` | number
`like` | number
`member` | [GetSocialBilibiliReplies200ResponseRepliesInnerMember](GetSocialBilibiliReplies200ResponseRepliesInnerMember.md)
`mid` | number
`oid` | number
`parent` | number
`replies` | Array&lt;object&gt;
`root` | number
`rpid` | number

## Example

```typescript
import type { GetSocialBilibiliReplies200ResponseRepliesInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "count": 520,
  "ctime": 1579532400,
  "like": 1314,
  "member": null,
  "mid": 12345678,
  "oid": 1706416465,
  "parent": 4189337300,
  "replies": null,
  "root": 4189337300,
  "rpid": 4189337397,
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


