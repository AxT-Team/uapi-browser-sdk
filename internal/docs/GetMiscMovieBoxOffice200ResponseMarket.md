
# GetMiscMovieBoxOffice200ResponseMarket

实时大盘汇总数据

## Properties

Name | Type
------------ | -------------
`boxOffice` | string
`showCount` | string
`splitBoxOffice` | string
`viewCount` | string

## Example

```typescript
import type { GetMiscMovieBoxOffice200ResponseMarket } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "boxOffice": 1232.7万,
  "showCount": 37.0万,
  "splitBoxOffice": 1232.7万,
  "viewCount": 35.0万,
} satisfies GetMiscMovieBoxOffice200ResponseMarket

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscMovieBoxOffice200ResponseMarket
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


