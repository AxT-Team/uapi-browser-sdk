
# GetMiscHolidayCalendar200Response


## Properties

Name | Type
------------ | -------------
`mode` | string
`query` | [GetMiscHolidayCalendar200ResponseQuery](GetMiscHolidayCalendar200ResponseQuery.md)
`summary` | [GetMiscHolidayCalendar200ResponseSummary](GetMiscHolidayCalendar200ResponseSummary.md)
`days` | [Array&lt;GetMiscHolidayCalendar200ResponseDaysInner&gt;](GetMiscHolidayCalendar200ResponseDaysInner.md)
`holidays` | [Array&lt;GetMiscHolidayCalendar200ResponseHolidaysInner&gt;](GetMiscHolidayCalendar200ResponseHolidaysInner.md)
`nearby` | [GetMiscHolidayCalendar200ResponseNearby](GetMiscHolidayCalendar200ResponseNearby.md)

## Example

```typescript
import type { GetMiscHolidayCalendar200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "mode": day,
  "query": null,
  "summary": null,
  "days": null,
  "holidays": null,
  "nearby": null,
} satisfies GetMiscHolidayCalendar200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


