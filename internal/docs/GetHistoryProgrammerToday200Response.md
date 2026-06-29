
# GetHistoryProgrammerToday200Response


## Properties

Name | Type
------------ | -------------
`date` | string
`events` | [Array&lt;GetHistoryProgrammerToday200ResponseEventsInner&gt;](GetHistoryProgrammerToday200ResponseEventsInner.md)
`message` | string

## Example

```typescript
import type { GetHistoryProgrammerToday200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "date": 04-04,
  "events": null,
  "message": 获取成功,
} satisfies GetHistoryProgrammerToday200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHistoryProgrammerToday200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


