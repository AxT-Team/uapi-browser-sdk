
# GetGithubUser200ResponseActivityContributionCalendarWeeksInner


## Properties

Name | Type
------------ | -------------
`firstDay` | string
`contributionDays` | [Array&lt;GetGithubUser200ResponseActivityContributionCalendarWeeksInnerContributionDaysInner&gt;](GetGithubUser200ResponseActivityContributionCalendarWeeksInnerContributionDaysInner.md)

## Example

```typescript
import type { GetGithubUser200ResponseActivityContributionCalendarWeeksInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "firstDay": 2026-04-06,
  "contributionDays": null,
} satisfies GetGithubUser200ResponseActivityContributionCalendarWeeksInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser200ResponseActivityContributionCalendarWeeksInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


