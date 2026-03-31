
# GetMiscHolidayCalendar200ResponseDaysInner


## Properties

Name | Type
------------ | -------------
`date` | string
`year` | number
`month` | number
`day` | number
`weekdayCn` | string
`isWeekend` | boolean
`isWorkday` | boolean
`isRestDay` | boolean
`isHoliday` | boolean
`legalHolidayName` | string
`legalHolidayType` | string
`solarFestival` | string
`lunarFestival` | string
`solarTerm` | string
`lunarYear` | number
`lunarMonth` | number
`lunarDay` | number
`lunarMonthName` | string
`lunarDayName` | string
`ganzhiYear` | string
`ganzhiMonth` | string
`ganzhiDay` | string

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseDaysInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-10-01,
  "year": 2025,
  "month": 10,
  "day": 1,
  "weekdayCn": 星期三,
  "isWeekend": false,
  "isWorkday": false,
  "isRestDay": true,
  "isHoliday": true,
  "legalHolidayName": 国庆中秋,
  "legalHolidayType": rest,
  "solarFestival": 国庆节,
  "lunarFestival": ,
  "solarTerm": ,
  "lunarYear": 2025,
  "lunarMonth": 8,
  "lunarDay": 10,
  "lunarMonthName": 八月,
  "lunarDayName": 初十,
  "ganzhiYear": 乙巳,
  "ganzhiMonth": 乙酉,
  "ganzhiDay": 癸卯,
} satisfies GetMiscHolidayCalendar200ResponseDaysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseDaysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


