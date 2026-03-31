
# GetSocialBilibiliVideoinfo200ResponseSubtitleListInner


## Properties

Name | Type
------------ | -------------
`id` | number
`lan` | string
`lanDoc` | string
`isLock` | boolean
`authorMid` | number
`subtitleUrl` | string
`author` | [GetSocialBilibiliVideoinfo200ResponseSubtitleListInnerAuthor](GetSocialBilibiliVideoinfo200ResponseSubtitleListInnerAuthor.md)

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseSubtitleListInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "id": 123456,
  "lan": zh-CN,
  "lanDoc": 中文（简体）,
  "isLock": false,
  "authorMid": 483307278,
  "subtitleUrl": //i0.hdslb.com/bfs/subtitle/xxxx.json,
  "author": null,
} satisfies GetSocialBilibiliVideoinfo200ResponseSubtitleListInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200ResponseSubtitleListInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


