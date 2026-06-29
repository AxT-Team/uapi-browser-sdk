
# GetMiscHolidayCalendar200ResponseDaysInner


## Properties

Name | Type
------------ | -------------
`date` | string
`day` | number
`ganzhiDay` | string
`ganzhiMonth` | string
`ganzhiYear` | string
`isHoliday` | boolean
`isRestDay` | boolean
`isWeekend` | boolean
`isWorkday` | boolean
`legalHolidayName` | string
`legalHolidayType` | string
`lunarDay` | number
`lunarDayName` | string
`lunarFestival` | string
`lunarMonth` | number
`lunarMonthName` | string
`lunarYear` | number
`month` | number
`solarFestival` | string
`solarTerm` | string
`weekdayCn` | string
`year` | number

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseDaysInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-10-01,
  "day": 1,
  "ganzhiDay": 癸卯,
  "ganzhiMonth": 乙酉,
  "ganzhiYear": 乙巳,
  "isHoliday": true,
  "isRestDay": true,
  "isWeekend": false,
  "isWorkday": false,
  "legalHolidayName": 国庆中秋,
  "legalHolidayType": rest,
  "lunarDay": 10,
  "lunarDayName": 初十,
  "lunarFestival": ,
  "lunarMonth": 8,
  "lunarMonthName": 八月,
  "lunarYear": 2025,
  "month": 10,
  "solarFestival": 国庆节,
  "solarTerm": ,
  "weekdayCn": 星期三,
  "year": 2025,
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


