
# GetSocialBilibiliVideoinfo200Response


## Properties

Name | Type
------------ | -------------
`bvid` | string
`aid` | number
`videos` | number
`tid` | number
`tname` | string
`copyright` | number
`pic` | string
`title` | string
`pubdate` | number
`ctime` | number
`desc` | string
`descV2` | [Array&lt;GetSocialBilibiliVideoinfo200ResponseDescV2Inner&gt;](GetSocialBilibiliVideoinfo200ResponseDescV2Inner.md)
`state` | number
`duration` | number
`rights` | [GetSocialBilibiliVideoinfo200ResponseRights](GetSocialBilibiliVideoinfo200ResponseRights.md)
`owner` | [GetSocialBilibiliVideoinfo200ResponseOwner](GetSocialBilibiliVideoinfo200ResponseOwner.md)
`stat` | [GetSocialBilibiliVideoinfo200ResponseStat](GetSocialBilibiliVideoinfo200ResponseStat.md)
`dynamic` | string
`cid` | number
`dimension` | [GetSocialBilibiliVideoinfo200ResponseDimension](GetSocialBilibiliVideoinfo200ResponseDimension.md)
`noCache` | boolean
`pages` | [Array&lt;GetSocialBilibiliVideoinfo200ResponsePagesInner&gt;](GetSocialBilibiliVideoinfo200ResponsePagesInner.md)
`subtitle` | [GetSocialBilibiliVideoinfo200ResponseSubtitle](GetSocialBilibiliVideoinfo200ResponseSubtitle.md)
`staff` | [Array&lt;GetSocialBilibiliVideoinfo200ResponseStaffInner&gt;](GetSocialBilibiliVideoinfo200ResponseStaffInner.md)
`ugcSeason` | [GetSocialBilibiliVideoinfo200ResponseUgcSeason](GetSocialBilibiliVideoinfo200ResponseUgcSeason.md)
`isChargeableSeason` | boolean
`isStory` | boolean
`honorReply` | [GetSocialBilibiliVideoinfo200ResponseHonorReply](GetSocialBilibiliVideoinfo200ResponseHonorReply.md)

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "bvid": BV17x411w79F,
  "aid": 75836761,
  "videos": 1,
  "tid": 31,
  "tname": Vocaloid·UTAU,
  "copyright": 2,
  "pic": http://i2.hdslb.com/bfs/archive/f769f330138980456159345c6139c8e9b265c2f5.jpg,
  "title": 【官方MV】Rick Astley - Never Gonna Give You Up,
  "pubdate": 1573884313,
  "ctime": 1573884313,
  "desc": 你被骗了,
  "descV2": null,
  "state": 0,
  "duration": 213,
  "rights": null,
  "owner": null,
  "stat": null,
  "dynamic": ,
  "cid": 130283995,
  "dimension": null,
  "noCache": false,
  "pages": null,
  "subtitle": null,
  "staff": null,
  "ugcSeason": null,
  "isChargeableSeason": false,
  "isStory": false,
  "honorReply": null,
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


