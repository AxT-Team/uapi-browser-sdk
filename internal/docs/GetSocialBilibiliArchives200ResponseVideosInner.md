
# GetSocialBilibiliArchives200ResponseVideosInner


## Properties

Name | Type
------------ | -------------
`aid` | number
`bvid` | string
`cover` | string
`createTime` | number
`duration` | number
`isInteractive` | boolean
`isUgcPay` | number
`playCount` | number
`publishTime` | number
`state` | number
`title` | string

## Example

```typescript
import type { GetSocialBilibiliArchives200ResponseVideosInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "aid": 115212162177124,
  "bvid": BV1JSpkzbEm6,
  "cover": http://i0.hdslb.com/bfs/archive/0c8098c4736ce8ab4572fbe54b8d89b09f9e24e2.jpg,
  "createTime": 1757999542,
  "duration": 468,
  "isInteractive": false,
  "isUgcPay": 0,
  "playCount": 210,
  "publishTime": 1757999542,
  "state": 0,
  "title": THE FINALS - 2025-09-16 12-41-39,
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


