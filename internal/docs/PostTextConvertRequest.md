
# PostTextConvertRequest


## Properties

Name | Type
------------ | -------------
`text` | string
`from` | string
`to` | string
`options` | { [key: string]: any; }

## Example

```typescript
import type { PostTextConvertRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "text": hello world,
  "from": plain,
  "to": base64,
  "options": null,
} satisfies PostTextConvertRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextConvertRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


