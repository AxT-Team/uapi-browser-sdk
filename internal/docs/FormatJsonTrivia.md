
# FormatJsonTrivia


## Properties

Name | Type
------------ | -------------
`options` | [Array&lt;FormatJsonTriviaOptionsInner&gt;](FormatJsonTriviaOptionsInner.md)
`question` | string

## Example

```typescript
import type { FormatJsonTrivia } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "options": null,
  "question": 哪种特征帮助海狸轻松啃咬坚硬木材？,
} satisfies FormatJsonTrivia

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FormatJsonTrivia
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


