
# GetMiscHolidayCalendar200ResponseNearbyNextInnerEventsInner


## Properties

Name | Type
------------ | -------------
`date` | string
`name` | string
`type` | string
`isWorkday` | boolean

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseNearbyNextInnerEventsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-10-02,
  "name": 国庆中秋,
  "type": legal_rest,
  "isWorkday": true,
} satisfies GetMiscHolidayCalendar200ResponseNearbyNextInnerEventsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseNearbyNextInnerEventsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


