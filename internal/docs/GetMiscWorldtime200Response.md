
# GetMiscWorldtime200Response


## Properties

Name | Type
------------ | -------------
`datetime` | string
`offsetSeconds` | number
`offsetString` | string
`query` | string
`timestampUnix` | number
`timezone` | string
`weekday` | string

## Example

```typescript
import type { GetMiscWorldtime200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "datetime": 2023-10-27T15:30:00.123456+08:00,
  "offsetSeconds": 28800,
  "offsetString": +08:00,
  "query": Shanghai,
  "timestampUnix": 1698391800,
  "timezone": Asia/Shanghai,
  "weekday": Friday,
} satisfies GetMiscWorldtime200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWorldtime200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


