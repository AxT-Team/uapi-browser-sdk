
# GetMiscLunartime200ResponseData

万年历查询结果。

## Properties

Name | Type
------------ | -------------
`queryTimestamp` | string
`queryTimezone` | string
`timezone` | string
`datetime` | string
`datetimeRfc3339` | string
`timestampUnix` | number
`weekday` | string
`weekdayCn` | string
`lunarYear` | number
`lunarMonth` | number
`lunarDay` | number
`isLeapMonth` | boolean
`lunarYearCn` | string
`lunarMonthCn` | string
`lunarDayCn` | string
`ganzhiYear` | string
`ganzhiMonth` | string
`ganzhiDay` | string
`zodiac` | string
`solarTerm` | string
`lunarFestivals` | Array&lt;string&gt;
`solarFestivals` | Array&lt;string&gt;

## Example

```typescript
import type { GetMiscLunartime200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "queryTimestamp": 1707537600,
  "queryTimezone": Asia/Shanghai,
  "timezone": Asia/Shanghai,
  "datetime": 2024-02-10 12:00:00,
  "datetimeRfc3339": 2024-02-10T12:00:00+08:00,
  "timestampUnix": 1707537600,
  "weekday": Saturday,
  "weekdayCn": 星期六,
  "lunarYear": 2024,
  "lunarMonth": 1,
  "lunarDay": 1,
  "isLeapMonth": false,
  "lunarYearCn": 二零二四,
  "lunarMonthCn": 正月,
  "lunarDayCn": 初一,
  "ganzhiYear": 甲辰,
  "ganzhiMonth": 丙寅,
  "ganzhiDay": 甲辰,
  "zodiac": 龙,
  "solarTerm": ,
  "lunarFestivals": null,
  "solarFestivals": null,
} satisfies GetMiscLunartime200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscLunartime200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


