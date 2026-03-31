
# GetMiscHolidayCalendar200ResponseNearbyPreviousInnerEventsInner


## Properties

Name | Type
------------ | -------------
`date` | string
`name` | string
`type` | string
`isWorkday` | boolean

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseNearbyPreviousInnerEventsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-09-28,
  "name": 国庆中秋,
  "type": legal_workday_adjust,
  "isWorkday": true,
} satisfies GetMiscHolidayCalendar200ResponseNearbyPreviousInnerEventsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseNearbyPreviousInnerEventsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


