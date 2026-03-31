
# GetWebparseExtractimages200Response


## Properties

Name | Type
------------ | -------------
`pageUrl` | string
`imageUrls` | Array&lt;string&gt;

## Example

```typescript
import type { GetWebparseExtractimages200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "pageUrl": https://cn.bing.com/,
  "imageUrls": ["https://example.com/image1.jpg","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="],
} satisfies GetWebparseExtractimages200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebparseExtractimages200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


