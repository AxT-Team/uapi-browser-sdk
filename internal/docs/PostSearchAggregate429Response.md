
# PostSearchAggregate429Response


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string
`timestamp` | Date

## Example

```typescript
import type { PostSearchAggregate429Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": RATE_LIMIT_EXCEEDED,
  "message": 请求过于频繁，请稍后重试,
  "timestamp": 2024-01-15T10:30Z,
} satisfies PostSearchAggregate429Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregate429Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


