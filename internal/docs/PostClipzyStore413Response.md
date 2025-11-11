
# PostClipzyStore413Response


## Properties

Name | Type
------------ | -------------
`error` | string
`details` | string

## Example

```typescript
import type { PostClipzyStore413Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "error": Payload too large.,
  "details": Data exceeds the 8MB limit for the given TTL.,
} satisfies PostClipzyStore413Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostClipzyStore413Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


