
# GetNetworkIpinfo200Response


## Properties

Name | Type
------------ | -------------
`asn` | string
`beginip` | string
`endip` | string
`ip` | string
`isp` | string
`latitude` | number
`llc` | string
`longitude` | number
`region` | string

## Example

```typescript
import type { GetNetworkIpinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "asn": AS15169,
  "beginip": 8.8.8.0,
  "endip": 8.8.8.255,
  "ip": 8.8.8.8,
  "isp": GOOGLE,
  "latitude": 37.751,
  "llc": GOOGLE,
  "longitude": -97.822,
  "region": 美国,
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


