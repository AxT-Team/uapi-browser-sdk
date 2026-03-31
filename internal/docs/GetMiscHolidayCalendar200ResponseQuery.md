
# GetMiscHolidayCalendar200ResponseQuery

请求参数回显。

## Properties

Name | Type
------------ | -------------
`date` | string
`holidayType` | string
`includeNearby` | boolean
`month` | string
`nearbyLimit` | number
`timezone` | string
`year` | string

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseQuery } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-10-01,
  "holidayType": legal,
  "includeNearby": true,
  "month": ,
  "nearbyLimit": 7,
  "timezone": Asia/Shanghai,
  "year": ,
} satisfies GetMiscHolidayCalendar200ResponseQuery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseQuery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


