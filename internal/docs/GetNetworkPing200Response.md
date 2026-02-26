
# GetNetworkPing200Response


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
import type { GetNetworkPing200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "avg": 1.25,
  "host": cn.bing.com,
  "ip": 142.250.191.78,
  "location": 美国,
  "max": 2.1,
  "min": 0.89,
} satisfies GetNetworkPing200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkPing200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


