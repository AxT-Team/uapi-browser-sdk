
# GetSocialBilibiliVideoinfo200ResponseUgcSeason

合集信息。若视频不属于合集则为 null。

## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`cover` | string
`mid` | number
`intro` | string
`epCount` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseUgcSeason } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "id": 12345,
  "title": 系列视频合集,
  "cover": http://i0.hdslb.com/bfs/archive/....jpg,
  "mid": 483307278,
  "intro": 这是一个合集,
  "epCount": 12,
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


