
# GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result


## Properties

Name | Type
------------ | -------------
`markdown` | string
`size` | number

## Example

```typescript
import type { GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "markdown": ---
title: "示例页面"
author: "作者名"
---

# 示例页面

这是转换后的Markdown内容...,
  "size": 1234,
} satisfies GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


