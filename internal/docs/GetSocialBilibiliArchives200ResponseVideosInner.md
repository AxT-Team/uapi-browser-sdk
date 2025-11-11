
# GetSocialBilibiliArchives200ResponseVideosInner


## Properties

Name | Type
------------ | -------------
`aid` | number
`bvid` | string
`title` | string
`cover` | string
`duration` | number
`playCount` | number
`publishTime` | number
`createTime` | number
`state` | number
`isUgcPay` | number
`isInteractive` | boolean

## Example

```typescript
import type { GetSocialBilibiliArchives200ResponseVideosInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "aid": 115212162177124,
  "bvid": BV1JSpkzbEm6,
  "title": THE FINALS - 2025-09-16 12-41-39,
  "cover": http://i0.hdslb.com/bfs/archive/0c8098c4736ce8ab4572fbe54b8d89b09f9e24e2.jpg,
  "duration": 468,
  "playCount": 210,
  "publishTime": 1757999542,
  "createTime": 1757999542,
  "state": 0,
  "isUgcPay": 0,
  "isInteractive": false,
} satisfies GetSocialBilibiliArchives200ResponseVideosInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliArchives200ResponseVideosInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


