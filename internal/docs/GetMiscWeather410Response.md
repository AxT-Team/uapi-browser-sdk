
# GetMiscWeather410Response


## Properties

Name | Type
------------ | -------------
`code` | string
`details` | object
`message` | string

## Example

```typescript
import type { GetMiscWeather410Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": GONE,
  "details": null,
  "message": The requested region is invalid or no longer available.,
} satisfies GetMiscWeather410Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather410Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


