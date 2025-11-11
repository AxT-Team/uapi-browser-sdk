
# GetGameMinecraftServerstatus200Response


## Properties

Name | Type
------------ | -------------
`code` | number
`faviconUrl` | string
`ip` | string
`maxPlayers` | number
`motdClean` | string
`motdHtml` | string
`online` | boolean
`players` | number
`port` | number
`version` | string

## Example

```typescript
import type { GetGameMinecraftServerstatus200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 200,
  "faviconUrl": data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACayAAACqaXHeAAAA...,
  "ip": 172.65.252.238,
  "maxPlayers": 20000,
  "motdClean": Hypixel Network [1.8-1.20]
                                      SKYBLOCK,
  "motdHtml": <span style="color: #ffff55"><b>Hypixel Network </b></span><span style="color: #555555">[</span><span style="color: #aaaaaa">1.8-1.20</span><span style="color: #555555">]</span><br /><span style="color: #ffffff">                                      </span><span style="color: #55ff55"><b>SKYBLOCK</b></span>,
  "online": true,
  "players": 45321,
  "port": 25565,
  "version": Requires 1.8-1.20,
} satisfies GetGameMinecraftServerstatus200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameMinecraftServerstatus200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


