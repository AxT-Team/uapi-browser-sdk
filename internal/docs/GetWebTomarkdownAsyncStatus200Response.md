
# GetWebTomarkdownAsyncStatus200Response


## Properties

Name | Type
------------ | -------------
`taskId` | string
`status` | string
`url` | string
`progress` | number
`createdAt` | string
`message` | string
`startedAt` | string
`elapsed` | number
`completedAt` | string
`duration` | number
`result` | [GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result](GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result.md)
`error` | string

## Example

```typescript
import type { GetWebTomarkdownAsyncStatus200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "taskId": a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6,
  "status": failed,
  "url": https://example.com,
  "progress": 100,
  "createdAt": 2025-10-13T10:30:45.123456Z,
  "message": 任务处理中，请继续轮询,
  "startedAt": 2025-10-13T10:30:46.000000Z,
  "elapsed": 2.5,
  "completedAt": 2025-10-13T10:30:48.000000Z,
  "duration": 2,
  "result": null,
  "error": 网络连接失败: connection timeout,
} satisfies GetWebTomarkdownAsyncStatus200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebTomarkdownAsyncStatus200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


