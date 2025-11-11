
# GetNetworkIcp200Response


## Properties

Name | Type
------------ | -------------
`code` | string
`domain` | string
`msg` | string
`natureName` | string
`serviceLicence` | string
`unitName` | string

## Example

```typescript
import type { GetNetworkIcp200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "code": 200,
  "domain": baidu.com,
  "msg": 查询成功,
  "natureName": 企业,
  "serviceLicence": 京ICP证030173号,
  "unitName": 北京百度网讯科技有限公司,
} satisfies GetNetworkIcp200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkIcp200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


