
# GetSocialBilibiliReplies200Response


## Properties

Name | Type
------------ | -------------
`page` | [GetSocialBilibiliReplies200ResponsePage](GetSocialBilibiliReplies200ResponsePage.md)
`config` | object
`hots` | Array&lt;object&gt;
`replies` | [Array&lt;GetSocialBilibiliReplies200ResponseRepliesInner&gt;](GetSocialBilibiliReplies200ResponseRepliesInner.md)
`upper` | object
`top` | object
`notice` | object
`vote` | number
`folder` | object
`control` | object
`cursor` | object

## Example

```typescript
import type { GetSocialBilibiliReplies200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "config": null,
  "hots": null,
  "replies": null,
  "upper": null,
  "top": null,
  "notice": null,
  "vote": 0,
  "folder": null,
  "control": null,
  "cursor": null,
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


