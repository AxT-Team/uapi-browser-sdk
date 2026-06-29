
# PostTextConvert200Response


## Properties

Name | Type
------------ | -------------
`from` | string
`info` | string
`length` | number
`result` | string
`to` | string

## Example

```typescript
import type { PostTextConvert200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "from": plain,
  "info": 此转换为单向哈希，不可逆,
  "length": 16,
  "result": aGVsbG8gd29ybGQ=,
  "to": base64,
} satisfies PostTextConvert200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextConvert200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


