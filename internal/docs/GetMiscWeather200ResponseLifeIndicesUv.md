
# GetMiscWeather200ResponseLifeIndicesUv

紫外线指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesUv } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 高,
  "brief": 较强,
  "advice": 紫外线较强，减少10-14点户外活动，涂抹SPF30+防晒霜，戴帽子和墨镜,
} satisfies GetMiscWeather200ResponseLifeIndicesUv

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesUv
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


