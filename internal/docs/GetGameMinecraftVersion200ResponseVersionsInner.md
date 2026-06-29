
# GetGameMinecraftVersion200ResponseVersionsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`releaseTime` | string
`type` | string

## Example

```typescript
import type { GetGameMinecraftVersion200ResponseVersionsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "id": 1.21.5,
  "releaseTime": 2025-03-25T10:00:00+00:00,
  "type": release,
} satisfies GetGameMinecraftVersion200ResponseVersionsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftVersion200ResponseVersionsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


