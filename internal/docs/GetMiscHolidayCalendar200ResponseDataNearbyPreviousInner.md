
# GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner


## Properties

Name | Type
------------ | -------------
`date` | string
`name` | string
`type` | string

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2025-09-17,
  "name": 中秋节,
  "type": lunar_festival,
} satisfies GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


