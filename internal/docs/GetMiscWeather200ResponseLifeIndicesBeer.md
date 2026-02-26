
# GetMiscWeather200ResponseLifeIndicesBeer

啤酒指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesBeer } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 适宜,
  "brief": 较好,
  "advice": 适合来一杯冰啤酒,
} satisfies GetMiscWeather200ResponseLifeIndicesBeer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesBeer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


