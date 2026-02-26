
# GetMiscDistrict200ResponseResultsInner


## Properties

Name | Type
------------ | -------------
`name` | string
`level` | string
`country` | string
`countryCode` | string
`province` | string
`city` | string
`district` | string
`street` | string
`adcode` | string
`citycode` | string
`center` | [GetMiscDistrict200ResponseResultsInnerCenter](GetMiscDistrict200ResponseResultsInnerCenter.md)
`population` | number
`timezone` | string

## Example

```typescript
import type { GetMiscDistrict200ResponseResultsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "name": 北京市,
  "level": province,
  "country": 中国,
  "countryCode": CN,
  "province": 北京市,
  "city": 北京市,
  "district": 朝阳区,
  "street": 三里屯街道,
  "adcode": 110000,
  "citycode": 010,
  "center": null,
  "population": 8336599,
  "timezone": Asia/Tokyo,
} satisfies GetMiscDistrict200ResponseResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscDistrict200ResponseResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


