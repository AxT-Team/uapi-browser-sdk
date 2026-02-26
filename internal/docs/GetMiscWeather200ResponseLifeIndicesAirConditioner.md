
# GetMiscWeather200ResponseLifeIndicesAirConditioner

空调开启指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesAirConditioner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 建议制热,
  "brief": 寒冷,
  "advice": 建议开启空调制热,
} satisfies GetMiscWeather200ResponseLifeIndicesAirConditioner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesAirConditioner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


