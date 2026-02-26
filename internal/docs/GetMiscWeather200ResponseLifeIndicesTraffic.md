
# GetMiscWeather200ResponseLifeIndicesTraffic

交通指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesTraffic } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 良好,
  "brief": 较好,
  "advice": 天气对交通无明显影响,
} satisfies GetMiscWeather200ResponseLifeIndicesTraffic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesTraffic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


