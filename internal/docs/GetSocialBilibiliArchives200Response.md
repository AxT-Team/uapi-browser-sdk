
# GetSocialBilibiliArchives200Response


## Properties

Name | Type
------------ | -------------
`total` | number
`page` | number
`size` | number
`videos` | [Array&lt;GetSocialBilibiliArchives200ResponseVideosInner&gt;](GetSocialBilibiliArchives200ResponseVideosInner.md)

## Example

```typescript
import type { GetSocialBilibiliArchives200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "total": 26,
  "page": 1,
  "size": 20,
  "videos": null,
} satisfies GetSocialBilibiliArchives200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliArchives200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


