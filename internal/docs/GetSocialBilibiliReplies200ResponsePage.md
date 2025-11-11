
# GetSocialBilibiliReplies200ResponsePage

分页信息概览。

## Properties

Name | Type
------------ | -------------
`num` | number
`size` | number
`count` | number
`acount` | number

## Example

```typescript
import type { GetSocialBilibiliReplies200ResponsePage } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "num": 1,
  "size": 5,
  "count": 81682,
  "acount": 123456,
} satisfies GetSocialBilibiliReplies200ResponsePage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliReplies200ResponsePage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


