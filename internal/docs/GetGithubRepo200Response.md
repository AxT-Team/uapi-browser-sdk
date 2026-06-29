
# GetGithubRepo200Response


## Properties

Name | Type
------------ | -------------
`archived` | boolean
`collaborators` | [Array&lt;GetGithubRepo200ResponseCollaboratorsInner&gt;](GetGithubRepo200ResponseCollaboratorsInner.md)
`createdAt` | Date
`defaultBranch` | string
`defaultBranchSha` | string
`description` | string
`disabled` | boolean
`fork` | boolean
`forks` | number
`fullName` | string
`homepage` | string
`language` | string
`languages` | { [key: string]: number; }
`latestRelease` | [GetGithubRepo200ResponseLatestRelease](GetGithubRepo200ResponseLatestRelease.md)
`license` | string
`maintainers` | [Array&lt;GetGithubRepo200ResponseCollaboratorsInner&gt;](GetGithubRepo200ResponseCollaboratorsInner.md)
`openIssues` | number
`primaryBranch` | string
`pushedAt` | Date
`stargazers` | number
`topics` | Array&lt;string&gt;
`updatedAt` | Date
`visibility` | string
`watchers` | number

## Example

```typescript
import type { GetGithubRepo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "archived": false,
  "collaborators": [{"email":"public@example.com","login":"octocat","name":"The Octocat","url":"https://github.com/octocat"}],
  "createdAt": 2011-07-04T22:42Z,
  "defaultBranch": master,
  "defaultBranchSha": abc123...,
  "description": Linux kernel source tree,
  "disabled": false,
  "fork": false,
  "forks": 85000,
  "fullName": torvalds/linux,
  "homepage": https://www.kernel.org,
  "language": C,
  "languages": {"Assembly":2345678,"C":123456789},
  "latestRelease": null,
  "license": GPL-2.0,
  "maintainers": [{"email":"devA@users.noreply.github.com","login":"devA","name":"Dev A","url":"https://github.com/devA"}],
  "openIssues": 500,
  "primaryBranch": master,
  "pushedAt": 2025-09-24T12:34:56Z,
  "stargazers": 170000,
  "topics": ["kernel","linux"],
  "updatedAt": 2025-09-24T12:34:56Z,
  "visibility": public,
  "watchers": 3000,
} satisfies GetGithubRepo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubRepo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


