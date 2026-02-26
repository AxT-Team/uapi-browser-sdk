
# GetMiscHolidayCalendar200ResponseDataQuery

请求参数回显。

## Properties

Name | Type
------------ | -------------
`date` | string
`month` | string
`year` | string
`timezone` | string
`holidayType` | string
`includeNearby` | boolean
`nearbyLimit` | number

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseDataQuery } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-10-01,
  "month": 2025-10,
  "year": 2026,
  "timezone": Asia/Shanghai,
  "holidayType": all,
  "includeNearby": true,
  "nearbyLimit": 7,
} satisfies GetMiscHolidayCalendar200ResponseDataQuery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseDataQuery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


