
# FormatJsonTriviaOptionsInner


## Properties

Name | Type
------------ | -------------
`bullet` | string
`text` | string
`url` | string

## Example

```typescript
import type { FormatJsonTriviaOptionsInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "bullet": A,
  "text": 强壮臼齿,
  "url": https://www.bing.com/search?q=%E6%A9%99%E8%89%B2%E9%97%A8%E9%BD%BF&FORM=HPQUIZ,
} satisfies FormatJsonTriviaOptionsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FormatJsonTriviaOptionsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


