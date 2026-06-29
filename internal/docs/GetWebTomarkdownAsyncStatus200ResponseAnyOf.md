
# GetWebTomarkdownAsyncStatus200ResponseAnyOf


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`message` | string
`progress` | number
`status` | string
`taskId` | string
`url` | string

## Example

```typescript
import type { GetWebTomarkdownAsyncStatus200ResponseAnyOf } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2025-10-13T10:30:45.123456Z,
  "message": 任务等待处理,
  "progress": 0,
  "status": pending,
  "taskId": a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6,
  "url": https://example.com,
} satisfies GetWebTomarkdownAsyncStatus200ResponseAnyOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebTomarkdownAsyncStatus200ResponseAnyOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


