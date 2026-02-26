
# GetMiscWeather200ResponseLifeIndicesComfort

舒适度指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesComfort } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 冷,
  "brief": 偏冷,
  "advice": 体感偏冷，适当添加衣物,
} satisfies GetMiscWeather200ResponseLifeIndicesComfort

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesComfort
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


