
# GetMiscWeather200ResponseLifeIndicesCarWash

洗车指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesCarWash } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 非常适宜,
  "brief": 极佳,
  "advice": 天气晴好，非常适合洗车,
} satisfies GetMiscWeather200ResponseLifeIndicesCarWash

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesCarWash
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


