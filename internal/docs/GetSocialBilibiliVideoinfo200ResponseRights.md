
# GetSocialBilibiliVideoinfo200ResponseRights

视频权限开关（0 或 1）。

## Properties

Name | Type
------------ | -------------
`arcPay` | number
`autoplay` | number
`bp` | number
`cleanMode` | number
`download` | number
`elec` | number
`freeWatch` | number
`hd5` | number
`is360` | number
`isCooperation` | number
`isSteinGate` | number
`movie` | number
`noBackground` | number
`noReprint` | number
`noShare` | number
`pay` | number
`ugcPay` | number
`ugcPayPreview` | number

## Example

```typescript
import type { GetSocialBilibiliVideoinfo200ResponseRights } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "arcPay": 0,
  "autoplay": 1,
  "bp": 0,
  "cleanMode": 0,
  "download": 1,
  "elec": 1,
  "freeWatch": 1,
  "hd5": 0,
  "is360": 0,
  "isCooperation": 0,
  "isSteinGate": 0,
  "movie": 0,
  "noBackground": 0,
  "noReprint": 1,
  "noShare": 0,
  "pay": 0,
  "ugcPay": 0,
  "ugcPayPreview": 1,
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


