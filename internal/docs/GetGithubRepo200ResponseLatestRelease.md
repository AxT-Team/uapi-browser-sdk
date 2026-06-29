
# GetGithubRepo200ResponseLatestRelease

仓库最新发布版本信息，如果没有 Release 则为 null。可用于实现应用更新检查功能。

## Properties

Name | Type
------------ | -------------
`draft` | boolean
`htmlUrl` | string
`name` | string
`prerelease` | boolean
`publishedAt` | Date
`tagName` | string

## Example

```typescript
import type { GetGithubRepo200ResponseLatestRelease } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "draft": false,
  "htmlUrl": https://github.com/owner/repo/releases/tag/v1.2.3,
  "name": Release v1.2.3,
  "prerelease": false,
  "publishedAt": 2026-01-10T12:00Z,
  "tagName": v1.2.3,
} satisfies GetGithubRepo200ResponseLatestRelease

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGithubRepo200ResponseLatestRelease
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


