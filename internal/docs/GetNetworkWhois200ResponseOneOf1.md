
# GetNetworkWhois200ResponseOneOf1

### JSON格式响应 当 `format=json` 时，`whois` 字段返回结构化的JSON对象。  > [!NOTE] > **注意**：返回的具体字段可能因域名注册局和隐私保护设置而异。某些敏感信息可能会被部分隐藏或标记为 `REDACTED FOR PRIVACY`。

## Properties

Name | Type
------------ | -------------
`whois` | object

## Example

```typescript
import type { GetNetworkWhois200ResponseOneOf1 } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "whois": {"domain":{"id":"2138514_DOMAIN_COM-VRSN","domain":"google.com","punycode":"google.com","name":"google","extension":"com","whois_server":"whois.markmonitor.com","status":["clientDeleteProhibited","clientTransferProhibited","clientUpdateProhibited","serverDeleteProhibited","serverTransferProhibited","serverUpdateProhibited"],"name_servers":["ns1.google.com","ns2.google.com","ns3.google.com","ns4.google.com"],"created_date":"1997-09-15T04:00:00Z","created_date_in_time":"1997-09-15T04:00:00Z","updated_date":"2019-09-09T15:39:04Z","updated_date_in_time":"2019-09-09T15:39:04Z","expiration_date":"2028-09-14T04:00:00Z","expiration_date_in_time":"2028-09-14T04:00:00Z"},"registrar":{"id":"292","name":"MarkMonitor Inc.","phone":"+1.2086851750","email":"abusecomplaints@markmonitor.com","referral_url":"http://www.markmonitor.com"},"registrant":{"organization":"Google LLC","country":"US","email":"select request email form at https://domains.markmonitor.com/whois/google.com"},"technical":{"email":"select request email form at https://domains.markmonitor.com/whois/google.com"}},
} satisfies GetNetworkWhois200ResponseOneOf1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkWhois200ResponseOneOf1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


