
# PostMiscDateDiff200Response


## Properties

Name | Type
------------ | -------------
`days` | number
`hours` | number
`minutes` | number
`seconds` | number
`weeks` | number
`humanReadable` | string

## Example

```typescript
import type { PostMiscDateDiff200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "days": 364,
  "hours": 8736,
  "minutes": 524160,
  "seconds": 31449600,
  "weeks": 52,
  "humanReadable": 52周 0天,
} satisfies PostMiscDateDiff200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostMiscDateDiff200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


