
# PostAiTranslate200Response


## Properties

Name | Type
------------ | -------------
`message` | string
`data` | [PostAiTranslate200ResponseData](PostAiTranslate200ResponseData.md)
`performance` | [PostAiTranslate200ResponsePerformance](PostAiTranslate200ResponsePerformance.md)
`isBatch` | boolean

## Example

```typescript
import type { PostAiTranslate200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "message": Translation completed successfully,
  "data": null,
  "performance": null,
  "isBatch": false,
} satisfies PostAiTranslate200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostAiTranslate200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


