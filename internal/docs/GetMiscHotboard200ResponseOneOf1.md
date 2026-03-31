
# GetMiscHotboard200ResponseOneOf1


## Properties

Name | Type
------------ | -------------
`type` | string
`keyword` | string
`count` | number
`results` | [Array&lt;GetMiscHotboard200ResponseOneOf1ResultsInner&gt;](GetMiscHotboard200ResponseOneOf1ResultsInner.md)

## Example

```typescript
import type { GetMiscHotboard200ResponseOneOf1 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "type": weibo,
  "keyword": AI,
  "count": 0,
  "results": null,
} satisfies GetMiscHotboard200ResponseOneOf1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHotboard200ResponseOneOf1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


