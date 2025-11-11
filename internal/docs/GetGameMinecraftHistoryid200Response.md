
# GetGameMinecraftHistoryid200Response


## Properties

Name | Type
------------ | -------------
`code` | number
`history` | [Array&lt;GetGameMinecraftHistoryid200ResponseHistoryInner&gt;](GetGameMinecraftHistoryid200ResponseHistoryInner.md)
`id` | string
`nameNum` | number
`uuid` | string

## Example

```typescript
import type { GetGameMinecraftHistoryid200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 200,
  "history": null,
  "id": Notch,
  "nameNum": 2,
  "uuid": ee9b4ed1aac1491eb7611471be374b80,
} satisfies GetGameMinecraftHistoryid200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftHistoryid200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


