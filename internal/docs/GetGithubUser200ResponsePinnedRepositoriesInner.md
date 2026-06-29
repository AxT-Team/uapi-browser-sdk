
# GetGithubUser200ResponsePinnedRepositoriesInner


## Properties

Name | Type
------------ | -------------
`archived` | boolean
`description` | string
`fork` | boolean
`forks` | number
`fullName` | string
`homepage` | string
`htmlUrl` | string
`language` | string
`name` | string
`pushedAt` | Date
`stargazers` | number
`updatedAt` | Date
`visibility` | string

## Example

```typescript
import type { GetGithubUser200ResponsePinnedRepositoriesInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "archived": false,
  "description": Linux kernel source tree,
  "fork": false,
  "forks": 55000,
  "fullName": torvalds/linux,
  "homepage": https://www.kernel.org,
  "htmlUrl": https://github.com/torvalds/linux,
  "language": C,
  "name": linux,
  "pushedAt": 2026-04-15T00:00Z,
  "stargazers": 200000,
  "updatedAt": 2026-04-15T00:00Z,
  "visibility": PUBLIC,
} satisfies GetGithubUser200ResponsePinnedRepositoriesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser200ResponsePinnedRepositoriesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


