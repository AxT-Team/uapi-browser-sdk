
# GetSocialBilibiliVideoinfo200ResponseStaffInner


## Properties

Name | Type
------------ | -------------
`mid` | number
`title` | string
`name` | string
`face` | string
`follower` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseStaffInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "mid": 111111,
  "title": UP主,
  "name": 某某,
  "face": http://i0.hdslb.com/bfs/face/....jpg,
  "follower": 100000,
} satisfies GetSocialBilibiliVideoinfo200ResponseStaffInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200ResponseStaffInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


