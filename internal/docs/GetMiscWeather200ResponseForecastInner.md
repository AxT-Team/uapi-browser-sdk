
# GetMiscWeather200ResponseForecastInner


## Properties

Name | Type
------------ | -------------
`date` | string
`humidity` | number
`precip` | number
`sunrise` | string
`sunset` | string
`tempMax` | number
`tempMin` | number
`uvIndex` | number
`visibility` | number
`weatherDay` | string
`weatherNight` | string
`week` | string
`windDirDay` | string
`windDirNight` | string
`windScaleDay` | string
`windScaleNight` | string
`windSpeedDay` | number

## Example

```typescript
import type { GetMiscWeather200ResponseForecastInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2026-02-19,
  "humidity": 40,
  "precip": 0,
  "sunrise": 06:52,
  "sunset": 1076,
  "tempMax": 14,
  "tempMin": -1,
  "uvIndex": 5,
  "visibility": 25,
  "weatherDay": 晴,
  "weatherNight": 晴,
  "week": 星期四,
  "windDirDay": 西南风,
  "windDirNight": 北风,
  "windScaleDay": 微风,
  "windScaleNight": 微风,
  "windSpeedDay": 17,
} satisfies GetMiscWeather200ResponseForecastInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseForecastInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


