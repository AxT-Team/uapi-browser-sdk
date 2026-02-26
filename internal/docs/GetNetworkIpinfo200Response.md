
# GetNetworkIpinfo200Response


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
import type { GetNetworkIpinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "ip": 8.8.8.8,
  "region": 美国,
  "isp": GOOGLE,
  "llc": GOOGLE,
  "asn": AS15169,
  "latitude": 37.751,
  "longitude": -97.822,
  "beginip": 8.8.8.0,
  "endip": 8.8.8.255,
  "district": 龙岗区,
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


