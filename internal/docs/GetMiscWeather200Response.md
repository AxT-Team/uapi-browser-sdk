
# GetMiscWeather200Response


## Properties

Name | Type
------------ | -------------
`adcode` | string
`airPollutants` | [GetMiscWeather200ResponseAirPollutants](GetMiscWeather200ResponseAirPollutants.md)
`alerts` | [Array&lt;GetMiscWeather200ResponseAlertsInner&gt;](GetMiscWeather200ResponseAlertsInner.md)
`aqi` | number
`aqiCategory` | string
`aqiLevel` | number
`aqiPrimary` | string
`city` | string
`cloud` | number
`district` | string
`feelsLike` | number
`forecast` | [Array&lt;GetMiscWeather200ResponseForecastInner&gt;](GetMiscWeather200ResponseForecastInner.md)
`hourlyForecast` | [Array&lt;GetMiscWeather200ResponseHourlyForecastInner&gt;](GetMiscWeather200ResponseHourlyForecastInner.md)
`humidity` | number
`lifeIndices` | [GetMiscWeather200ResponseLifeIndices](GetMiscWeather200ResponseLifeIndices.md)
`minutelyPrecip` | [GetMiscWeather200ResponseMinutelyPrecip](GetMiscWeather200ResponseMinutelyPrecip.md)
`precipitation` | number
`pressure` | number
`province` | string
`reportTime` | string
`tempMax` | number
`tempMin` | number
`temperature` | number
`uv` | number
`visibility` | number
`weather` | string
`weatherIcon` | string
`windDirection` | string
`windPower` | string

## Example

```typescript
import type { GetMiscWeather200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "adcode": ,
  "airPollutants": null,
  "alerts": null,
  "aqi": 56,
  "aqiCategory": 良,
  "aqiLevel": 2,
  "aqiPrimary": PM10,
  "city": 北京,
  "cloud": 75,
  "district": 海淀区,
  "feelsLike": 6,
  "forecast": null,
  "hourlyForecast": null,
  "humidity": 20,
  "lifeIndices": null,
  "minutelyPrecip": null,
  "precipitation": 0,
  "pressure": 1017.5,
  "province": 北京市,
  "reportTime": 2026-02-19 15:25:58,
  "tempMax": 14,
  "tempMin": -1,
  "temperature": 18.3,
  "uv": 2.9,
  "visibility": 11.3,
  "weather": 晴,
  "weatherIcon": 100,
  "windDirection": 西南风,
  "windPower": 微风,
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


