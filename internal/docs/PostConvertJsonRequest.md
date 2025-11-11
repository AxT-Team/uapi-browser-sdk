
# PostConvertJsonRequest


## Properties

Name | Type
------------ | -------------
`content` | string

## Example

```typescript
import type { PostConvertJsonRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "content": {"name":"John Doe","age":30,"isStudent":false,"courses":[{"title":"History","credits":3},{"title":"Math","credits":4}]},
} satisfies PostConvertJsonRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostConvertJsonRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


