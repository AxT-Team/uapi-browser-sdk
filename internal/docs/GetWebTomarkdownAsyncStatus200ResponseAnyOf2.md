
# GetWebTomarkdownAsyncStatus200ResponseAnyOf2


## Properties

Name | Type
------------ | -------------
`taskId` | string
`status` | string
`url` | string
`progress` | number
`createdAt` | string
`startedAt` | string
`completedAt` | string
`duration` | number
`result` | [GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result](GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result.md)

## Example

```typescript
import type { GetWebTomarkdownAsyncStatus200ResponseAnyOf2 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "taskId": a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6,
  "status": completed,
  "url": https://example.com,
  "progress": 100,
  "createdAt": 2025-10-13T10:30:45.123456Z,
  "startedAt": 2025-10-13T10:30:46.000000Z,
  "completedAt": 2025-10-13T10:30:48.500000Z,
  "duration": 2.5,
  "result": null,
} satisfies GetWebTomarkdownAsyncStatus200ResponseAnyOf2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebTomarkdownAsyncStatus200ResponseAnyOf2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


