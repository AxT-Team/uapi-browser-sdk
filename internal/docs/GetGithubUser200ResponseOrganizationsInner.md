
# GetGithubUser200ResponseOrganizationsInner


## Properties

Name | Type
------------ | -------------
`login` | string
`description` | string
`htmlUrl` | string
`avatarUrl` | string

## Example

```typescript
import type { GetGithubUser200ResponseOrganizationsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "login": linux-foundation,
  "description": Open source organization,
  "htmlUrl": https://github.com/linux-foundation,
  "avatarUrl": https://avatars.githubusercontent.com/u/123456?v=4,
} satisfies GetGithubUser200ResponseOrganizationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubUser200ResponseOrganizationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


