
# GetSocialBilibiliVideoinfo200ResponseUgcSeason

合集信息。若视频不属于合集则为 null。

## Properties

Name | Type
------------ | -------------
`cover` | string
`epCount` | number
`id` | number
`intro` | string
`mid` | number
`title` | string

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseUgcSeason } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "cover": http://i0.hdslb.com/bfs/archive/....jpg,
  "epCount": 12,
  "id": 12345,
  "intro": 这是一个合集,
  "mid": 483307278,
  "title": 系列视频合集,
} satisfies GetSocialBilibiliVideoinfo200ResponseUgcSeason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200ResponseUgcSeason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


