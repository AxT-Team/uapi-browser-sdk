
# PostTextMarkdownToHtml200ResponseData


## Properties

Name | Type
------------ | -------------
`html` | string

## Example

```typescript
import type { PostTextMarkdownToHtml200ResponseData } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "html": <style>...</style><div class="uapi-markdown"><h1 id="coffee">咖啡</h1><p>...</p></div>,
} satisfies PostTextMarkdownToHtml200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostTextMarkdownToHtml200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


