
# GetNetworkDns200ResponseRecordsInner


## Properties

Name | Type
------------ | -------------
`content` | string
`flag` | number
`port` | number
`pri` | number
`tag` | string
`target` | string
`weight` | number

## Example

```typescript
import type { GetNetworkDns200ResponseRecordsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "content": v=spf1 ...,
  "flag": 0,
  "port": 443,
  "pri": 10,
  "tag": issue,
  "target": 1.2.3.4,
  "weight": 5,
} satisfies GetNetworkDns200ResponseRecordsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkDns200ResponseRecordsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


