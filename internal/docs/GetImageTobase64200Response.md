
# GetImageTobase64200Response


## Properties

Name | Type
------------ | -------------
`base64` | string
`code` | number
`msg` | string

## Example

```typescript
import type { GetImageTobase64200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "base64": data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=,
  "code": 200,
  "msg": success,
} satisfies GetImageTobase64200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetImageTobase64200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


