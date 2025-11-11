
# GetNetworkWxdomain200Response


## Properties

Name | Type
------------ | -------------
`domain` | string
`title` | string
`type` | string

## Example

```typescript
import type { GetNetworkWxdomain200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "domain": qq.com,
  "title": 该网站可以正常访问,
  "type": 1,
} satisfies GetNetworkWxdomain200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkWxdomain200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


