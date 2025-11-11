
# GetMiscHotboard200Response


## Properties

Name | Type
------------ | -------------
`list` | [Array&lt;GetMiscHotboard200ResponseListInner&gt;](GetMiscHotboard200ResponseListInner.md)
`type` | string
`updateTime` | string

## Example

```typescript
import type { GetMiscHotboard200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "list": null,
  "type": weibo,
  "updateTime": 2023-10-27 12:00:00,
} satisfies GetMiscHotboard200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHotboard200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


