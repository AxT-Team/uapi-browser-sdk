
# GetGithubUser200Response


## Properties

Name | Type
------------ | -------------
`activity` | [GetGithubUser200ResponseActivity](GetGithubUser200ResponseActivity.md)
`avatarUrl` | string
`bio` | string
`blog` | string
`company` | string
`createdAt` | Date
`email` | string
`followers` | number
`following` | number
`htmlUrl` | string
`location` | string
`login` | string
`name` | string
`organizations` | [Array&lt;GetGithubUser200ResponseOrganizationsInner&gt;](GetGithubUser200ResponseOrganizationsInner.md)
`pinnedRepositories` | [Array&lt;GetGithubUser200ResponsePinnedRepositoriesInner&gt;](GetGithubUser200ResponsePinnedRepositoriesInner.md)
`publicGists` | number
`publicRepos` | number
`repositories` | [Array&lt;GetGithubUser200ResponseRepositoriesInner&gt;](GetGithubUser200ResponseRepositoriesInner.md)
`twitterUsername` | string
`type` | string
`updatedAt` | Date

## Example

```typescript
import type { GetGithubUser200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "activity": null,
  "avatarUrl": https://avatars.githubusercontent.com/u/1024025?v=4,
  "bio": Linux kernel creator,
  "blog": ,
  "company": Linux Foundation,
  "createdAt": 2011-09-03T15:26:22Z,
  "email": ,
  "followers": 100,
  "following": 0,
  "htmlUrl": https://github.com/torvalds,
  "location": Portland, OR,
  "login": torvalds,
  "name": Linus Torvalds,
  "organizations": null,
  "pinnedRepositories": null,
  "publicGists": 0,
  "publicRepos": 8,
  "repositories": null,
  "twitterUsername": ,
  "type": User,
  "updatedAt": 2026-04-12T00:00Z,
} satisfies GetGithubUser200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


