
# GetMiscWeather200Response


## Properties

Name | Type
------------ | -------------
`adcode` | string
`city` | string
`humidity` | number
`province` | string
`reportTime` | string
`temperature` | number
`weather` | string
`windDirection` | string
`windPower` | string

## Example

```typescript
import type { GetMiscWeather200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "adcode": 110101,
  "city": 东城区,
  "humidity": 40,
  "province": 北京,
  "reportTime": 2023-10-27 15:00:00,
  "temperature": 15,
  "weather": 晴,
  "windDirection": 北,
  "windPower": ≤3,
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


