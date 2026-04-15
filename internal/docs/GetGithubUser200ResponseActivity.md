
# GetGithubUser200ResponseActivity

贡献活动数据（需开启 activity=true）

## Properties

Name | Type
------------ | -------------
`scope` | string
`organization` | string
`from` | string
`to` | string
`totalContributions` | number
`totalCommitContributions` | number
`totalIssueContributions` | number
`totalPullRequestContributions` | number
`totalPullRequestReviewContributions` | number
`contributionCalendar` | [GetGithubUser200ResponseActivityContributionCalendar](GetGithubUser200ResponseActivityContributionCalendar.md)
`timeline` | [Array&lt;GetGithubUser200ResponseActivityTimelineInner&gt;](GetGithubUser200ResponseActivityTimelineInner.md)

## Example

```typescript
import type { GetGithubUser200ResponseActivity } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "scope": organization,
  "organization": linux-foundation,
  "from": 2025-04-12,
  "to": 2026-04-12,
  "totalContributions": 4,
  "totalCommitContributions": 2,
  "totalIssueContributions": 1,
  "totalPullRequestContributions": 1,
  "totalPullRequestReviewContributions": 0,
  "contributionCalendar": null,
  "timeline": null,
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


