
# GetSocialBilibiliReplies200Response


## Properties

Name | Type
------------ | -------------
`config` | object
`control` | object
`cursor` | object
`folder` | object
`hots` | Array&lt;object&gt;
`notice` | object
`page` | [GetSocialBilibiliReplies200ResponsePage](GetSocialBilibiliReplies200ResponsePage.md)
`replies` | [Array&lt;GetSocialBilibiliReplies200ResponseRepliesInner&gt;](GetSocialBilibiliReplies200ResponseRepliesInner.md)
`top` | object
`upper` | object
`vote` | number

## Example

```typescript
import type { GetSocialBilibiliReplies200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "config": null,
  "control": null,
  "cursor": null,
  "folder": null,
  "hots": null,
  "notice": null,
  "page": null,
  "replies": null,
  "top": null,
  "upper": null,
  "vote": 0,
} satisfies GetSocialBilibiliReplies200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliReplies200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


