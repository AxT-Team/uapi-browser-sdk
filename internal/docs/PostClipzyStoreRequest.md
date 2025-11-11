
# PostClipzyStoreRequest


## Properties

Name | Type
------------ | -------------
`compressedData` | string
`ttl` | number

## Example

```typescript
import type { PostClipzyStoreRequest } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "compressedData": PIZQqgLgUgNg6gEQEYAUCuBrA7gSQBoDMAiigPakCOAYgQIYBKEA7AFbABqAEiAJYBmAYSJUAznHbsAcgBMBAFQDSAegCcALz4BZKHDwql9DADtOCqvQCCATQowAWhgVgYAUwBMAFgC8QA==,
  "ttl": 3600,
} satisfies PostClipzyStoreRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostClipzyStoreRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


