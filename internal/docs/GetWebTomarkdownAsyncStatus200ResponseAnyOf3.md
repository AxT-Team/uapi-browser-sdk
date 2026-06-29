
# GetWebTomarkdownAsyncStatus200ResponseAnyOf3


## Properties

Name | Type
------------ | -------------
`completedAt` | string
`createdAt` | string
`duration` | number
`error` | string
`progress` | number
`startedAt` | string
`status` | string
`taskId` | string
`url` | string

## Example

```typescript
import type { GetWebTomarkdownAsyncStatus200ResponseAnyOf3 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "completedAt": 2025-10-13T10:30:48.000000Z,
  "createdAt": 2025-10-13T10:30:45.123456Z,
  "duration": 2,
  "error": 网络连接失败: connection timeout,
  "progress": 100,
  "startedAt": 2025-10-13T10:30:46.000000Z,
  "status": failed,
  "taskId": a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6,
  "url": https://example.com,
} satisfies GetWebTomarkdownAsyncStatus200ResponseAnyOf3

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebTomarkdownAsyncStatus200ResponseAnyOf3
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


