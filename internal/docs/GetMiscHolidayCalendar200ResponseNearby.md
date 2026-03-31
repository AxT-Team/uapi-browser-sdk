
# GetMiscHolidayCalendar200ResponseNearby

前后最近节日，仅 include_nearby=true 且 date 模式返回。

## Properties

Name | Type
------------ | -------------
`previous` | [Array&lt;GetMiscHolidayCalendar200ResponseNearbyPreviousInner&gt;](GetMiscHolidayCalendar200ResponseNearbyPreviousInner.md)
`next` | [Array&lt;GetMiscHolidayCalendar200ResponseNearbyNextInner&gt;](GetMiscHolidayCalendar200ResponseNearbyNextInner.md)

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseNearby } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "previous": null,
  "next": null,
} satisfies GetMiscHolidayCalendar200ResponseNearby

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseNearby
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


