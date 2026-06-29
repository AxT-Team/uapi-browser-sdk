
# GetMiscMovieBoxOffice503Response


## Properties

Name | Type
------------ | -------------
`code` | number
`message` | string

## Example

```typescript
import type { GetMiscMovieBoxOffice503Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 503,
  "message": 实时票房服务暂不可用，请稍后重试,
} satisfies GetMiscMovieBoxOffice503Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscMovieBoxOffice503Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


