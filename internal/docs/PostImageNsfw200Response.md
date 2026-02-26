
# PostImageNsfw200Response


## Properties

Name | Type
------------ | -------------
`nsfwScore` | number
`normalScore` | number
`isNsfw` | boolean
`label` | string
`suggestion` | string
`riskLevel` | string
`confidence` | number
`inferenceTimeMs` | number

## Example

```typescript
import type { PostImageNsfw200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "nsfwScore": 0.05,
  "normalScore": 0.95,
  "isNsfw": false,
  "label": normal,
  "suggestion": pass,
  "riskLevel": low,
  "confidence": 0.95,
  "inferenceTimeMs": 156,
} satisfies PostImageNsfw200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageNsfw200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


