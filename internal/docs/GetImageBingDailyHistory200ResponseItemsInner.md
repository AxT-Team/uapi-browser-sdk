
# GetImageBingDailyHistory200ResponseItemsInner


## Properties

Name | Type
------------ | -------------
`copyright` | string
`copyrightLink` | string
`date` | string
`description` | string
`fetchedAt` | string
`headline` | string
`imageUrl` | string
`imageUrl1080` | string
`imageUrl4k` | string
`market` | string
`quizId` | string
`resolution` | string
`subtitle` | string
`title` | string
`trivia` | [FormatJsonTrivia](FormatJsonTrivia.md)
`updatedAt` | string

## Example

```typescript
import type { GetImageBingDailyHistory200ResponseItemsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "copyright": 西雅图，华盛顿州，美国 (© Jim Patterson/Tandem Stills + Motion),
  "copyrightLink": https://www.bing.com/search?q=%E8%A5%BF%E9%9B%85%E5%9B%BE&form=hpcapt&mkt=zh-cn,
  "date": 2026-04-07,
  "description": 每年4月7日的国际河狸日，旨在致敬这位默默工作的“小工程师”。河狸会用树枝和泥土建造水坝，重塑淡水生态环境。,
  "fetchedAt": 2026-04-08T18:52:39.82+08:00,
  "headline": 一根树枝，一点工程,
  "imageUrl": https://cn.bing.com/th?id=OHR.SeattleSunrise_ZH-CN2884575647_UHD.jpg,
  "imageUrl1080": https://cn.bing.com/th?id=OHR.SeattleSunrise_ZH-CN2884575647_UHD.jpg&pid=hp&w=1920,
  "imageUrl4k": https://cn.bing.com/th?id=OHR.SeattleSunrise_ZH-CN2884575647_UHD.jpg,
  "market": zh-CN,
  "quizId": HPQuiz_20260409_SeattleSunrise,
  "resolution": 4k,
  "subtitle": 国际河狸日,
  "title": 河狸，德国,
  "trivia": null,
  "updatedAt": 2026-04-08T19:05:05.547+08:00,
} satisfies GetImageBingDailyHistory200ResponseItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetImageBingDailyHistory200ResponseItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


