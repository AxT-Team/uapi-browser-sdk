
# GetSocialBilibiliLiveroom200Response


## Properties

Name | Type
------------ | -------------
`uid` | number
`roomId` | number
`shortId` | number
`attention` | number
`online` | number
`liveStatus` | number
`areaId` | number
`parentAreaName` | string
`areaName` | string
`background` | string
`title` | string
`userCover` | string
`description` | string
`liveTime` | string
`tags` | string
`hotWords` | Array&lt;string&gt;
`newPendants` | object

## Example

```typescript
import type { GetSocialBilibiliLiveroom200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "uid": 672328094,
  "roomId": 22637261,
  "shortId": 22625027,
  "attention": 1789089,
  "online": 3662242,
  "liveStatus": 1,
  "areaId": 372,
  "parentAreaName": 虚拟主播,
  "areaName": 虚拟偶像,
  "background": http://i0.hdslb.com/bfs/live/room_bg/672328094.jpg,
  "title": 【B限】杂谈~来聊聊天吧~,
  "userCover": http://i0.hdslb.com/bfs/live/user_cover/672328094.jpg,
  "description": 这里是嘉然的直播间，欢迎回家！,
  "liveTime": 2023-10-27 20:00:00,
  "tags": VUP,虚拟偶像,A-SOUL,嘉然,
  "hotWords": null,
  "newPendants": null,
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


