
# GetSocialBilibiliVideoinfo200Response


## Properties

Name | Type
------------ | -------------
`bvid` | string
`aid` | number
`videos` | number
`tname` | string
`copyright` | number
`pic` | string
`title` | string
`pubdate` | number
`ctime` | number
`desc` | string
`duration` | number
`owner` | [GetSocialBilibiliVideoinfo200ResponseOwner](GetSocialBilibiliVideoinfo200ResponseOwner.md)
`stat` | [GetSocialBilibiliVideoinfo200ResponseStat](GetSocialBilibiliVideoinfo200ResponseStat.md)
`pages` | [Array&lt;GetSocialBilibiliVideoinfo200ResponsePagesInner&gt;](GetSocialBilibiliVideoinfo200ResponsePagesInner.md)

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "bvid": BV17x411w79F,
  "aid": 75836761,
  "videos": 1,
  "tname": Vocaloid·UTAU,
  "copyright": 2,
  "pic": http://i2.hdslb.com/bfs/archive/f769f330138980456159345c6139c8e9b265c2f5.jpg,
  "title": 【官方MV】Rick Astley - Never Gonna Give You Up,
  "pubdate": 1573884313,
  "ctime": 1573884313,
  "desc": 你被骗了,
  "duration": 213,
  "owner": null,
  "stat": null,
  "pages": null,
} satisfies GetSocialBilibiliVideoinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


