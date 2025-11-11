
# GetGameEpicFree200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`cover` | string
`originalPrice` | number
`originalPriceDesc` | string
`description` | string
`seller` | string
`isFreeNow` | boolean
`freeStart` | string
`freeStartAt` | number
`freeEnd` | string
`freeEndAt` | number
`link` | string

## Example

```typescript
import type { GetGameEpicFree200ResponseDataInner } from 'uapi-browser-sdk-browser'

// TODO: Update the object below with actual values
const example = {
  "id": epic-game-123456,
  "title": Control Ultimate Edition,
  "cover": https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ControlUltimateEdition_RemedyEntertainment_S1_2560x1440-a2a40e2b9164c2c0e031bd4e88bacd01.jpg,
  "originalPrice": 40,
  "originalPriceDesc": ¥40.00,
  "description": 在这款超自然动作冒险游戏中，你将掌握一系列超自然能力、改装武器，探索神秘的联邦控制局。,
  "seller": Remedy Entertainment,
  "isFreeNow": true,
  "freeStart": 2025/01/10 00:00:00,
  "freeStartAt": 1736438400000,
  "freeEnd": 2025/01/17 00:00:00,
  "freeEndAt": 1737043200000,
  "link": https://store.epicgames.com/zh-CN/p/control,
} satisfies GetGameEpicFree200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameEpicFree200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


