
# EndpointsAggregate


## Properties

Name | Type
------------ | -------------
`endpoints` | [Array<EndpointsAggregateEndpointsInner>](EndpointsAggregateEndpointsInner.md)
`unaggregated` | [EndpointsAggregateUnaggregated](EndpointsAggregateUnaggregated.md)

## Example

```typescript
import type { EndpointsAggregate } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "endpoints": null,
  "unaggregated": null,
} satisfies EndpointsAggregate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EndpointsAggregate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


