
# GetStatusRatelimit200Response


## Properties

Name | Type
------------ | -------------
`accepts` | number
`inFlight` | number
`lastUpdate` | string
`limit` | number
`load` | number
`minRtt` | number
`rejects` | number
`rtt` | number
`throttled` | number

## Example

```typescript
import type { GetStatusRatelimit200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "accepts": 10000,
  "inFlight": 10,
  "lastUpdate": 2023-10-27T10:00:00Z,
  "limit": 100,
  "load": 0.1,
  "minRtt": 20.1,
  "rejects": 50,
  "rtt": 50.5,
  "throttled": 120,
} satisfies GetStatusRatelimit200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatusRatelimit200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


