
# GetMiscHotboard200ResponseOneOf


## Properties

Name | Type
------------ | -------------
`list` | [Array&lt;GetMiscHotboard200ResponseOneOfListInner&gt;](GetMiscHotboard200ResponseOneOfListInner.md)
`snapshotTime` | number
`type` | string
`updateTime` | string

## Example

```typescript
import type { GetMiscHotboard200ResponseOneOf } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "list": null,
  "snapshotTime": 1700000000000,
  "type": weibo,
  "updateTime": 2026-03-20 21:39:16,
} satisfies GetMiscHotboard200ResponseOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHotboard200ResponseOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


