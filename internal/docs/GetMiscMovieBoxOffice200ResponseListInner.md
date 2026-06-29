
# GetMiscMovieBoxOffice200ResponseListInner


## Properties

Name | Type
------------ | -------------
`avgSeatView` | string
`avgShowView` | string
`boxOffice` | string
`boxOfficeRate` | string
`detailUrl` | string
`movieId` | number
`movieName` | string
`rank` | number
`releaseDays` | number
`releaseInfo` | string
`releaseStatus` | string
`showCount` | number
`showCountRate` | string
`splitBoxOffice` | string
`splitBoxOfficeRate` | string
`sumBoxOffice` | string
`sumSplitBoxOffice` | string

## Example

```typescript
import type { GetMiscMovieBoxOffice200ResponseListInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "avgSeatView": 0.8%,
  "avgShowView": 1.2,
  "boxOffice": 444.67万,
  "boxOfficeRate": 36.0%,
  "detailUrl": https://piaofang.maoyan.com/movie/1528954,
  "movieId": 1528954,
  "movieName": 消失的人,
  "rank": 1,
  "releaseDays": 6,
  "releaseInfo": 上映6天,
  "releaseStatus": released,
  "showCount": 106532,
  "showCountRate": 28.8%,
  "splitBoxOffice": 387.67万,
  "splitBoxOfficeRate": 35.6%,
  "sumBoxOffice": 2.69亿,
  "sumSplitBoxOffice": 2.35亿,
} satisfies GetMiscMovieBoxOffice200ResponseListInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscMovieBoxOffice200ResponseListInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


