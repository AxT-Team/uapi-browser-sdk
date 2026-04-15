
# GetGithubUser200ResponseActivityContributionCalendar

按周整理好的贡献日历数据。

## Properties

Name | Type
------------ | -------------
`colors` | Array&lt;string&gt;
`isHalloween` | boolean
`totalContributions` | number
`weeks` | [Array&lt;GetGithubUser200ResponseActivityContributionCalendarWeeksInner&gt;](GetGithubUser200ResponseActivityContributionCalendarWeeksInner.md)

## Example

```typescript
import type { GetGithubUser200ResponseActivityContributionCalendar } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "colors": ["#ebedf0","#40c463"],
  "isHalloween": false,
  "totalContributions": 4,
  "weeks": null,
} satisfies GetGithubUser200ResponseActivityContributionCalendar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser200ResponseActivityContributionCalendar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


