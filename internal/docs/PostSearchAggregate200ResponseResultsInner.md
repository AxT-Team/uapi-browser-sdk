
# PostSearchAggregate200ResponseResultsInner


## Properties

Name | Type
------------ | -------------
`title` | string
`url` | string
`snippet` | string
`domain` | string
`source` | string
`position` | number
`score` | number
`publishTime` | Date

## Example

```typescript
import type { PostSearchAggregate200ResponseResultsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "title": Go 1.26 正式发布,
  "url": https://go.dev/blog/go1.26,
  "snippet": 2026年2月10日，Go 团队正式发布了 Go 1.26 版本。,
  "domain": go.dev,
  "source": uapi-searchv1,
  "position": 1,
  "score": 0.93,
  "publishTime": 2026-02-10T00:00Z,
} satisfies PostSearchAggregate200ResponseResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregate200ResponseResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


