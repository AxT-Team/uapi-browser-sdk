
# PostImageFrombase64Request


## Properties

Name | Type
------------ | -------------
`imageData` | string

## Example

```typescript
import type { PostImageFrombase64Request } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "imageData": data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=,
} satisfies PostImageFrombase64Request

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostImageFrombase64Request
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


