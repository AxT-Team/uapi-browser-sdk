
# PostWebTomarkdownAsync400Response


## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string
`code` | number

## Example

```typescript
import type { PostWebTomarkdownAsync400Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "error": 缺少参数,
  "message": url 参数是必需的,
  "code": 400,
} satisfies PostWebTomarkdownAsync400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWebTomarkdownAsync400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


