
# GetGameMinecraftMods200Response


## Properties

Name | Type
------------ | -------------
`count` | number
`query` | string
`results` | [Array&lt;GetGameMinecraftMods200ResponseResultsInner&gt;](GetGameMinecraftMods200ResponseResultsInner.md)
`source` | string

## Example

```typescript
import type { GetGameMinecraftMods200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "count": 12,
  "query": sodium,
  "results": null,
  "source": all,
} satisfies GetGameMinecraftMods200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftMods200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


