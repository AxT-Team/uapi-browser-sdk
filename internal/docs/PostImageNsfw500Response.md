
# PostImageNsfw500Response


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { PostImageNsfw500Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": INTERNAL_SERVER_ERROR,
  "message": NSFW检测服务暂时不可用,
} satisfies PostImageNsfw500Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageNsfw500Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


