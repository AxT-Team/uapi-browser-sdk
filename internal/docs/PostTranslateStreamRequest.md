
# PostTranslateStreamRequest


## Properties

Name | Type
------------ | -------------
`query` | string
`toLang` | string
`fromLang` | string
`tone` | string

## Example

```typescript
import type { PostTranslateStreamRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "query": Hello, how are you?,
  "toLang": 中文,
  "fromLang": 英文,
  "tone": ,
} satisfies PostTranslateStreamRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTranslateStreamRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


