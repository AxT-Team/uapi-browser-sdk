
# GetMiscWeather200ResponseAirPollutants

空气污染物分项数据（extended=true 时返回，部分数据源可能不返回）

## Properties

Name | Type
------------ | -------------
`co` | number
`no2` | number
`o3` | number
`pm10` | number
`pm25` | number
`so2` | number

## Example

```typescript
import type { GetMiscWeather200ResponseAirPollutants } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "co": 0.4,
  "no2": 13,
  "o3": 91,
  "pm10": 69,
  "pm25": 33,
  "so2": 7,
} satisfies GetMiscWeather200ResponseAirPollutants

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseAirPollutants
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


