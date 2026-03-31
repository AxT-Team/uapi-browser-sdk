
# GetMiscHolidayCalendar200ResponseSummary

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
import type { GetMiscHolidayCalendar200ResponseSummary } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "totalDays": 1,
  "weekendDays": 0,
  "workdays": 0,
  "restDays": 1,
  "holidayEvents": 1,
  "legalRestDays": 1,
  "legalWorkdays": 0,
} satisfies GetMiscHolidayCalendar200ResponseSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


