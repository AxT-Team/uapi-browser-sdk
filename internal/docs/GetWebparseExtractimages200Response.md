
# GetWebparseExtractimages200Response


## Properties

Name | Type
------------ | -------------
`count` | number
`images` | Array&lt;string&gt;
`url` | string

## Example

```typescript
import type { GetWebparseExtractimages200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "count": 25,
  "images": ["https://example.com/image1.jpg","https://example.com/image2.png"],
  "url": https://example.com,
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


