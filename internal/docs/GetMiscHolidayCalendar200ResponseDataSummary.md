
# GetMiscHolidayCalendar200ResponseDataSummary

统计摘要。

## Properties

Name | Type
------------ | -------------
`totalDays` | number
`weekendDays` | number
`workdays` | number
`restDays` | number
`holidayEvents` | number
`legalRestDays` | number
`legalWorkdays` | number

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseDataSummary } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "totalDays": 31,
  "weekendDays": 8,
  "workdays": 23,
  "restDays": 10,
  "holidayEvents": 5,
  "legalRestDays": 3,
  "legalWorkdays": 1,
} satisfies GetMiscHolidayCalendar200ResponseDataSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseDataSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


