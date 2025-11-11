
# GetNetworkWxdomain502Response


## Properties

Name | Type
------------ | -------------
`code` | string
`details` | object
`message` | string

## Example

```typescript
import type { GetNetworkWxdomain502Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": UPSTREAM_ERROR,
  "details": null,
  "message": Failed to query upstream service for WeChat domain status.,
} satisfies GetNetworkWxdomain502Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkWxdomain502Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


