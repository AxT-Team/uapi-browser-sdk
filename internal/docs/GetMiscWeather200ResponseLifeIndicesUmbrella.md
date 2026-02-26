
# GetMiscWeather200ResponseLifeIndicesUmbrella

雨伞指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesUmbrella } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 不需要,
  "brief": 无需,
  "advice": 天气晴好，无需带伞,
} satisfies GetMiscWeather200ResponseLifeIndicesUmbrella

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesUmbrella
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


