
# GetSocialBilibiliVideoinfo200ResponseRights

视频权限开关（0 或 1）。

## Properties

Name | Type
------------ | -------------
`bp` | number
`elec` | number
`download` | number
`movie` | number
`pay` | number
`hd5` | number
`noReprint` | number
`autoplay` | number
`ugcPay` | number
`isCooperation` | number
`ugcPayPreview` | number
`noBackground` | number
`cleanMode` | number
`isSteinGate` | number
`is360` | number
`noShare` | number
`arcPay` | number
`freeWatch` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseRights } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "bp": 0,
  "elec": 1,
  "download": 1,
  "movie": 0,
  "pay": 0,
  "hd5": 0,
  "noReprint": 1,
  "autoplay": 1,
  "ugcPay": 0,
  "isCooperation": 0,
  "ugcPayPreview": 1,
  "noBackground": 0,
  "cleanMode": 0,
  "isSteinGate": 0,
  "is360": 0,
  "noShare": 0,
  "arcPay": 0,
  "freeWatch": 1,
} satisfies GetSocialBilibiliVideoinfo200ResponseRights

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliVideoinfo200ResponseRights
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


