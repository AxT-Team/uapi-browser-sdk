
# GetMiscWeather200Response


## Properties

Name | Type
------------ | -------------
`province` | string
`city` | string
`adcode` | string
`weather` | string
`temperature` | number
`windDirection` | string
`windPower` | string
`humidity` | number
`reportTime` | string
`feelsLike` | number
`visibility` | number
`pressure` | number
`uv` | number
`precipitation` | number
`cloud` | number
`aqi` | number
`aqiLevel` | number
`aqiCategory` | string
`aqiPrimary` | string
`airPollutants` | [GetMiscWeather200ResponseAirPollutants](GetMiscWeather200ResponseAirPollutants.md)
`tempMax` | number
`tempMin` | number
`forecast` | [Array&lt;GetMiscWeather200ResponseForecastInner&gt;](GetMiscWeather200ResponseForecastInner.md)
`hourlyForecast` | [Array&lt;GetMiscWeather200ResponseHourlyForecastInner&gt;](GetMiscWeather200ResponseHourlyForecastInner.md)
`minutelyPrecip` | [GetMiscWeather200ResponseMinutelyPrecip](GetMiscWeather200ResponseMinutelyPrecip.md)
`lifeIndices` | [GetMiscWeather200ResponseLifeIndices](GetMiscWeather200ResponseLifeIndices.md)

## Example

```typescript
import type { GetMiscWeather200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "province": 北京市,
  "city": 北京,
  "adcode": ,
  "weather": 晴,
  "temperature": 18.3,
  "windDirection": 西南风,
  "windPower": 微风,
  "humidity": 20,
  "reportTime": 2026-02-19 15:25:58,
  "feelsLike": 6,
  "visibility": 11.3,
  "pressure": 1017.5,
  "uv": 2.9,
  "precipitation": 0,
  "cloud": 75,
  "aqi": 56,
  "aqiLevel": 2,
  "aqiCategory": 良,
  "aqiPrimary": PM10,
  "airPollutants": null,
  "tempMax": 14,
  "tempMin": -1,
  "forecast": null,
  "hourlyForecast": null,
  "minutelyPrecip": null,
  "lifeIndices": null,
} satisfies GetMiscWeather200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


