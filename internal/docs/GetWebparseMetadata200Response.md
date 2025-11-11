
# GetWebparseMetadata200Response


## Properties

Name | Type
------------ | -------------
`pageUrl` | string
`title` | string
`description` | string
`keywords` | Array&lt;string&gt;
`faviconUrl` | string
`language` | string
`author` | string
`publishedTime` | string
`canonicalUrl` | string
`generator` | string
`openGraph` | object

## Example

```typescript
import type { GetWebparseMetadata200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "pageUrl": https://www.bilibili.com,
  "title": 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili,
  "description": bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。,
  "keywords": ["B站","弹幕","视频"],
  "faviconUrl": https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png,
  "language": zh-CN,
  "author": ,
  "publishedTime": ,
  "canonicalUrl": https://www.bilibili.com/,
  "generator": ,
  "openGraph": {},
} satisfies GetWebparseMetadata200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebparseMetadata200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


