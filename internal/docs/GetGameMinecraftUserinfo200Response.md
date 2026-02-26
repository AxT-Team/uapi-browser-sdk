
# GetGameMinecraftUserinfo200Response


## Properties

Name | Type
------------ | -------------
`skinUrl` | string
`username` | string
`uuid` | string

## Example

```typescript
import type { GetGameMinecraftUserinfo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "skinUrl": http://textures.minecraft.net/texture/292009a499420915b854a9913d9fa92750175814529452a55982791844863f53,
  "username": Notch,
  "uuid": ee9b4ed1aac1491eb7611471be374b80,
} satisfies GetGameMinecraftUserinfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftUserinfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


