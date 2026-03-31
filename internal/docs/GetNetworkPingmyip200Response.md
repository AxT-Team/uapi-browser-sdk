
# GetNetworkPingmyip200Response


## Properties

Name | Type
------------ | -------------
`clientIp` | string
`pingSuccessful` | boolean
`message` | string

## Example

```typescript
import type { GetNetworkPingmyip200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "clientIp": 117.140.191.159,
  "pingSuccessful": true,
  "message": Ping successful, avg latency: 35.43 ms,
} satisfies GetNetworkPingmyip200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkPingmyip200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


