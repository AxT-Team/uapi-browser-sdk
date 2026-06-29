
# GetSocialBilibiliVideoinfo200ResponsePagesInner


## Properties

Name | Type
------------ | -------------
`cid` | number
`dimension` | [GetSocialBilibiliVideoinfo200ResponsePagesInnerDimension](GetSocialBilibiliVideoinfo200ResponsePagesInnerDimension.md)
`duration` | number
`from` | string
`page` | number
`part` | string
`vid` | string
`weblink` | string

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponsePagesInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "cid": 130283995,
  "dimension": null,
  "duration": 213,
  "from": vupload,
  "page": 1,
  "part": 【官方MV】Rick Astley - Never Gonna Give You Up,
  "vid": ,
  "weblink": ,
} satisfies GetSocialBilibiliVideoinfo200ResponsePagesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200ResponsePagesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


