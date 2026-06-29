
# GetGithubUser200ResponseActivity

贡献活动数据（需开启 activity=true）

## Properties

Name | Type
------------ | -------------
`contributionCalendar` | [GetGithubUser200ResponseActivityContributionCalendar](GetGithubUser200ResponseActivityContributionCalendar.md)
`from` | string
`organization` | string
`scope` | string
`timeline` | [Array&lt;GetGithubUser200ResponseActivityTimelineInner&gt;](GetGithubUser200ResponseActivityTimelineInner.md)
`to` | string
`totalCommitContributions` | number
`totalContributions` | number
`totalIssueContributions` | number
`totalPullRequestContributions` | number
`totalPullRequestReviewContributions` | number

## Example

```typescript
import type { GetGithubUser200ResponseActivity } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "contributionCalendar": null,
  "from": 2025-04-12,
  "organization": linux-foundation,
  "scope": organization,
  "timeline": null,
  "to": 2026-04-12,
  "totalCommitContributions": 2,
  "totalContributions": 4,
  "totalIssueContributions": 1,
  "totalPullRequestContributions": 1,
  "totalPullRequestReviewContributions": 0,
} satisfies GetGithubUser200ResponseActivity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser200ResponseActivity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


