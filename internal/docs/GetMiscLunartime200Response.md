
# GetMiscLunartime200Response


## Properties

Name | Type
------------ | -------------
`datetime` | string
`datetimeRfc3339` | string
`ganzhiDay` | string
`ganzhiMonth` | string
`ganzhiYear` | string
`isLeapMonth` | boolean
`lunarDay` | number
`lunarDayCn` | string
`lunarFestivals` | Array&lt;string&gt;
`lunarMonth` | number
`lunarMonthCn` | string
`lunarYear` | number
`lunarYearCn` | string
`queryTimestamp` | string
`queryTimezone` | string
`solarFestivals` | Array&lt;string&gt;
`solarTerm` | string
`timestampUnix` | number
`timezone` | string
`weekday` | string
`weekdayCn` | string
`zodiac` | string

## Example

```typescript
import type { GetMiscLunartime200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "datetime": 2024-02-10 12:00:00,
  "datetimeRfc3339": 2024-02-10T12:00:00+08:00,
  "ganzhiDay": 甲辰,
  "ganzhiMonth": 丙寅,
  "ganzhiYear": 甲辰,
  "isLeapMonth": false,
  "lunarDay": 1,
  "lunarDayCn": 初一,
  "lunarFestivals": null,
  "lunarMonth": 1,
  "lunarMonthCn": 正月,
  "lunarYear": 2024,
  "lunarYearCn": 二〇二四,
  "queryTimestamp": 1707537600,
  "queryTimezone": Asia/Shanghai,
  "solarFestivals": null,
  "solarTerm": ,
  "timestampUnix": 1707537600,
  "timezone": Asia/Shanghai,
  "weekday": Saturday,
  "weekdayCn": 星期六,
  "zodiac": 龙,
} satisfies GetMiscLunartime200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscLunartime200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


