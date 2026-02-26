
# GetMiscWeather200ResponseLifeIndicesMood

心情指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesMood } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 较好,
  "brief": 愉悦,
  "advice": 天气不错，心情愉悦,
} satisfies GetMiscWeather200ResponseLifeIndicesMood

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesMood
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


