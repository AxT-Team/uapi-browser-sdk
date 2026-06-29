
# GetSocialBilibiliLiveroom200Response


## Properties

Name | Type
------------ | -------------
`areaId` | number
`areaName` | string
`attention` | number
`background` | string
`description` | string
`hotWords` | Array&lt;string&gt;
`isPortrait` | boolean
`keyframe` | string
`liveStatus` | number
`liveTime` | string
`newPendants` | [GetSocialBilibiliLiveroom200ResponseNewPendants](GetSocialBilibiliLiveroom200ResponseNewPendants.md)
`online` | number
`parentAreaId` | number
`parentAreaName` | string
`roomId` | number
`shortId` | number
`tags` | string
`title` | string
`uid` | number
`userCover` | string

## Example

```typescript
import type { GetSocialBilibiliLiveroom200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "areaId": 372,
  "areaName": 虚拟偶像,
  "attention": 1789089,
  "background": http://i0.hdslb.com/bfs/live/room_bg/672328094.jpg,
  "description": 这里是嘉然的直播间，欢迎回家！,
  "hotWords": null,
  "isPortrait": false,
  "keyframe": http://i0.hdslb.com/bfs/live-key-frame/keyframe.jpg,
  "liveStatus": 1,
  "liveTime": 2023-10-27 20:00:00,
  "newPendants": null,
  "online": 3662242,
  "parentAreaId": 9,
  "parentAreaName": 虚拟主播,
  "roomId": 22637261,
  "shortId": 22625027,
  "tags": VUP,虚拟偶像,A-SOUL,嘉然,
  "title": 【B限】杂谈~来聊聊天吧~,
  "uid": 672328094,
  "userCover": http://i0.hdslb.com/bfs/live/user_cover/672328094.jpg,
} satisfies GetSocialBilibiliLiveroom200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliLiveroom200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


