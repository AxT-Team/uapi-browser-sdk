
# PostWatermarkProducerCode200Response


## Properties

Name | Type
------------ | -------------
`binding` | string
`code` | string
`identifier` | string
`modelCode` | string
`serviceExtension` | boolean
`serviceType` | string
`subjectCode` | string
`subjectType` | string
`valid` | boolean

## Example

```typescript
import type { PostWatermarkProducerCode200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "binding": phone,
  "code": null,
  "identifier": 13800138000,
  "modelCode": 0001,
  "serviceExtension": true,
  "serviceType": generation,
  "subjectCode": 138001380000000000,
  "subjectType": person,
  "valid": true,
} satisfies PostWatermarkProducerCode200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWatermarkProducerCode200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


