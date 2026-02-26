
# GetMiscWeather200ResponseHourlyForecastInner


## Properties

Name | Type
------------ | -------------
`time` | string
`temperature` | number
`weather` | string
`windDirection` | string
`windSpeed` | number
`windScale` | string
`humidity` | number
`precip` | number
`pressure` | number
`cloud` | number
`feelsLike` | number
`dewPoint` | number
`visibility` | number
`pop` | number
`uvIndex` | number

## Example

```typescript
import type { GetMiscWeather200ResponseHourlyForecastInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "time": 2026-02-19T17:00:00+0900,
  "temperature": 8,
  "weather": 晴,
  "windDirection": 北北西,
  "windSpeed": 17,
  "windScale": 3级,
  "humidity": 25,
  "precip": 0,
  "pressure": 1018.7,
  "cloud": 6,
  "feelsLike": 6,
  "dewPoint": -11,
  "visibility": 14,
  "pop": 0,
  "uvIndex": 0,
} satisfies GetMiscWeather200ResponseHourlyForecastInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseHourlyForecastInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


