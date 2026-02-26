
# GetMiscWeather200ResponseLifeIndicesClothing

穿衣指数

## Properties

Name | Type
------------ | -------------
`level` | string
`brief` | string
`advice` | string

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndicesClothing } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "level": 较舒适,
  "brief": 微凉,
  "advice": 建议穿薄外套、卫衣或长袖衬衫,
} satisfies GetMiscWeather200ResponseLifeIndicesClothing

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndicesClothing
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


