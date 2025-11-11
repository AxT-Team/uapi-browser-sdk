
# GetSocialBilibiliUserinfo200ResponseData


## Properties

Name | Type
------------ | -------------
`face` | string
`level` | number
`mid` | number
`name` | string
`sex` | string
`sign` | string

## Example

```typescript
import type { GetSocialBilibiliUserinfo200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "face": http://i0.hdslb.com/bfs/face/....jpg,
  "level": 6,
  "mid": 2,
  "name": bishi,
  "sex": 保密,
  "sign": 嗶哩嗶哩 - ( ゜- ゜)つロ 乾杯~,
} satisfies GetSocialBilibiliUserinfo200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSocialBilibiliUserinfo200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


