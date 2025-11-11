
# GetWebTomarkdownAsyncStatus404Response


## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string
`code` | number

## Example

```typescript
import type { GetWebTomarkdownAsyncStatus404Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "error": 任务不存在,
  "message": 未找到指定的task_id，任务可能已过期（30分钟TTL）,
  "code": 404,
} satisfies GetWebTomarkdownAsyncStatus404Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebTomarkdownAsyncStatus404Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


