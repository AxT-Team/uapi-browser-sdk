
# GetStatusUsage200ResponseAnyOf

查询所有端点时返回的聚合统计数据

## Properties

Name | Type
------------ | -------------
`endpoints` | [Array&lt;GetStatusUsage200ResponseAnyOfEndpointsInner&gt;](GetStatusUsage200ResponseAnyOfEndpointsInner.md)
`unaggregated` | [GetStatusUsage200ResponseAnyOfUnaggregated](GetStatusUsage200ResponseAnyOfUnaggregated.md)

## Example

```typescript
import type { GetStatusUsage200ResponseAnyOf } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "endpoints": null,
  "unaggregated": null,
} satisfies GetStatusUsage200ResponseAnyOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatusUsage200ResponseAnyOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


