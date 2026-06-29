
# PostMiscDateDiffRequest


## Properties

Name | Type
------------ | -------------
`endDate` | string
`format` | string
`startDate` | string

## Example

```typescript
import type { PostMiscDateDiffRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "endDate": 2025-12-31,
  "format": YYYY-MM-DD,
  "startDate": 2025-01-01,
} satisfies PostMiscDateDiffRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostMiscDateDiffRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


