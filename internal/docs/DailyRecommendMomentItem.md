
# DailyRecommendMomentItem

语录本体。

## Properties

Name | Type
------------ | -------------
`author` | string
`authorinfo` | [RandomAuthorinfo](RandomAuthorinfo.md)
`category` | string
`content` | string
`contentLength` | number
`corpus` | string
`createdAt` | string
`matchedTags` | Array&lt;string&gt;
`source` | string
`uuid` | string

## Example

```typescript
import type { DailyRecommendMomentItem } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "author": 绿川幸,
  "authorinfo": null,
  "category": 动画,
  "content": 无论多么微小的邂逅，都必定有着某种意义。,
  "contentLength": 21,
  "corpus": sentences-bundle,
  "createdAt": 1675500151,
  "matchedTags": ["治愈","温柔"],
  "source": 夏目友人帐,
  "uuid": dfs-5d3627b262f01db19ddf29d0c8d94828,
} satisfies DailyRecommendMomentItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DailyRecommendMomentItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


