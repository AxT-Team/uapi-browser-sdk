
# GetGithubUser404Response


## Properties

Name | Type
------------ | -------------
`code` | string
`error` | string

## Example

```typescript
import type { GetGithubUser404Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": USER_NOT_FOUND,
  "error": 未找到对应的 GitHub 用户,
} satisfies GetGithubUser404Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser404Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


