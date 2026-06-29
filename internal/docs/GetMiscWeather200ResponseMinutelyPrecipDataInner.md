
# GetMiscWeather200ResponseMinutelyPrecipDataInner


## Properties

Name | Type
------------ | -------------
`precip` | number
`time` | string
`type` | string

## Example

```typescript
import type { GetMiscWeather200ResponseMinutelyPrecipDataInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "precip": 0,
  "time": 2026-02-19T15:30:00+08:00,
  "type": rain,
} satisfies GetMiscWeather200ResponseMinutelyPrecipDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseMinutelyPrecipDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


