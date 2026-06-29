
# GetGameMinecraftMods200ResponseResultsInner


## Properties

Name | Type
------------ | -------------
`author` | string
`description` | string
`downloadUrl` | string
`downloads` | number
`name` | string
`source` | string
`url` | string

## Example

```typescript
import type { GetGameMinecraftMods200ResponseResultsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "author": jellysquid3,
  "description": A modern rendering engine for Minecraft.,
  "downloadUrl": https://cdn.modrinth.com/data/...,
  "downloads": 25000000,
  "name": Sodium,
  "source": modrinth,
  "url": https://modrinth.com/mod/sodium,
} satisfies GetGameMinecraftMods200ResponseResultsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftMods200ResponseResultsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


