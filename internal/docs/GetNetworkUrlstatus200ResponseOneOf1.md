
# GetNetworkUrlstatus200ResponseOneOf1

当目标 URL 不可达或请求失败（如 DNS 失败、超时、连接失败）时，`status` 为 `0`。

## Properties

Name | Type
------------ | -------------
`status` | number
`url` | string

## Example

```typescript
import type { GetNetworkUrlstatus200ResponseOneOf1 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "status": 0,
  "url": https://example.invalid,
} satisfies GetNetworkUrlstatus200ResponseOneOf1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkUrlstatus200ResponseOneOf1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


