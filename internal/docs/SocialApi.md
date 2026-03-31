# SocialApi

All URIs are relative to *https://uapis.cn/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGithubRepo**](SocialApi.md#getgithubrepo) | **GET** /github/repo | 查询 GitHub 仓库 |
| [**getSocialBilibiliArchives**](SocialApi.md#getsocialbilibiliarchives) | **GET** /social/bilibili/archives | 查询 B站投稿 |
| [**getSocialBilibiliLiveroom**](SocialApi.md#getsocialbilibililiveroom) | **GET** /social/bilibili/liveroom | 查询 B站直播间 |
| [**getSocialBilibiliReplies**](SocialApi.md#getsocialbilibilireplies) | **GET** /social/bilibili/replies | 查询 B站评论 |
| [**getSocialBilibiliUserinfo**](SocialApi.md#getsocialbilibiliuserinfo) | **GET** /social/bilibili/userinfo | 查询 B站用户 |
| [**getSocialBilibiliVideoinfo**](SocialApi.md#getsocialbilibilivideoinfo) | **GET** /social/bilibili/videoinfo | 查询 B站视频 |
| [**getSocialQqGroupinfo**](SocialApi.md#getsocialqqgroupinfo) | **GET** /social/qq/groupinfo | 查询 QQ 群信息 |
| [**getSocialQqUserinfo**](SocialApi.md#getsocialqquserinfo) | **GET** /social/qq/userinfo | 查询 QQ 信息 |



## getGithubRepo

> GetGithubRepo200Response getGithubRepo(repo)

查询 GitHub 仓库

需要快速获取一个GitHub仓库的核心信息？这个接口为你聚合了最有价值的数据，避免了多次调用GitHub官方API的麻烦，并且内置了缓存优化，速度更快、更稳定。  ### 聚合高价值数据 一次请求，即可获得以下信息： - **核心指标**: &#x60;star&#x60;, &#x60;fork&#x60;, &#x60;open_issues&#x60; 等关键统计数据。 - **项目详情**: 描述、主页、分支、语言、话题标签、开源协议。 - **参与者信息**: 获取协作者(&#x60;collaborators&#x60;)和推断的维护者(&#x60;maintainers&#x60;)列表，包括他们的公开邮箱（如果可用）。  &gt; [!NOTE] &gt; &#x60;collaborators&#x60; 字段在私有仓库或权限受限时可能为空。&#x60;maintainers&#x60; 是根据最新提交记录推断的，仅供参考。  ### 性能与稳定性 我们内置了多级缓存，有效避免触发GitHub的API速率限制。对于需要更高请求额度的用户，可以联系我们定制接口。

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetGithubRepoRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | 目标仓库的标识，格式为 `owner/repo`。
    repo: torvalds/linux,
  } satisfies GetGithubRepoRequest;

  try {
    const data = await api.getGithubRepo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repo** | `string` | 目标仓库的标识，格式为 &#x60;owner/repo&#x60;。 | [Defaults to `undefined`] |

### Return type

[**GetGithubRepo200Response**](GetGithubRepo200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功获取仓库信息。 |  -  |
| **400** | 请求参数缺失或格式错误。请确保 &#x60;repo&#x60; 参数已提供且格式为 &#x60;owner/repo&#x60;。 |  -  |
| **502** | 上游 GitHub API 出错或不可用。响应中会包含来自上游的原始错误信息，便于排查问题。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialBilibiliArchives

> GetSocialBilibiliArchives200Response getSocialBilibiliArchives(mid, keywords, orderby, ps, pn)

查询 B站投稿

想要获取UP主的所有投稿视频？或者想在你的应用里展示创作者的作品集？这个接口能帮你轻松实现。  ## 功能概述 通过用户的 &#x60;mid&#x60;（用户ID），你可以获取该UP主的投稿视频列表。接口支持关键词搜索、分页加载和多种排序方式，让你能够灵活地展示和分析创作者的内容。  ## 参数说明 - **&#x60;mid&#x60; (用户ID)**: B站用户的mid，必填参数。 - **&#x60;keywords&#x60; (搜索关键词)**: 可选，用于在该UP主的投稿中搜索特定关键词。 - **&#x60;orderby&#x60; (排序方式)**:    - &#x60;pubdate&#x60;: 按最新发布排序（默认）   - &#x60;views&#x60;: 按最多播放排序 - **&#x60;ps&#x60; (每页条数)**: 默认20条。 - **&#x60;pn&#x60; (页码)**: 默认1，用于分页。  ## 响应体字段说明 - **&#x60;total&#x60; (总稿件数)**: UP主的投稿总数。 - **&#x60;page&#x60; (当前页码)**: 当前返回的页码。 - **&#x60;size&#x60; (每页数量)**: 每页返回的视频数量。 - **&#x60;videos&#x60; (视频列表)**: 包含当前页的所有视频信息：   - &#x60;aid&#x60;: 视频的AV号   - &#x60;bvid&#x60;: 视频的BV号   - &#x60;title&#x60;: 视频标题   - &#x60;cover&#x60;: 封面URL   - &#x60;duration&#x60;: 时长（秒）   - &#x60;play_count&#x60;: 播放量   - &#x60;publish_time&#x60;: 发布时间戳   - &#x60;create_time&#x60;: 创建时间戳   - &#x60;state&#x60;: 视频状态   - &#x60;is_ugc_pay&#x60;: 是否付费视频（0&#x3D;免费，1&#x3D;付费）   - &#x60;is_interactive&#x60;: 是否为互动视频

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialBilibiliArchivesRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | B站用户的mid（用户ID）
    mid: 483307278,
    // string | 搜索关键词，可为空 (optional)
    keywords: keywords_example,
    // string | 排序方式。`pubdate`=最新发布，`views`=最多播放 (optional)
    orderby: pubdate,
    // string | 每页条数，默认20 (optional)
    ps: 20,
    // string | 页码，默认1 (optional)
    pn: 1,
  } satisfies GetSocialBilibiliArchivesRequest;

  try {
    const data = await api.getSocialBilibiliArchives(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mid** | `string` | B站用户的mid（用户ID） | [Defaults to `undefined`] |
| **keywords** | `string` | 搜索关键词，可为空 | [Optional] [Defaults to `undefined`] |
| **orderby** | `string` | 排序方式。&#x60;pubdate&#x60;&#x3D;最新发布，&#x60;views&#x60;&#x3D;最多播放 | [Optional] [Defaults to `undefined`] |
| **ps** | `string` | 每页条数，默认20 | [Optional] [Defaults to `undefined`] |
| **pn** | `string` | 页码，默认1 | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSocialBilibiliArchives200Response**](GetSocialBilibiliArchives200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功！返回用户的投稿视频列表。 |  -  |
| **400** | 参数错误 |  -  |
| **404** | 用户不存在 |  -  |
| **500** | 服务器错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialBilibiliLiveroom

> GetSocialBilibiliLiveroom200Response getSocialBilibiliLiveroom(mid, roomId)

查询 B站直播间

想知道你喜欢的主播开播了吗？或者想在你的应用里集成B站直播间状态？这个接口能满足你。  ## 功能概述 这是一个智能接口，你可以用主播的 &#x60;mid&#x60; (用户ID) 或者直播间的 &#x60;room_id&#x60; (长号或短号)来查询。它会返回直播间的详细信息，包括是否在直播、标题、封面、人气、分区等。  ## 响应体字段说明 - **&#x60;live_status&#x60; (直播状态)**: &#x60;0&#x60; 代表未开播，&#x60;1&#x60; 代表直播中，&#x60;2&#x60; 代表轮播中。

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialBilibiliLiveroomRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | 主播的用户ID (`mid`)。与 `room_id` 任选其一。 (optional)
    mid: 672328094,
    // string | 直播间ID，可以是长号（真实ID）或短号（靓号）。与 `mid` 任选其一。 (optional)
    roomId: 22637261,
  } satisfies GetSocialBilibiliLiveroomRequest;

  try {
    const data = await api.getSocialBilibiliLiveroom(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mid** | `string` | 主播的用户ID (&#x60;mid&#x60;)。与 &#x60;room_id&#x60; 任选其一。 | [Optional] [Defaults to `undefined`] |
| **roomId** | `string` | 直播间ID，可以是长号（真实ID）或短号（靓号）。与 &#x60;mid&#x60; 任选其一。 | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSocialBilibiliLiveroom200Response**](GetSocialBilibiliLiveroom200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功！返回直播间的详细信息。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialBilibiliReplies

> GetSocialBilibiliReplies200Response getSocialBilibiliReplies(oid, sort, ps, pn)

查询 B站评论

想要分析B站视频的评论区？这个接口可以帮你轻松获取评论数据，包括热门评论和最新评论，还支持分页加载。  ## 功能概述 通过视频的 &#x60;oid&#x60;（通常就是视频的&#x60;aid&#x60;），你可以分页获取该视频的评论区内容。你可以指定排序方式和分页参数，来精确地获取你需要的数据。  ## 参数说明 - **&#x60;sort&#x60; (排序方式)**   - &#x60;0&#x60; 或 &#x60;time&#x60;：按时间排序   - &#x60;1&#x60; 或 &#x60;like&#x60;：按点赞排序   - &#x60;2&#x60; 或 &#x60;reply&#x60;：按回复数排序   - &#x60;3&#x60; 或 &#x60;hot&#x60;（也支持 &#x60;hottest&#x60;、&#x60;最热&#x60;）：按最热排序  ## 响应体字段说明 - **&#x60;hots&#x60; (热门评论)**: 仅在请求第一页时，可能会返回热门评论列表。其结构与 &#x60;replies&#x60; 中的对象一致。 - **&#x60;replies&#x60; (评论列表)**: 这是一个数组，包含了当前页的评论。其中：   - &#x60;root&#x60;: 指向根评论的ID。如果评论本身就是根评论，则为 &#x60;0&#x60;。   - &#x60;parent&#x60;: 指向该条回复所回复的上一级评论ID。如果评论是根评论，则为 &#x60;0&#x60;。

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialBilibiliRepliesRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | 目标评论区的ID。对于视频，这通常就是它的 `aid`。
    oid: 1706416465,
    // string | 排序方式。支持 `0/time`（按时间）、`1/like`（按点赞）、`2/reply`（按回复数）、`3/hot/hottest/最热`（按最热）。默认为 `0/time`。 (optional)
    sort: hot,
    // string | 每页获取的评论数量，范围是1到20。默认为 `20`。 (optional)
    ps: 5,
    // string | 要获取的页码，从1开始。默认为 `1`。 (optional)
    pn: 1,
  } satisfies GetSocialBilibiliRepliesRequest;

  try {
    const data = await api.getSocialBilibiliReplies(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **oid** | `string` | 目标评论区的ID。对于视频，这通常就是它的 &#x60;aid&#x60;。 | [Defaults to `undefined`] |
| **sort** | `string` | 排序方式。支持 &#x60;0/time&#x60;（按时间）、&#x60;1/like&#x60;（按点赞）、&#x60;2/reply&#x60;（按回复数）、&#x60;3/hot/hottest/最热&#x60;（按最热）。默认为 &#x60;0/time&#x60;。 | [Optional] [Defaults to `undefined`] |
| **ps** | `string` | 每页获取的评论数量，范围是1到20。默认为 &#x60;20&#x60;。 | [Optional] [Defaults to `undefined`] |
| **pn** | `string` | 要获取的页码，从1开始。默认为 &#x60;1&#x60;。 | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSocialBilibiliReplies200Response**](GetSocialBilibiliReplies200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功！返回指定分页和排序的评论列表。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialBilibiliUserinfo

> GetSocialBilibiliUserinfo200Response getSocialBilibiliUserinfo(uid)

查询 B站用户

想在你的应用里集成B站用户资料展示？这个接口可以轻松获取用户的公开信息。  ## 功能概述 通过一个用户的UID（那一串纯数字ID），你可以查询到该用户的昵称、性别、头像、等级、签名等一系列公开的基本信息。

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialBilibiliUserinfoRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | Bilibili用户的UID
    uid: 483307278,
  } satisfies GetSocialBilibiliUserinfoRequest;

  try {
    const data = await api.getSocialBilibiliUserinfo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | `string` | Bilibili用户的UID | [Defaults to `undefined`] |

### Return type

[**GetSocialBilibiliUserinfo200Response**](GetSocialBilibiliUserinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 查询成功！返回 B 站用户公开数据。 |  -  |
| **400** | 缺少uid参数 |  -  |
| **404** | Bilibili用户不存在 |  -  |
| **502** | 上游Bilibili API错误或风控 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialBilibiliVideoinfo

> GetSocialBilibiliVideoinfo200Response getSocialBilibiliVideoinfo(aid, bvid)

查询 B站视频

想在你的应用里展示B站视频的详细信息吗？无论是封面、标题，还是播放量、UP主信息，这个接口都能一网打尽。  ## 功能概述 通过提供视频的 &#x60;aid&#x60; 或 &#x60;bvid&#x60;，你可以获取到该视频的完整元数据，包括多P信息、UP主资料、数据统计等。  ## 响应体字段说明 - **&#x60;copyright&#x60; (视频类型)**: &#x60;1&#x60; 代表原创，&#x60;2&#x60; 代表转载。 - **&#x60;owner&#x60; (UP主信息)**: 包含 &#x60;mid&#x60;, &#x60;name&#x60;, &#x60;face&#x60; 等UP主的基本资料。 - **&#x60;stat&#x60; (数据统计)**: 包含了播放、弹幕、评论、点赞、投币、收藏、分享等核心数据。 - **&#x60;pages&#x60; (分P列表)**: 这是一个数组，包含了视频的每一个分P的信息，即使是单P视频也会有一个元素。

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialBilibiliVideoinfoRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | 视频的AV号 (aid)，纯数字格式。`aid`和`bvid`任选其一即可。 (optional)
    aid: 75836761,
    // string | 视频的BV号 (bvid)，例如 `BV117411r7R1`。`aid`和`bvid`任选其一即可。 (optional)
    bvid: BV17x411w79F,
  } satisfies GetSocialBilibiliVideoinfoRequest;

  try {
    const data = await api.getSocialBilibiliVideoinfo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **aid** | `string` | 视频的AV号 (aid)，纯数字格式。&#x60;aid&#x60;和&#x60;bvid&#x60;任选其一即可。 | [Optional] [Defaults to `undefined`] |
| **bvid** | `string` | 视频的BV号 (bvid)，例如 &#x60;BV117411r7R1&#x60;。&#x60;aid&#x60;和&#x60;bvid&#x60;任选其一即可。 | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSocialBilibiliVideoinfo200Response**](GetSocialBilibiliVideoinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功！返回Bilibili视频的详细信息。 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialQqGroupinfo

> GetSocialQqGroupinfo200Response getSocialQqGroupinfo(groupId)

查询 QQ 群信息

想在你的应用里展示QQ群信息？这个接口让你轻松获取群名称、群头像、群简介、成员数量等详细公开信息。  ## 功能概述 你只需要提供一个QQ群号（5-12位纯数字），接口就会返回该群的完整公开信息。我们会先验证群号的有效性，确保返回的数据准确可靠。接口响应速度快，数据结构清晰，非常适合集成到各类应用场景中。  ## 返回数据说明 接口会返回以下QQ群的关键信息：  ### 基础字段（所有群都有） - **群基础信息**: 包括群号、群名称，让你能够准确识别和展示群聊 - **视觉素材**: 提供群头像URL（支持多种尺寸），可直接用于在你的界面中展示群聊图标 - **群介绍资料**: 包含群描述/简介和群标签，帮助用户了解群聊的主题和特色 - **便捷入口**: 返回加群链接（二维码URL），方便用户一键加入感兴趣的群聊 - **成员统计**: 当前成员数和最大成员数，直观了解群规模 - **数据时效**: 提供最后更新时间戳，让你了解数据的新鲜度  ### 扩展字段（部分群有） - **活跃度**: 活跃成员数量（可选） - **群主信息**: 群主QQ号和UID（可选） - **时间信息**: 建群时间戳和格式化时间（可选） - **群等级**: 群等级数值（可选） - **群公告**: 群公告/简介内容（可选） - **认证信息**: 官方认证类型和说明（可选）  所有返回的数据都遵循标准的JSON格式，字段命名清晰，便于解析和使用。扩展字段仅在数据可用时返回，保持响应体精简。

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialQqGroupinfoRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | QQ群号，长度5-12位
    groupId: 526357265,
  } satisfies GetSocialQqGroupinfoRequest;

  try {
    const data = await api.getSocialQqGroupinfo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | `string` | QQ群号，长度5-12位 | [Defaults to `undefined`] |

### Return type

[**GetSocialQqGroupinfo200Response**](GetSocialQqGroupinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应，返回QQ群的详细信息 |  -  |
| **400** | 缺少或无效的group_id参数 |  -  |
| **404** | QQ群不存在或无法访问（经优化后，此接口遵循RESTful规范，群不存在时返回404而非500） |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSocialQqUserinfo

> GetSocialQqUserinfo200Response getSocialQqUserinfo(qq)

查询 QQ 信息

这是一个功能丰富的QQ用户信息查询接口，能够获取QQ用户的详细公开信息。  ## 功能概述 通过QQ号查询用户的详细信息，包括基础资料、等级信息、VIP状态等。返回的信息丰富全面，适合用于用户画像分析、社交应用集成等场景。  ## 数据字段说明 - **基础信息**: 昵称、个性签名、头像、年龄、性别 - **联系信息**: QQ邮箱、个性域名(QID) - **等级信息**: QQ等级、VIP状态和等级 - **时间信息**: 注册时间、最后更新时间

### Example

```ts
import {
  Configuration,
  SocialApi,
} from 'uapi-browser-sdk-browser';
import type { GetSocialQqUserinfoRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new SocialApi();

  const body = {
    // string | 需要查询的QQ号
    qq: 10001,
  } satisfies GetSocialQqUserinfoRequest;

  try {
    const data = await api.getSocialQqUserinfo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **qq** | `string` | 需要查询的QQ号 | [Defaults to `undefined`] |

### Return type

[**GetSocialQqUserinfo200Response**](GetSocialQqUserinfo200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 成功响应，返回QQ用户的详细信息 |  -  |
| **400** | 缺少或无效的qq参数 |  -  |
| **404** | 获取QQ用户信息失败或用户不存在 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

