
# GetGameSteamSummary200Response


## Properties

Name | Type
------------ | -------------
`avatar` | string
`avatarfull` | string
`avatarmedium` | string
`communityvisibilitystate` | number
`loccountrycode` | string
`personaname` | string
`personastate` | number
`primaryclanid` | string
`profilestate` | number
`profileurl` | string
`realname` | string
`steamid` | string
`timecreated` | number
`timecreatedStr` | string

## Example

```typescript
import type { GetGameSteamSummary200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "avatar": https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg,
  "avatarfull": https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg,
  "avatarmedium": https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg,
  "communityvisibilitystate": 3,
  "loccountrycode": US,
  "personaname": Gabe Newell,
  "personastate": 1,
  "primaryclanid": 103582791429521412,
  "profilestate": 1,
  "profileurl": https://steamcommunity.com/id/gabelogannewell/,
  "realname": Gabe Logan Newell,
  "steamid": 76561197960435530,
  "timecreated": 1063407589,
  "timecreatedStr": 2003-09-12 22:59:49,
} satisfies GetGameSteamSummary200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameSteamSummary200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


