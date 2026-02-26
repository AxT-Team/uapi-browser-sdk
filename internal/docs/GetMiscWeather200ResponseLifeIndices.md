
# GetMiscWeather200ResponseLifeIndices

18项生活指数（indices=true 时返回），每项包含 level（等级名称）、brief（简短描述）、advice（详细建议）

## Properties

Name | Type
------------ | -------------
`clothing` | [GetMiscWeather200ResponseLifeIndicesClothing](GetMiscWeather200ResponseLifeIndicesClothing.md)
`uv` | [GetMiscWeather200ResponseLifeIndicesUv](GetMiscWeather200ResponseLifeIndicesUv.md)
`carWash` | [GetMiscWeather200ResponseLifeIndicesCarWash](GetMiscWeather200ResponseLifeIndicesCarWash.md)
`drying` | [GetMiscWeather200ResponseLifeIndicesDrying](GetMiscWeather200ResponseLifeIndicesDrying.md)
`airConditioner` | [GetMiscWeather200ResponseLifeIndicesAirConditioner](GetMiscWeather200ResponseLifeIndicesAirConditioner.md)
`coldRisk` | [GetMiscWeather200ResponseLifeIndicesColdRisk](GetMiscWeather200ResponseLifeIndicesColdRisk.md)
`exercise` | [GetMiscWeather200ResponseLifeIndicesExercise](GetMiscWeather200ResponseLifeIndicesExercise.md)
`comfort` | [GetMiscWeather200ResponseLifeIndicesComfort](GetMiscWeather200ResponseLifeIndicesComfort.md)
`travel` | [GetMiscWeather200ResponseLifeIndicesTravel](GetMiscWeather200ResponseLifeIndicesTravel.md)
`fishing` | [GetMiscWeather200ResponseLifeIndicesFishing](GetMiscWeather200ResponseLifeIndicesFishing.md)
`allergy` | [GetMiscWeather200ResponseLifeIndicesAllergy](GetMiscWeather200ResponseLifeIndicesAllergy.md)
`sunscreen` | [GetMiscWeather200ResponseLifeIndicesSunscreen](GetMiscWeather200ResponseLifeIndicesSunscreen.md)
`mood` | [GetMiscWeather200ResponseLifeIndicesMood](GetMiscWeather200ResponseLifeIndicesMood.md)
`beer` | [GetMiscWeather200ResponseLifeIndicesBeer](GetMiscWeather200ResponseLifeIndicesBeer.md)
`umbrella` | [GetMiscWeather200ResponseLifeIndicesUmbrella](GetMiscWeather200ResponseLifeIndicesUmbrella.md)
`traffic` | [GetMiscWeather200ResponseLifeIndicesTraffic](GetMiscWeather200ResponseLifeIndicesTraffic.md)
`airPurifier` | [GetMiscWeather200ResponseLifeIndicesAirPurifier](GetMiscWeather200ResponseLifeIndicesAirPurifier.md)
`pollen` | [GetMiscWeather200ResponseLifeIndicesPollen](GetMiscWeather200ResponseLifeIndicesPollen.md)

## Example

```typescript
import type { GetMiscWeather200ResponseLifeIndices } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "clothing": null,
  "uv": null,
  "carWash": null,
  "drying": null,
  "airConditioner": null,
  "coldRisk": null,
  "exercise": null,
  "comfort": null,
  "travel": null,
  "fishing": null,
  "allergy": null,
  "sunscreen": null,
  "mood": null,
  "beer": null,
  "umbrella": null,
  "traffic": null,
  "airPurifier": null,
  "pollen": null,
} satisfies GetMiscWeather200ResponseLifeIndices

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseLifeIndices
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


