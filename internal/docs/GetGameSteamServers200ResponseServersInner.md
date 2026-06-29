
# GetGameSteamServers200ResponseServersInner


## Properties

Name | Type
------------ | -------------
`ip` | string
`map` | string
`maxPlayers` | number
`name` | string
`online` | boolean
`players` | number
`port` | number

## Example

```typescript
import type { GetGameSteamServers200ResponseServersInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "ip": 1.2.3.4,
  "map": Eden,
  "maxPlayers": 64,
  "name": [EU] SCUM Official #1,
  "online": true,
  "players": 30,
  "port": 28302,
} satisfies GetGameSteamServers200ResponseServersInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameSteamServers200ResponseServersInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


