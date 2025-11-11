
# GetNetworkIpinfo200Response


## Properties

Name | Type
------------ | -------------
`asn` | string
`beginip` | string
`code` | number
`endip` | string
`ip` | string
`isp` | string
`latitude` | number
`llc` | string
`longitude` | number
`region` | string
`district` | string
`areaCode` | string
`cityCode` | string
`zipCode` | string
`timeZone` | string
`scenes` | string
`elevation` | string
`weatherStation` | string

## Example

```typescript
import type { GetNetworkIpinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "asn": AS15169,
  "beginip": 8.8.8.0,
  "code": 200,
  "endip": 8.8.8.255,
  "ip": 8.8.8.8,
  "isp": Google,
  "latitude": 37.386,
  "llc": Google LLC,
  "longitude": -122.0838,
  "region": 美国 加利福尼亚州 圣克拉拉县,
  "district": 临桂,
  "areaCode": 450312,
  "cityCode": 0773,
  "zipCode": 541100,
  "timeZone": Asia/Shanghai,
  "scenes": 企业数据,
  "elevation": 155,
  "weatherStation": CHXX0434,
} satisfies GetNetworkIpinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkIpinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


