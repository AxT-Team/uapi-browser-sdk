
# GetStatusUsage200Response


## Properties

Name | Type
------------ | -------------
`endpoints` | [Array&lt;GetStatusUsage200ResponseAnyOfEndpointsInner&gt;](GetStatusUsage200ResponseAnyOfEndpointsInner.md)
`unaggregated` | [GetStatusUsage200ResponseAnyOfUnaggregated](GetStatusUsage200ResponseAnyOfUnaggregated.md)
`count` | number
`path` | string

## Example

```typescript
import type { GetStatusUsage200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "endpoints": null,
  "unaggregated": null,
  "count": 22310,
  "path": /api/v1/image/motou,
} satisfies GetStatusUsage200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatusUsage200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


