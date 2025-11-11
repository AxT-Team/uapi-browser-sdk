
# PostImageSpeechlessRequest


## Properties

Name | Type
------------ | -------------
`topText` | string
`bottomText` | string

## Example

```typescript
import type { PostImageSpeechlessRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "topText": 玩Uapi,
  "bottomText": 们不要玩Uapi了,
} satisfies PostImageSpeechlessRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageSpeechlessRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


