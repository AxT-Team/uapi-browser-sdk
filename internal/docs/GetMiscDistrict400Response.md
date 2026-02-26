
# GetMiscDistrict400Response


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { GetMiscDistrict400Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": INVALID_PARAMETER,
  "message": invalid 'level' parameter, must be one of: province, city, district, street,
} satisfies GetMiscDistrict400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscDistrict400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


