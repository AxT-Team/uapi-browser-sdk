
# PostSearchAggregate200ResponseSourcesInner


## Properties

Name | Type
------------ | -------------
`name` | string
`status` | string
`resultCount` | number
`elapsedMs` | number
`firstResultHost` | string

## Example

```typescript
import type { PostSearchAggregate200ResponseSourcesInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "name": uapi-search,
  "status": success,
  "resultCount": 16,
  "elapsedMs": 1256,
  "firstResultHost": help.aliyun.com,
} satisfies PostSearchAggregate200ResponseSourcesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchAggregate200ResponseSourcesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


