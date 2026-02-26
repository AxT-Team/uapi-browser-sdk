
# GetNetworkPortscan200Response


## Properties

Name | Type
------------ | -------------
`ip` | string
`port` | number
`portStatus` | string
`protocol` | string

## Example

```typescript
import type { GetNetworkPortscan200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "ip": 1.2.3.4,
  "port": 80,
  "portStatus": open,
  "protocol": tcp,
} satisfies GetNetworkPortscan200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkPortscan200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


