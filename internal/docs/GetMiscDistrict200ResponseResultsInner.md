
# GetMiscDistrict200ResponseResultsInner


## Properties

Name | Type
------------ | -------------
`adcode` | string
`center` | [GetMiscDistrict200ResponseResultsInnerCenter](GetMiscDistrict200ResponseResultsInnerCenter.md)
`city` | string
`citycode` | string
`country` | string
`countryCode` | string
`district` | string
`level` | string
`name` | string
`population` | number
`province` | string
`street` | string
`timezone` | string

## Example

```typescript
import type { GetMiscDistrict200ResponseResultsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "adcode": 110000,
  "center": null,
  "city": 北京市,
  "citycode": 010,
  "country": 中国,
  "countryCode": CN,
  "district": 朝阳区,
  "level": province,
  "name": 北京市,
  "population": 8336599,
  "province": 北京市,
  "street": 三里屯街道,
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


