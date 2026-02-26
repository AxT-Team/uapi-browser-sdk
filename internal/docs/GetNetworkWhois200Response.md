
# GetNetworkWhois200Response


## Properties

Name | Type
------------ | -------------
`whois` | object

## Example

```typescript
import type { GetNetworkWhois200Response } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "whois": {domain={id=12345678901234, domain=exa***.com, punycode=exa***.com, name=exa***, extension=com, whois_server=whois.***.com, status=[ok], name_servers=[ns1.***.com, ns2.***.com], created_date=2022-01-01T00:00:00Z, updated_date=2024-01-01T00:00:00Z, expiration_date=2026-01-01T00:00:00Z}, registrar={id=9999, name=*** Registrar LLC, phone=+86.1*********, email=redacted@***.com}, registrant={id=Not Available From Registry, name=REDACTED FOR PRIVACY, organization=REDACTED FOR PRIVACY, country=CN}},
} satisfies GetNetworkWhois200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetNetworkWhois200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


