
# GetGameMinecraftVersion200Response


## Properties

Name | Type
------------ | -------------
`latest` | [GetGameMinecraftVersion200ResponseLatest](GetGameMinecraftVersion200ResponseLatest.md)
`versions` | [Array&lt;GetGameMinecraftVersion200ResponseVersionsInner&gt;](GetGameMinecraftVersion200ResponseVersionsInner.md)

## Example

```typescript
import type { GetGameMinecraftVersion200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "latest": null,
  "versions": null,
} satisfies GetGameMinecraftVersion200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftVersion200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


