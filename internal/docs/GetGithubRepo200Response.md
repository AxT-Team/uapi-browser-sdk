
# GetGithubRepo200Response


## Properties

Name | Type
------------ | -------------
`fullName` | string
`description` | string
`homepage` | string
`defaultBranch` | string
`primaryBranch` | string
`defaultBranchSha` | string
`visibility` | string
`archived` | boolean
`disabled` | boolean
`fork` | boolean
`language` | string
`topics` | Array&lt;string&gt;
`license` | string
`stargazers` | number
`forks` | number
`openIssues` | number
`watchers` | number
`pushedAt` | Date
`createdAt` | Date
`updatedAt` | Date
`languages` | { [key: string]: number; }
`collaborators` | [Array&lt;GetGithubRepo200ResponseCollaboratorsInner&gt;](GetGithubRepo200ResponseCollaboratorsInner.md)
`maintainers` | [Array&lt;GetGithubRepo200ResponseCollaboratorsInner&gt;](GetGithubRepo200ResponseCollaboratorsInner.md)

## Example

```typescript
import type { GetGithubRepo200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "fullName": torvalds/linux,
  "description": Linux kernel source tree,
  "homepage": https://www.kernel.org,
  "defaultBranch": master,
  "primaryBranch": master,
  "defaultBranchSha": abc123...,
  "visibility": public,
  "archived": false,
  "disabled": false,
  "fork": false,
  "language": C,
  "topics": ["kernel","linux"],
  "license": GPL-2.0,
  "stargazers": 170000,
  "forks": 85000,
  "openIssues": 500,
  "watchers": 3000,
  "pushedAt": 2025-09-24T12:34:56Z,
  "createdAt": 2011-07-04T22:42Z,
  "updatedAt": 2025-09-24T12:34:56Z,
  "languages": {"C":123456789,"Assembly":2345678},
  "collaborators": [{"login":"octocat","name":"The Octocat","email":"public@example.com","url":"https://github.com/octocat"}],
  "maintainers": [{"login":"devA","name":"Dev A","email":"devA@users.noreply.github.com","url":"https://github.com/devA"}],
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


