
# GetNetworkPingmyip200Response


## Properties

Name | Type
------------ | -------------
`avg` | number
`host` | string
`ip` | string
`location` | string
`max` | number
`min` | number

## Example

```typescript
import type { GetNetworkPingmyip200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "avg": 35.4,
  "host": 123.123.123.123,
  "ip": 123.123.123.123,
  "location": 中国 北京,
  "max": 40.1,
  "min": 32.8,
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


