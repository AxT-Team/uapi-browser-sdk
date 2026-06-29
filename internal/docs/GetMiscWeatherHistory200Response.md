
# GetMiscWeatherHistory200Response


## Properties

Name | Type
------------ | -------------
`adcode` | string
`city` | string
`days` | [Array&lt;GetMiscWeatherHistory200ResponseDaysInner&gt;](GetMiscWeatherHistory200ResponseDaysInner.md)
`endDate` | string
`startDate` | string

## Example

```typescript
import type { GetMiscWeatherHistory200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "adcode": 110000,
  "city": 北京市,
  "days": null,
  "endDate": 2026-05-31,
  "startDate": 2026-05-01,
} satisfies GetMiscWeatherHistory200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeatherHistory200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


