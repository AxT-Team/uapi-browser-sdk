
# GetGithubUser400ResponseOneOf1


## Properties

Name | Type
------------ | -------------
`code` | string
`error` | string

## Example

```typescript
import type { GetGithubUser400ResponseOneOf1 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": INVALID_PARAMETER,
  "error": activity_scope 只能传 all 或 organization,
} satisfies GetGithubUser400ResponseOneOf1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser400ResponseOneOf1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


