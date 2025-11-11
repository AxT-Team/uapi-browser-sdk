
# GetAiTranslateLanguages200Response


## Properties

Name | Type
------------ | -------------
`code` | number
`message` | string
`data` | [GetAiTranslateLanguages200ResponseData](GetAiTranslateLanguages200ResponseData.md)
`performance` | [GetAiTranslateLanguages200ResponsePerformance](GetAiTranslateLanguages200ResponsePerformance.md)

## Example

```typescript
import type { GetAiTranslateLanguages200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 200,
  "message": Supported languages retrieved successfully,
  "data": null,
  "performance": null,
} satisfies GetAiTranslateLanguages200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAiTranslateLanguages200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


