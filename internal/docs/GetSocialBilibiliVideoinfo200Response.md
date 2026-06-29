
# GetSocialBilibiliVideoinfo200Response


## Properties

Name | Type
------------ | -------------
`aid` | number
`bvid` | string
`cid` | number
`copyright` | number
`ctime` | number
`desc` | string
`descV2` | [Array&lt;GetSocialBilibiliVideoinfo200ResponseDescV2Inner&gt;](GetSocialBilibiliVideoinfo200ResponseDescV2Inner.md)
`dimension` | [GetSocialBilibiliVideoinfo200ResponseDimension](GetSocialBilibiliVideoinfo200ResponseDimension.md)
`duration` | number
`dynamic` | string
`honorReply` | [GetSocialBilibiliVideoinfo200ResponseHonorReply](GetSocialBilibiliVideoinfo200ResponseHonorReply.md)
`isChargeableSeason` | boolean
`isStory` | boolean
`isUpowerExclusive` | boolean
`isUpowerExclusiveWithQa` | boolean
`isUpowerPlay` | boolean
`isUpowerPreview` | boolean
`noCache` | boolean
`owner` | [GetSocialBilibiliVideoinfo200ResponseOwner](GetSocialBilibiliVideoinfo200ResponseOwner.md)
`pages` | [Array&lt;GetSocialBilibiliVideoinfo200ResponsePagesInner&gt;](GetSocialBilibiliVideoinfo200ResponsePagesInner.md)
`payType` | string
`pic` | string
`pubdate` | number
`rights` | [GetSocialBilibiliVideoinfo200ResponseRights](GetSocialBilibiliVideoinfo200ResponseRights.md)
`staff` | [Array&lt;GetSocialBilibiliVideoinfo200ResponseStaffInner&gt;](GetSocialBilibiliVideoinfo200ResponseStaffInner.md)
`stat` | [GetSocialBilibiliVideoinfo200ResponseStat](GetSocialBilibiliVideoinfo200ResponseStat.md)
`state` | number
`subtitle` | [GetSocialBilibiliVideoinfo200ResponseSubtitle](GetSocialBilibiliVideoinfo200ResponseSubtitle.md)
`tid` | number
`title` | string
`tname` | string
`ugcSeason` | [GetSocialBilibiliVideoinfo200ResponseUgcSeason](GetSocialBilibiliVideoinfo200ResponseUgcSeason.md)
`videos` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "aid": 75836761,
  "bvid": BV17x411w79F,
  "cid": 130283995,
  "copyright": 2,
  "ctime": 1573884313,
  "desc": 你被骗了,
  "descV2": null,
  "dimension": null,
  "duration": 213,
  "dynamic": ,
  "honorReply": null,
  "isChargeableSeason": false,
  "isStory": false,
  "isUpowerExclusive": true,
  "isUpowerExclusiveWithQa": false,
  "isUpowerPlay": false,
  "isUpowerPreview": false,
  "noCache": false,
  "owner": null,
  "pages": null,
  "payType": upower_exclusive,
  "pic": http://i2.hdslb.com/bfs/archive/f769f330138980456159345c6139c8e9b265c2f5.jpg,
  "pubdate": 1573884313,
  "rights": null,
  "staff": null,
  "stat": null,
  "state": 0,
  "subtitle": null,
  "tid": 31,
  "title": 【官方MV】Rick Astley - Never Gonna Give You Up,
  "tname": Vocaloid·UTAU,
  "ugcSeason": null,
  "videos": 1,
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


