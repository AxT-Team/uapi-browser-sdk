
# GetMiscWeather200ResponseLifeIndicesAirPurifier

空气净化器指数

## Properties

Name | Type
------------ | -------------
`advice` | string
`brief` | string
`level` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesAirPurifier } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "advice": 空气质量一般，建议开启空气净化器,
  "brief": 一般,
  "level": 建议开启,
} satisfies GetMiscWeather200ResponseLifeIndicesAirPurifier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesAirPurifier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


