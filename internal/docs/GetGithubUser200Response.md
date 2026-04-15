
# GetGithubUser200Response


## Properties

Name | Type
------------ | -------------
`login` | string
`name` | string
`bio` | string
`company` | string
`location` | string
`blog` | string
`twitterUsername` | string
`email` | string
`htmlUrl` | string
`avatarUrl` | string
`type` | string
`publicRepos` | number
`publicGists` | number
`followers` | number
`following` | number
`createdAt` | Date
`updatedAt` | Date
`organizations` | [Array&lt;GetGithubUser200ResponseOrganizationsInner&gt;](GetGithubUser200ResponseOrganizationsInner.md)
`activity` | [GetGithubUser200ResponseActivity](GetGithubUser200ResponseActivity.md)

## Example

```typescript
import type { GetGithubUser200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "login": torvalds,
  "name": Linus Torvalds,
  "bio": Linux kernel creator,
  "company": Linux Foundation,
  "location": Portland, OR,
  "blog": ,
  "twitterUsername": ,
  "email": ,
  "htmlUrl": https://github.com/torvalds,
  "avatarUrl": https://avatars.githubusercontent.com/u/1024025?v=4,
  "type": User,
  "publicRepos": 8,
  "publicGists": 0,
  "followers": 100,
  "following": 0,
  "createdAt": 2011-09-03T15:26:22Z,
  "updatedAt": 2026-04-12T00:00Z,
  "organizations": null,
  "activity": null,
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


