
# GetGameSteamServers200Response


## Properties

Name | Type
------------ | -------------
`appid` | number
`count` | number
`query` | string
`servers` | [Array&lt;GetGameSteamServers200ResponseServersInner&gt;](GetGameSteamServers200ResponseServersInner.md)

## Example

```typescript
import type { GetGameSteamServers200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "appid": 513710,
  "count": 3,
  "query": SCUM,
  "servers": null,
} satisfies GetGameSteamServers200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameSteamServers200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


