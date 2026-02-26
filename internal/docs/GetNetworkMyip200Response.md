
# GetNetworkMyip200Response


## Properties

Name | Type
------------ | -------------
`ip` | string
`region` | string
`isp` | string
`llc` | string
`asn` | string
`latitude` | number
`longitude` | number
`beginip` | string
`endip` | string
`district` | string

## Example

```typescript
import type { GetNetworkMyip200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "ip": 117.182.103.101,
  "region": 中国 广西 南宁市,
  "isp": China Mobile Communications Group Co., Ltd.,
  "llc": 移动,
  "asn": AS9808,
  "latitude": 22.8111,
  "longitude": 108.3168,
  "beginip": 117.182.64.0,
  "endip": 117.182.127.255,
  "district": 青秀区,
} satisfies GetNetworkMyip200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkMyip200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


