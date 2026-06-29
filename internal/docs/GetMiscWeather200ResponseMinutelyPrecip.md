
# GetMiscWeather200ResponseMinutelyPrecip

分钟级降水预报（minutely=true 时返回，仅国内城市可用，精确到2分钟）

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;GetMiscWeather200ResponseMinutelyPrecipDataInner&gt;](GetMiscWeather200ResponseMinutelyPrecipDataInner.md)
`summary` | string
`updateTime` | string

## Example

```typescript
import type { GetMiscWeather200ResponseMinutelyPrecip } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "summary": 未来2小时无降水,
  "updateTime": 2026-02-19T15:30:00+08:00,
} satisfies GetMiscWeather200ResponseMinutelyPrecip

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscWeather200ResponseMinutelyPrecip
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


