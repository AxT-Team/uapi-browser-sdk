
# GetMiscWeather200ResponseHourlyForecastInner


## Properties

Name | Type
------------ | -------------
`feelsLike` | number
`humidity` | number
`pop` | number
`precip` | number
`temperature` | number
`time` | string
`uvIndex` | number
`visibility` | number
`weather` | string
`windDirection` | string
`windScale` | string
`windSpeed` | number

## Example

```typescript
import type { GetMiscWeather200ResponseHourlyForecastInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "feelsLike": 6,
  "humidity": 25,
  "pop": 0,
  "precip": 0,
  "temperature": 8,
  "time": 2026-02-19T17:00:00+0900,
  "uvIndex": 0,
  "visibility": 14,
  "weather": 晴,
  "windDirection": 北北西,
  "windScale": 3级,
  "windSpeed": 17,
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


