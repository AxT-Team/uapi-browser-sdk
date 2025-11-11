
# GetMiscPhoneinfo200Response


## Properties

Name | Type
------------ | -------------
`city` | string
`province` | string
`sp` | string

## Example

```typescript
import type { GetMiscPhoneinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "city": 深圳,
  "province": 广东,
  "sp": 联通,
} satisfies GetMiscPhoneinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscPhoneinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


