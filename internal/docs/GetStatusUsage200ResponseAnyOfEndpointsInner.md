
# GetStatusUsage200ResponseAnyOfEndpointsInner


## Properties

Name | Type
------------ | -------------
`path` | string
`count` | number

## Example

```typescript
import type { GetStatusUsage200ResponseAnyOfEndpointsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "path": /api/v1/text/profanitycheck,
  "count": 2580791,
} satisfies GetStatusUsage200ResponseAnyOfEndpointsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatusUsage200ResponseAnyOfEndpointsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


