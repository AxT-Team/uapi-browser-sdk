
# GetMiscWeather200ResponseLifeIndicesPollen

花粉扩散指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesPollen } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 较低,
  "brief": 不易发,
  "advice": 花粉浓度较低,
} satisfies GetMiscWeather200ResponseLifeIndicesPollen

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesPollen
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


