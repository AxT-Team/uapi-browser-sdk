
# GetGameMinecraftHistoryid200ResponseResultsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`uuid` | string
`nameNum` | number
`history` | [Array&lt;GetGameMinecraftHistoryid200ResponseResultsInnerHistoryInner&gt;](GetGameMinecraftHistoryid200ResponseResultsInnerHistoryInner.md)

## Example

```typescript
import type { GetGameMinecraftHistoryid200ResponseResultsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "id": ExamplePlayer,
  "uuid": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "nameNum": 1,
  "history": null,
} satisfies GetGameMinecraftHistoryid200ResponseResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftHistoryid200ResponseResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


