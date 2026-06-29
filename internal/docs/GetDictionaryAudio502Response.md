
# GetDictionaryAudio502Response


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { GetDictionaryAudio502Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": SERVICE_UNAVAILABLE,
  "message": 发音服务暂时不可用，请稍后重试,
} satisfies GetDictionaryAudio502Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDictionaryAudio502Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


