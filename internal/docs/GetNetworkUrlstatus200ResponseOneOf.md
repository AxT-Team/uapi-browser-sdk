
# GetNetworkUrlstatus200ResponseOneOf

当目标 URL 可访问时，`status` 为目标返回的 HTTP 状态码（如 `200`）。

## Properties

Name | Type
------------ | -------------
`status` | number
`url` | string

## Example

```typescript
import type { GetNetworkUrlstatus200ResponseOneOf } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "status": 200,
  "url": https://www.google.com,
} satisfies GetNetworkUrlstatus200ResponseOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkUrlstatus200ResponseOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


