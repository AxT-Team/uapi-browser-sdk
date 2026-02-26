
# GetMiscWeather200ResponseLifeIndicesSunscreen

防晒指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesSunscreen } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 中等,
  "brief": 需防晒,
  "advice": 建议涂抹防晒霜,
} satisfies GetMiscWeather200ResponseLifeIndicesSunscreen

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesSunscreen
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


