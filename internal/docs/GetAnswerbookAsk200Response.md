
# GetAnswerbookAsk200Response


## Properties

Name | Type
------------ | -------------
`answer` | string
`question` | string

## Example

```typescript
import type { GetAnswerbookAsk200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "answer": 一切都会好起来,
  "question": 我今天会有好运吗？,
} satisfies GetAnswerbookAsk200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAnswerbookAsk200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


