
# GetMiscHotboard200ResponseListInner


## Properties

Name | Type
------------ | -------------
`extra` | { [key: string]: any; }
`hotValue` | string
`index` | number
`title` | string
`url` | string

## Example

```typescript
import type { GetMiscHotboard200ResponseListInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "extra": null,
  "hotValue": 1234567,
  "index": 1,
  "title": 今天天气真好,
  "url": https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%A4%A9%E6%B0%94%E7%9C%9F%E5%A5%BD%23,
} satisfies GetMiscHotboard200ResponseListInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMiscHotboard200ResponseListInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


