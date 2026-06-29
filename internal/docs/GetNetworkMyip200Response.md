
# GetNetworkMyip200Response


## Properties

Name | Type
------------ | -------------
`asn` | string
`beginip` | string
`district` | string
`endip` | string
`ip` | string
`isp` | string
`latitude` | number
`llc` | string
`longitude` | number
`region` | string
`timeZone` | string

## Example

```typescript
import type { GetNetworkMyip200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "asn": AS9808,
  "beginip": 117.182.64.0,
  "district": 青秀区,
  "endip": 117.182.127.255,
  "ip": 117.182.103.101,
  "isp": China Mobile Communications Group Co., Ltd.,
  "latitude": 22.8111,
  "llc": 移动,
  "longitude": 108.3168,
  "region": 中国 广西 南宁市,
  "timeZone": Asia/Shanghai,
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


