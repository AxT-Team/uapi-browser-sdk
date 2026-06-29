
# PostImageNsfw200Response


## Properties

Name | Type
------------ | -------------
`confidence` | number
`inferenceTimeMs` | number
`isNsfw` | boolean
`label` | string
`normalScore` | number
`nsfwScore` | number
`riskLevel` | string
`suggestion` | string

## Example

```typescript
import type { PostImageNsfw200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "confidence": 0.95,
  "inferenceTimeMs": 156,
  "isNsfw": false,
  "label": normal,
  "normalScore": 0.95,
  "nsfwScore": 0.05,
  "riskLevel": low,
  "suggestion": pass,
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


