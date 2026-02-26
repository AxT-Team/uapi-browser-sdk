
# GetMiscHolidayCalendar200ResponseData


## Properties

Name | Type
------------ | -------------
`mode` | string
`query` | [GetMiscHolidayCalendar200ResponseDataQuery](GetMiscHolidayCalendar200ResponseDataQuery.md)
`summary` | [GetMiscHolidayCalendar200ResponseDataSummary](GetMiscHolidayCalendar200ResponseDataSummary.md)
`days` | [Array&lt;GetMiscHolidayCalendar200ResponseDataDaysInner&gt;](GetMiscHolidayCalendar200ResponseDataDaysInner.md)
`holidays` | [Array&lt;GetMiscHolidayCalendar200ResponseDataHolidaysInner&gt;](GetMiscHolidayCalendar200ResponseDataHolidaysInner.md)
`nearby` | [GetMiscHolidayCalendar200ResponseDataNearby](GetMiscHolidayCalendar200ResponseDataNearby.md)

## Example

```typescript
import type { GetMiscHolidayCalendar200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "mode": day,
  "query": null,
  "summary": null,
  "days": null,
  "holidays": null,
  "nearby": null,
} satisfies GetMiscHolidayCalendar200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHolidayCalendar200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


