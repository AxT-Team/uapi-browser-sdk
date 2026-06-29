
# RandomAuthorinfo

作者扩展信息，部分语料返回。

## Properties

Name | Type
------------ | -------------
`bio` | string
`description` | string
`id` | string
`link` | string
`name` | string

## Example

```typescript
import type { RandomAuthorinfo } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "bio": 代表作包括《夏目友人帐》。,
  "description": 漫画作者,
  "id": natsume,
  "link": https://example.com/author/natsume,
  "name": 绿川幸,
} satisfies RandomAuthorinfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RandomAuthorinfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


