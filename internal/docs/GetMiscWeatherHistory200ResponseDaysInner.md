
# GetMiscWeatherHistory200ResponseDaysInner


## Properties

Name | Type
------------ | -------------
`date` | string
`rain` | number
`rained` | boolean
`tempMax` | number
`tempMin` | number
`weather` | string

## Example

```typescript
import type { GetMiscWeatherHistory200ResponseDaysInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 2026-05-01,
  "rain": 3.6,
  "rained": true,
  "tempMax": 24,
  "tempMin": 15,
  "weather": 小雨,
} satisfies GetMiscWeatherHistory200ResponseDaysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeatherHistory200ResponseDaysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


