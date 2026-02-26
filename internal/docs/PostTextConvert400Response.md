
# PostTextConvert400Response


## Properties

Name | Type
------------ | -------------
`errorCode` | string
`errorMessage` | string
`errorDetails` | string

## Example

```typescript
import type { PostTextConvert400Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "errorCode": CONVERSION_FAILED,
  "errorMessage": 不支持的源格式: unknown,
  "errorDetails": ,
} satisfies PostTextConvert400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextConvert400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


