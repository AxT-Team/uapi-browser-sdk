
# PostSensitiveWordQuickCheckRequest


## Properties

Name | Type
------------ | -------------
`text` | string

## Example

```typescript
import type { PostSensitiveWordQuickCheckRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "text": 这是一段友善的、不包含任何违禁词的文本。,
} satisfies PostSensitiveWordQuickCheckRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSensitiveWordQuickCheckRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


