
# PostWatermarkProducerCodeRequest


## Properties

Name | Type
------------ | -------------
`binding` | string
`code` | string
`identifier` | string
`modelCode` | string
`serviceType` | string
`subjectType` | string

## Example

```typescript
import type { PostWatermarkProducerCodeRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "binding": phone,
  "code": null,
  "identifier": 13800138000,
  "modelCode": 0001,
  "serviceType": generation,
  "subjectType": person,
} satisfies PostWatermarkProducerCodeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWatermarkProducerCodeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


