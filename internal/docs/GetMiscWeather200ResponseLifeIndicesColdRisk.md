
# GetMiscWeather200ResponseLifeIndicesColdRisk

感冒指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesColdRisk } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 较低,
  "brief": 较少发,
  "advice": 感冒风险较低,
} satisfies GetMiscWeather200ResponseLifeIndicesColdRisk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesColdRisk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


