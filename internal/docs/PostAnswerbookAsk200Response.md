
# PostAnswerbookAsk200Response


## Properties

Name | Type
------------ | -------------
`code` | number
`question` | string
`answer` | string

## Example

```typescript
import type { PostAnswerbookAsk200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 200,
  "question": 我应该接受这份工作吗？,
  "answer": 专注当下,
} satisfies PostAnswerbookAsk200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAnswerbookAsk200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


