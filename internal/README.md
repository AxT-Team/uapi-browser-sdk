# uapi-browser-sdk-browser@1.0.0

A TypeScript SDK client for the uapis.cn API.

## Usage

First, install the SDK from npm.

```bash
npm install uapi-browser-sdk-browser --save
```

Next, try it out.


```ts
import {
  Configuration,
  DefaultApi,
} from 'uapi-browser-sdk-browser';
import type { GetSearchEnginesRequest } from 'uapi-browser-sdk-browser';

async function example() {
  console.log("🚀 Testing uapi-browser-sdk-browser SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getSearchEngines();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://uapis.cn/api/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*DefaultApi* | [**getSearchEngines**](docs/DefaultApi.md#getsearchengines) | **GET** /search/engines | 搜索引擎配置
*DefaultApi* | [**getSensitiveWordAnalyzeQuery**](docs/DefaultApi.md#getsensitivewordanalyzequery) | **GET** /sensitive-word/analyze-query | 敏感词分析 (GET)
*DefaultApi* | [**postSearchAggregate**](docs/DefaultApi.md#postsearchaggregateoperation) | **POST** /search/aggregate | 智能搜索
*DefaultApi* | [**postSensitiveWordAnalyze**](docs/DefaultApi.md#postsensitivewordanalyzeoperation) | **POST** /sensitive-word/analyze | 分析敏感词
*DefaultApi* | [**postSensitiveWordQuickCheck**](docs/DefaultApi.md#postsensitivewordquickcheckoperation) | **POST** /text/profanitycheck | 敏感词检测（快速）
*ClipzyApi* | [**getClipzyGet**](docs/ClipzyApi.md#getclipzyget) | **GET** /api/get | 步骤2 (方法一): 获取加密数据
*ClipzyApi* | [**getClipzyRaw**](docs/ClipzyApi.md#getclipzyraw) | **GET** /api/raw/{id} | 步骤2 (方法二): 获取原始文本
*ClipzyApi* | [**postClipzyStore**](docs/ClipzyApi.md#postclipzystoreoperation) | **POST** /api/store | 步骤1：上传加密数据
*ConvertApi* | [**getConvertUnixtime**](docs/ConvertApi.md#getconvertunixtime) | **GET** /convert/unixtime | 时间戳转换
*ConvertApi* | [**postConvertJson**](docs/ConvertApi.md#postconvertjsonoperation) | **POST** /convert/json | JSON 格式化
*DailyApi* | [**getDailyNewsImage**](docs/DailyApi.md#getdailynewsimage) | **GET** /daily/news-image | 每日新闻图
*GameApi* | [**getGameEpicFree**](docs/GameApi.md#getgameepicfree) | **GET** /game/epic-free | Epic 免费游戏
*GameApi* | [**getGameMinecraftHistoryid**](docs/GameApi.md#getgameminecrafthistoryid) | **GET** /game/minecraft/historyid | 查询 MC 曾用名
*GameApi* | [**getGameMinecraftServerstatus**](docs/GameApi.md#getgameminecraftserverstatus) | **GET** /game/minecraft/serverstatus | 查询 MC 服务器
*GameApi* | [**getGameMinecraftUserinfo**](docs/GameApi.md#getgameminecraftuserinfo) | **GET** /game/minecraft/userinfo | 查询 MC 玩家
*GameApi* | [**getGameSteamSummary**](docs/GameApi.md#getgamesteamsummary) | **GET** /game/steam/summary | 查询 Steam 用户
*ImageApi* | [**getAvatarGravatar**](docs/ImageApi.md#getavatargravatar) | **GET** /avatar/gravatar | 获取Gravatar头像
*ImageApi* | [**getImageBingDaily**](docs/ImageApi.md#getimagebingdaily) | **GET** /image/bing-daily | 必应壁纸
*ImageApi* | [**getImageMotou**](docs/ImageApi.md#getimagemotou) | **GET** /image/motou | 生成摸摸头GIF (QQ号)
*ImageApi* | [**getImageQrcode**](docs/ImageApi.md#getimageqrcode) | **GET** /image/qrcode | 生成二维码
*ImageApi* | [**getImageTobase64**](docs/ImageApi.md#getimagetobase64) | **GET** /image/tobase64 | 图片转 Base64
*ImageApi* | [**postImageCompress**](docs/ImageApi.md#postimagecompress) | **POST** /image/compress | 无损压缩图片
*ImageApi* | [**postImageFrombase64**](docs/ImageApi.md#postimagefrombase64operation) | **POST** /image/frombase64 | 通过Base64编码上传图片
*ImageApi* | [**postImageMotou**](docs/ImageApi.md#postimagemotou) | **POST** /image/motou | 生成摸摸头GIF
*ImageApi* | [**postImageNsfw**](docs/ImageApi.md#postimagensfw) | **POST** /image/nsfw | 图片敏感检测
*ImageApi* | [**postImageSpeechless**](docs/ImageApi.md#postimagespeechlessoperation) | **POST** /image/speechless | 生成你们怎么不说话了表情包
*ImageApi* | [**postImageSvg**](docs/ImageApi.md#postimagesvg) | **POST** /image/svg | SVG转图片
*MiscApi* | [**getHistoryProgrammer**](docs/MiscApi.md#gethistoryprogrammer) | **GET** /history/programmer | 程序员历史事件
*MiscApi* | [**getHistoryProgrammerToday**](docs/MiscApi.md#gethistoryprogrammertoday) | **GET** /history/programmer/today | 程序员历史上的今天
*MiscApi* | [**getMiscDistrict**](docs/MiscApi.md#getmiscdistrict) | **GET** /misc/district | Adcode 国内外行政区域查询
*MiscApi* | [**getMiscHolidayCalendar**](docs/MiscApi.md#getmischolidaycalendar) | **GET** /misc/holiday-calendar | 查询节假日与万年历
*MiscApi* | [**getMiscHotboard**](docs/MiscApi.md#getmischotboard) | **GET** /misc/hotboard | 查询热榜
*MiscApi* | [**getMiscLunartime**](docs/MiscApi.md#getmisclunartime) | **GET** /misc/lunartime | 查询农历时间
*MiscApi* | [**getMiscPhoneinfo**](docs/MiscApi.md#getmiscphoneinfo) | **GET** /misc/phoneinfo | 查询手机归属地
*MiscApi* | [**getMiscRandomnumber**](docs/MiscApi.md#getmiscrandomnumber) | **GET** /misc/randomnumber | 随机数生成
*MiscApi* | [**getMiscTimestamp**](docs/MiscApi.md#getmisctimestamp) | **GET** /misc/timestamp | 转换时间戳 (旧版，推荐使用/convert/unixtime)
*MiscApi* | [**getMiscTrackingCarriers**](docs/MiscApi.md#getmisctrackingcarriers) | **GET** /misc/tracking/carriers | 获取支持的快递公司列表
*MiscApi* | [**getMiscTrackingDetect**](docs/MiscApi.md#getmisctrackingdetect) | **GET** /misc/tracking/detect | 识别快递公司
*MiscApi* | [**getMiscTrackingQuery**](docs/MiscApi.md#getmisctrackingquery) | **GET** /misc/tracking/query | 查询快递物流信息
*MiscApi* | [**getMiscWeather**](docs/MiscApi.md#getmiscweather) | **GET** /misc/weather | 查询天气
*MiscApi* | [**getMiscWorldtime**](docs/MiscApi.md#getmiscworldtime) | **GET** /misc/worldtime | 查询世界时间
*MiscApi* | [**postMiscDateDiff**](docs/MiscApi.md#postmiscdatediffoperation) | **POST** /misc/date-diff | 计算两个日期之间的时间差值
*NetworkApi* | [**getNetworkDns**](docs/NetworkApi.md#getnetworkdns) | **GET** /network/dns | 执行DNS解析查询
*NetworkApi* | [**getNetworkIcp**](docs/NetworkApi.md#getnetworkicp) | **GET** /network/icp | 查询域名ICP备案信息
*NetworkApi* | [**getNetworkIpinfo**](docs/NetworkApi.md#getnetworkipinfo) | **GET** /network/ipinfo | 查询 IP
*NetworkApi* | [**getNetworkMyip**](docs/NetworkApi.md#getnetworkmyip) | **GET** /network/myip | 查询我的 IP
*NetworkApi* | [**getNetworkPing**](docs/NetworkApi.md#getnetworkping) | **GET** /network/ping | Ping 主机
*NetworkApi* | [**getNetworkPingmyip**](docs/NetworkApi.md#getnetworkpingmyip) | **GET** /network/pingmyip | Ping 我的 IP
*NetworkApi* | [**getNetworkPortscan**](docs/NetworkApi.md#getnetworkportscan) | **GET** /network/portscan | 端口扫描
*NetworkApi* | [**getNetworkUrlstatus**](docs/NetworkApi.md#getnetworkurlstatus) | **GET** /network/urlstatus | 检查URL的可访问性状态
*NetworkApi* | [**getNetworkWhois**](docs/NetworkApi.md#getnetworkwhois) | **GET** /network/whois | 查询域名的WHOIS注册信息
*NetworkApi* | [**getNetworkWxdomain**](docs/NetworkApi.md#getnetworkwxdomain) | **GET** /network/wxdomain | 检查域名在微信中的访问状态
*PoemApi* | [**getSaying**](docs/PoemApi.md#getsaying) | **GET** /saying | 一言
*RandomApi* | [**getAnswerbookAsk**](docs/RandomApi.md#getanswerbookask) | **GET** /answerbook/ask | 答案之书
*RandomApi* | [**getRandomImage**](docs/RandomApi.md#getrandomimage) | **GET** /random/image | 随机图片
*RandomApi* | [**getRandomString**](docs/RandomApi.md#getrandomstring) | **GET** /random/string | 随机字符串
*RandomApi* | [**postAnswerbookAsk**](docs/RandomApi.md#postanswerbookaskoperation) | **POST** /answerbook/ask | 答案之书 (POST)
*SocialApi* | [**getGithubRepo**](docs/SocialApi.md#getgithubrepo) | **GET** /github/repo | 查询 GitHub 仓库
*SocialApi* | [**getSocialBilibiliArchives**](docs/SocialApi.md#getsocialbilibiliarchives) | **GET** /social/bilibili/archives | 查询 B站投稿
*SocialApi* | [**getSocialBilibiliLiveroom**](docs/SocialApi.md#getsocialbilibililiveroom) | **GET** /social/bilibili/liveroom | 查询 B站直播间
*SocialApi* | [**getSocialBilibiliReplies**](docs/SocialApi.md#getsocialbilibilireplies) | **GET** /social/bilibili/replies | 查询 B站评论
*SocialApi* | [**getSocialBilibiliUserinfo**](docs/SocialApi.md#getsocialbilibiliuserinfo) | **GET** /social/bilibili/userinfo | 查询 B站用户
*SocialApi* | [**getSocialBilibiliVideoinfo**](docs/SocialApi.md#getsocialbilibilivideoinfo) | **GET** /social/bilibili/videoinfo | 查询 B站视频
*SocialApi* | [**getSocialQqGroupinfo**](docs/SocialApi.md#getsocialqqgroupinfo) | **GET** /social/qq/groupinfo | 查询 QQ 群信息
*SocialApi* | [**getSocialQqUserinfo**](docs/SocialApi.md#getsocialqquserinfo) | **GET** /social/qq/userinfo | 查询 QQ 信息
*StatusApi* | [**getStatusRatelimit**](docs/StatusApi.md#getstatusratelimit) | **GET** /status/ratelimit | 限流状态
*StatusApi* | [**getStatusUsage**](docs/StatusApi.md#getstatususage) | **GET** /status/usage | 获取API端点使用统计
*TextApi* | [**getTextMd5**](docs/TextApi.md#gettextmd5) | **GET** /text/md5 | MD5 哈希
*TextApi* | [**postTextAesDecrypt**](docs/TextApi.md#posttextaesdecryptoperation) | **POST** /text/aes/decrypt | AES 解密
*TextApi* | [**postTextAesDecryptAdvanced**](docs/TextApi.md#posttextaesdecryptadvancedoperation) | **POST** /text/aes/decrypt-advanced | AES高级解密
*TextApi* | [**postTextAesEncrypt**](docs/TextApi.md#posttextaesencryptoperation) | **POST** /text/aes/encrypt | AES 加密
*TextApi* | [**postTextAesEncryptAdvanced**](docs/TextApi.md#posttextaesencryptadvancedoperation) | **POST** /text/aes/encrypt-advanced | AES高级加密
*TextApi* | [**postTextAnalyze**](docs/TextApi.md#posttextanalyzeoperation) | **POST** /text/analyze | 文本分析
*TextApi* | [**postTextBase64Decode**](docs/TextApi.md#posttextbase64decodeoperation) | **POST** /text/base64/decode | Base64 解码
*TextApi* | [**postTextBase64Encode**](docs/TextApi.md#posttextbase64encodeoperation) | **POST** /text/base64/encode | Base64 编码
*TextApi* | [**postTextConvert**](docs/TextApi.md#posttextconvertoperation) | **POST** /text/convert | 格式转换
*TextApi* | [**postTextMd5**](docs/TextApi.md#posttextmd5operation) | **POST** /text/md5 | MD5 哈希 (POST)
*TextApi* | [**postTextMd5Verify**](docs/TextApi.md#posttextmd5verifyoperation) | **POST** /text/md5/verify | MD5 校验
*TranslateApi* | [**getAiTranslateLanguages**](docs/TranslateApi.md#getaitranslatelanguages) | **GET** /ai/translate/languages | AI翻译配置
*TranslateApi* | [**postAiTranslate**](docs/TranslateApi.md#postaitranslateoperation) | **POST** /ai/translate | AI智能翻译
*TranslateApi* | [**postTranslateStream**](docs/TranslateApi.md#posttranslatestreamoperation) | **POST** /translate/stream | 流式翻译（中英互译）
*TranslateApi* | [**postTranslateText**](docs/TranslateApi.md#posttranslatetextoperation) | **POST** /translate/text | 翻译
*WebParseApi* | [**getWebTomarkdownAsyncStatus**](docs/WebParseApi.md#getwebtomarkdownasyncstatus) | **GET** /web/tomarkdown/async/{task_id} | 转换任务状态
*WebParseApi* | [**getWebparseExtractimages**](docs/WebParseApi.md#getwebparseextractimages) | **GET** /webparse/extractimages | 提取网页图片
*WebParseApi* | [**getWebparseMetadata**](docs/WebParseApi.md#getwebparsemetadata) | **GET** /webparse/metadata | 提取网页元数据
*WebParseApi* | [**postWebTomarkdownAsync**](docs/WebParseApi.md#postwebtomarkdownasync) | **POST** /web/tomarkdown/async | 网页转 Markdown


### Models

- [GetAiTranslateLanguages200Response](docs/GetAiTranslateLanguages200Response.md)
- [GetAiTranslateLanguages200ResponseData](docs/GetAiTranslateLanguages200ResponseData.md)
- [GetAiTranslateLanguages200ResponseDataContextsInner](docs/GetAiTranslateLanguages200ResponseDataContextsInner.md)
- [GetAiTranslateLanguages200ResponseDataLanguagesInner](docs/GetAiTranslateLanguages200ResponseDataLanguagesInner.md)
- [GetAiTranslateLanguages200ResponseDataStylesInner](docs/GetAiTranslateLanguages200ResponseDataStylesInner.md)
- [GetAiTranslateLanguages200ResponsePerformance](docs/GetAiTranslateLanguages200ResponsePerformance.md)
- [GetAiTranslateLanguages200ResponsePerformanceTypicalResponseTimeMs](docs/GetAiTranslateLanguages200ResponsePerformanceTypicalResponseTimeMs.md)
- [GetAnswerbookAsk200Response](docs/GetAnswerbookAsk200Response.md)
- [GetAnswerbookAsk400Response](docs/GetAnswerbookAsk400Response.md)
- [GetAnswerbookAsk500Response](docs/GetAnswerbookAsk500Response.md)
- [GetAvatarGravatar400Response](docs/GetAvatarGravatar400Response.md)
- [GetAvatarGravatar404Response](docs/GetAvatarGravatar404Response.md)
- [GetClipzyGet200Response](docs/GetClipzyGet200Response.md)
- [GetClipzyGet400Response](docs/GetClipzyGet400Response.md)
- [GetClipzyGet404Response](docs/GetClipzyGet404Response.md)
- [GetClipzyRaw400Response](docs/GetClipzyRaw400Response.md)
- [GetClipzyRaw403Response](docs/GetClipzyRaw403Response.md)
- [GetConvertUnixtime200Response](docs/GetConvertUnixtime200Response.md)
- [GetConvertUnixtime400Response](docs/GetConvertUnixtime400Response.md)
- [GetDailyNewsImage500Response](docs/GetDailyNewsImage500Response.md)
- [GetDailyNewsImage502Response](docs/GetDailyNewsImage502Response.md)
- [GetGameEpicFree200Response](docs/GetGameEpicFree200Response.md)
- [GetGameEpicFree200ResponseDataInner](docs/GetGameEpicFree200ResponseDataInner.md)
- [GetGameEpicFree500Response](docs/GetGameEpicFree500Response.md)
- [GetGameMinecraftHistoryid200Response](docs/GetGameMinecraftHistoryid200Response.md)
- [GetGameMinecraftHistoryid200ResponseHistoryInner](docs/GetGameMinecraftHistoryid200ResponseHistoryInner.md)
- [GetGameMinecraftHistoryid200ResponseResultsInner](docs/GetGameMinecraftHistoryid200ResponseResultsInner.md)
- [GetGameMinecraftHistoryid200ResponseResultsInnerHistoryInner](docs/GetGameMinecraftHistoryid200ResponseResultsInnerHistoryInner.md)
- [GetGameMinecraftHistoryid400Response](docs/GetGameMinecraftHistoryid400Response.md)
- [GetGameMinecraftHistoryid404Response](docs/GetGameMinecraftHistoryid404Response.md)
- [GetGameMinecraftHistoryid502Response](docs/GetGameMinecraftHistoryid502Response.md)
- [GetGameMinecraftServerstatus200Response](docs/GetGameMinecraftServerstatus200Response.md)
- [GetGameMinecraftServerstatus400Response](docs/GetGameMinecraftServerstatus400Response.md)
- [GetGameMinecraftServerstatus404Response](docs/GetGameMinecraftServerstatus404Response.md)
- [GetGameMinecraftServerstatus502Response](docs/GetGameMinecraftServerstatus502Response.md)
- [GetGameMinecraftUserinfo200Response](docs/GetGameMinecraftUserinfo200Response.md)
- [GetGameMinecraftUserinfo400Response](docs/GetGameMinecraftUserinfo400Response.md)
- [GetGameMinecraftUserinfo404Response](docs/GetGameMinecraftUserinfo404Response.md)
- [GetGameMinecraftUserinfo502Response](docs/GetGameMinecraftUserinfo502Response.md)
- [GetGameSteamSummary200Response](docs/GetGameSteamSummary200Response.md)
- [GetGameSteamSummary400Response](docs/GetGameSteamSummary400Response.md)
- [GetGameSteamSummary401Response](docs/GetGameSteamSummary401Response.md)
- [GetGameSteamSummary404Response](docs/GetGameSteamSummary404Response.md)
- [GetGameSteamSummary502Response](docs/GetGameSteamSummary502Response.md)
- [GetGithubRepo200Response](docs/GetGithubRepo200Response.md)
- [GetGithubRepo200ResponseCollaboratorsInner](docs/GetGithubRepo200ResponseCollaboratorsInner.md)
- [GetGithubRepo200ResponseLatestRelease](docs/GetGithubRepo200ResponseLatestRelease.md)
- [GetGithubRepo400Response](docs/GetGithubRepo400Response.md)
- [GetGithubRepo502Response](docs/GetGithubRepo502Response.md)
- [GetHistoryProgrammer200Response](docs/GetHistoryProgrammer200Response.md)
- [GetHistoryProgrammer200ResponseEventsInner](docs/GetHistoryProgrammer200ResponseEventsInner.md)
- [GetHistoryProgrammer400Response](docs/GetHistoryProgrammer400Response.md)
- [GetHistoryProgrammerToday200Response](docs/GetHistoryProgrammerToday200Response.md)
- [GetHistoryProgrammerToday200ResponseEventsInner](docs/GetHistoryProgrammerToday200ResponseEventsInner.md)
- [GetHistoryProgrammerToday500Response](docs/GetHistoryProgrammerToday500Response.md)
- [GetImageBingDaily502Response](docs/GetImageBingDaily502Response.md)
- [GetImageMotou400Response](docs/GetImageMotou400Response.md)
- [GetImageMotou500Response](docs/GetImageMotou500Response.md)
- [GetImageQrcode200Response](docs/GetImageQrcode200Response.md)
- [GetImageQrcode400Response](docs/GetImageQrcode400Response.md)
- [GetImageQrcode500Response](docs/GetImageQrcode500Response.md)
- [GetImageTobase64200Response](docs/GetImageTobase64200Response.md)
- [GetImageTobase64400Response](docs/GetImageTobase64400Response.md)
- [GetImageTobase64502Response](docs/GetImageTobase64502Response.md)
- [GetMiscDistrict200Response](docs/GetMiscDistrict200Response.md)
- [GetMiscDistrict200ResponseResultsInner](docs/GetMiscDistrict200ResponseResultsInner.md)
- [GetMiscDistrict200ResponseResultsInnerCenter](docs/GetMiscDistrict200ResponseResultsInnerCenter.md)
- [GetMiscDistrict400Response](docs/GetMiscDistrict400Response.md)
- [GetMiscHolidayCalendar200Response](docs/GetMiscHolidayCalendar200Response.md)
- [GetMiscHolidayCalendar200ResponseData](docs/GetMiscHolidayCalendar200ResponseData.md)
- [GetMiscHolidayCalendar200ResponseDataDaysInner](docs/GetMiscHolidayCalendar200ResponseDataDaysInner.md)
- [GetMiscHolidayCalendar200ResponseDataHolidaysInner](docs/GetMiscHolidayCalendar200ResponseDataHolidaysInner.md)
- [GetMiscHolidayCalendar200ResponseDataNearby](docs/GetMiscHolidayCalendar200ResponseDataNearby.md)
- [GetMiscHolidayCalendar200ResponseDataNearbyNextInner](docs/GetMiscHolidayCalendar200ResponseDataNearbyNextInner.md)
- [GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner](docs/GetMiscHolidayCalendar200ResponseDataNearbyPreviousInner.md)
- [GetMiscHolidayCalendar200ResponseDataQuery](docs/GetMiscHolidayCalendar200ResponseDataQuery.md)
- [GetMiscHolidayCalendar200ResponseDataSummary](docs/GetMiscHolidayCalendar200ResponseDataSummary.md)
- [GetMiscHolidayCalendar400Response](docs/GetMiscHolidayCalendar400Response.md)
- [GetMiscHotboard200Response](docs/GetMiscHotboard200Response.md)
- [GetMiscHotboard200ResponseListInner](docs/GetMiscHotboard200ResponseListInner.md)
- [GetMiscHotboard200ResponseResultsInner](docs/GetMiscHotboard200ResponseResultsInner.md)
- [GetMiscHotboard400Response](docs/GetMiscHotboard400Response.md)
- [GetMiscHotboard500Response](docs/GetMiscHotboard500Response.md)
- [GetMiscHotboard502Response](docs/GetMiscHotboard502Response.md)
- [GetMiscLunartime200Response](docs/GetMiscLunartime200Response.md)
- [GetMiscLunartime200ResponseData](docs/GetMiscLunartime200ResponseData.md)
- [GetMiscLunartime400Response](docs/GetMiscLunartime400Response.md)
- [GetMiscPhoneinfo200Response](docs/GetMiscPhoneinfo200Response.md)
- [GetMiscPhoneinfo400Response](docs/GetMiscPhoneinfo400Response.md)
- [GetMiscPhoneinfo500Response](docs/GetMiscPhoneinfo500Response.md)
- [GetMiscRandomnumber200Response](docs/GetMiscRandomnumber200Response.md)
- [GetMiscRandomnumber400Response](docs/GetMiscRandomnumber400Response.md)
- [GetMiscTimestamp200Response](docs/GetMiscTimestamp200Response.md)
- [GetMiscTimestamp400Response](docs/GetMiscTimestamp400Response.md)
- [GetMiscTrackingCarriers200Response](docs/GetMiscTrackingCarriers200Response.md)
- [GetMiscTrackingCarriers200ResponseData](docs/GetMiscTrackingCarriers200ResponseData.md)
- [GetMiscTrackingCarriers200ResponseDataCarriersInner](docs/GetMiscTrackingCarriers200ResponseDataCarriersInner.md)
- [GetMiscTrackingDetect200Response](docs/GetMiscTrackingDetect200Response.md)
- [GetMiscTrackingDetect200ResponseData](docs/GetMiscTrackingDetect200ResponseData.md)
- [GetMiscTrackingDetect200ResponseDataAlternativesInner](docs/GetMiscTrackingDetect200ResponseDataAlternativesInner.md)
- [GetMiscTrackingDetect404Response](docs/GetMiscTrackingDetect404Response.md)
- [GetMiscTrackingQuery200Response](docs/GetMiscTrackingQuery200Response.md)
- [GetMiscTrackingQuery200ResponseData](docs/GetMiscTrackingQuery200ResponseData.md)
- [GetMiscTrackingQuery200ResponseDataTracksInner](docs/GetMiscTrackingQuery200ResponseDataTracksInner.md)
- [GetMiscTrackingQuery400Response](docs/GetMiscTrackingQuery400Response.md)
- [GetMiscTrackingQuery404Response](docs/GetMiscTrackingQuery404Response.md)
- [GetMiscWeather200Response](docs/GetMiscWeather200Response.md)
- [GetMiscWeather200ResponseAirPollutants](docs/GetMiscWeather200ResponseAirPollutants.md)
- [GetMiscWeather200ResponseForecastInner](docs/GetMiscWeather200ResponseForecastInner.md)
- [GetMiscWeather200ResponseHourlyForecastInner](docs/GetMiscWeather200ResponseHourlyForecastInner.md)
- [GetMiscWeather200ResponseLifeIndices](docs/GetMiscWeather200ResponseLifeIndices.md)
- [GetMiscWeather200ResponseLifeIndicesAirConditioner](docs/GetMiscWeather200ResponseLifeIndicesAirConditioner.md)
- [GetMiscWeather200ResponseLifeIndicesAirPurifier](docs/GetMiscWeather200ResponseLifeIndicesAirPurifier.md)
- [GetMiscWeather200ResponseLifeIndicesAllergy](docs/GetMiscWeather200ResponseLifeIndicesAllergy.md)
- [GetMiscWeather200ResponseLifeIndicesBeer](docs/GetMiscWeather200ResponseLifeIndicesBeer.md)
- [GetMiscWeather200ResponseLifeIndicesCarWash](docs/GetMiscWeather200ResponseLifeIndicesCarWash.md)
- [GetMiscWeather200ResponseLifeIndicesClothing](docs/GetMiscWeather200ResponseLifeIndicesClothing.md)
- [GetMiscWeather200ResponseLifeIndicesColdRisk](docs/GetMiscWeather200ResponseLifeIndicesColdRisk.md)
- [GetMiscWeather200ResponseLifeIndicesComfort](docs/GetMiscWeather200ResponseLifeIndicesComfort.md)
- [GetMiscWeather200ResponseLifeIndicesDrying](docs/GetMiscWeather200ResponseLifeIndicesDrying.md)
- [GetMiscWeather200ResponseLifeIndicesExercise](docs/GetMiscWeather200ResponseLifeIndicesExercise.md)
- [GetMiscWeather200ResponseLifeIndicesFishing](docs/GetMiscWeather200ResponseLifeIndicesFishing.md)
- [GetMiscWeather200ResponseLifeIndicesMood](docs/GetMiscWeather200ResponseLifeIndicesMood.md)
- [GetMiscWeather200ResponseLifeIndicesPollen](docs/GetMiscWeather200ResponseLifeIndicesPollen.md)
- [GetMiscWeather200ResponseLifeIndicesSunscreen](docs/GetMiscWeather200ResponseLifeIndicesSunscreen.md)
- [GetMiscWeather200ResponseLifeIndicesTraffic](docs/GetMiscWeather200ResponseLifeIndicesTraffic.md)
- [GetMiscWeather200ResponseLifeIndicesTravel](docs/GetMiscWeather200ResponseLifeIndicesTravel.md)
- [GetMiscWeather200ResponseLifeIndicesUmbrella](docs/GetMiscWeather200ResponseLifeIndicesUmbrella.md)
- [GetMiscWeather200ResponseLifeIndicesUv](docs/GetMiscWeather200ResponseLifeIndicesUv.md)
- [GetMiscWeather200ResponseMinutelyPrecip](docs/GetMiscWeather200ResponseMinutelyPrecip.md)
- [GetMiscWeather200ResponseMinutelyPrecipDataInner](docs/GetMiscWeather200ResponseMinutelyPrecipDataInner.md)
- [GetMiscWeather400Response](docs/GetMiscWeather400Response.md)
- [GetMiscWeather404Response](docs/GetMiscWeather404Response.md)
- [GetMiscWeather500Response](docs/GetMiscWeather500Response.md)
- [GetMiscWeather503Response](docs/GetMiscWeather503Response.md)
- [GetMiscWorldtime200Response](docs/GetMiscWorldtime200Response.md)
- [GetMiscWorldtime400Response](docs/GetMiscWorldtime400Response.md)
- [GetMiscWorldtime404Response](docs/GetMiscWorldtime404Response.md)
- [GetNetworkDns200Response](docs/GetNetworkDns200Response.md)
- [GetNetworkDns200ResponseRecordsInner](docs/GetNetworkDns200ResponseRecordsInner.md)
- [GetNetworkDns400Response](docs/GetNetworkDns400Response.md)
- [GetNetworkDns404Response](docs/GetNetworkDns404Response.md)
- [GetNetworkIcp200Response](docs/GetNetworkIcp200Response.md)
- [GetNetworkIcp404Response](docs/GetNetworkIcp404Response.md)
- [GetNetworkIpinfo200Response](docs/GetNetworkIpinfo200Response.md)
- [GetNetworkIpinfo400Response](docs/GetNetworkIpinfo400Response.md)
- [GetNetworkIpinfo404Response](docs/GetNetworkIpinfo404Response.md)
- [GetNetworkIpinfo500Response](docs/GetNetworkIpinfo500Response.md)
- [GetNetworkMyip200Response](docs/GetNetworkMyip200Response.md)
- [GetNetworkMyip400Response](docs/GetNetworkMyip400Response.md)
- [GetNetworkMyip500Response](docs/GetNetworkMyip500Response.md)
- [GetNetworkPing200Response](docs/GetNetworkPing200Response.md)
- [GetNetworkPing400Response](docs/GetNetworkPing400Response.md)
- [GetNetworkPing429Response](docs/GetNetworkPing429Response.md)
- [GetNetworkPingmyip200Response](docs/GetNetworkPingmyip200Response.md)
- [GetNetworkPingmyip404Response](docs/GetNetworkPingmyip404Response.md)
- [GetNetworkPortscan200Response](docs/GetNetworkPortscan200Response.md)
- [GetNetworkPortscan400Response](docs/GetNetworkPortscan400Response.md)
- [GetNetworkPortscan500Response](docs/GetNetworkPortscan500Response.md)
- [GetNetworkUrlstatus200Response](docs/GetNetworkUrlstatus200Response.md)
- [GetNetworkUrlstatus200ResponseOneOf](docs/GetNetworkUrlstatus200ResponseOneOf.md)
- [GetNetworkUrlstatus200ResponseOneOf1](docs/GetNetworkUrlstatus200ResponseOneOf1.md)
- [GetNetworkUrlstatus502Response](docs/GetNetworkUrlstatus502Response.md)
- [GetNetworkWhois200Response](docs/GetNetworkWhois200Response.md)
- [GetNetworkWhois200ResponseOneOf](docs/GetNetworkWhois200ResponseOneOf.md)
- [GetNetworkWhois200ResponseOneOf1](docs/GetNetworkWhois200ResponseOneOf1.md)
- [GetNetworkWhois404Response](docs/GetNetworkWhois404Response.md)
- [GetNetworkWxdomain200Response](docs/GetNetworkWxdomain200Response.md)
- [GetNetworkWxdomain502Response](docs/GetNetworkWxdomain502Response.md)
- [GetRandomImage404Response](docs/GetRandomImage404Response.md)
- [GetRandomImage500Response](docs/GetRandomImage500Response.md)
- [GetRandomString200Response](docs/GetRandomString200Response.md)
- [GetRandomString400Response](docs/GetRandomString400Response.md)
- [GetRandomString500Response](docs/GetRandomString500Response.md)
- [GetSaying200Response](docs/GetSaying200Response.md)
- [GetSaying500Response](docs/GetSaying500Response.md)
- [GetSearchEngines200Response](docs/GetSearchEngines200Response.md)
- [GetSearchEngines200ResponseEngine](docs/GetSearchEngines200ResponseEngine.md)
- [GetSearchEngines200ResponseLimits](docs/GetSearchEngines200ResponseLimits.md)
- [GetSensitiveWordAnalyzeQuery400Response](docs/GetSensitiveWordAnalyzeQuery400Response.md)
- [GetSocialBilibiliArchives200Response](docs/GetSocialBilibiliArchives200Response.md)
- [GetSocialBilibiliArchives200ResponseVideosInner](docs/GetSocialBilibiliArchives200ResponseVideosInner.md)
- [GetSocialBilibiliArchives400Response](docs/GetSocialBilibiliArchives400Response.md)
- [GetSocialBilibiliArchives404Response](docs/GetSocialBilibiliArchives404Response.md)
- [GetSocialBilibiliArchives500Response](docs/GetSocialBilibiliArchives500Response.md)
- [GetSocialBilibiliLiveroom200Response](docs/GetSocialBilibiliLiveroom200Response.md)
- [GetSocialBilibiliReplies200Response](docs/GetSocialBilibiliReplies200Response.md)
- [GetSocialBilibiliReplies200ResponsePage](docs/GetSocialBilibiliReplies200ResponsePage.md)
- [GetSocialBilibiliReplies200ResponseRepliesInner](docs/GetSocialBilibiliReplies200ResponseRepliesInner.md)
- [GetSocialBilibiliReplies200ResponseRepliesInnerContent](docs/GetSocialBilibiliReplies200ResponseRepliesInnerContent.md)
- [GetSocialBilibiliReplies200ResponseRepliesInnerMember](docs/GetSocialBilibiliReplies200ResponseRepliesInnerMember.md)
- [GetSocialBilibiliReplies200ResponseRepliesInnerMemberLevelInfo](docs/GetSocialBilibiliReplies200ResponseRepliesInnerMemberLevelInfo.md)
- [GetSocialBilibiliUserinfo200Response](docs/GetSocialBilibiliUserinfo200Response.md)
- [GetSocialBilibiliUserinfo200ResponseData](docs/GetSocialBilibiliUserinfo200ResponseData.md)
- [GetSocialBilibiliUserinfo400Response](docs/GetSocialBilibiliUserinfo400Response.md)
- [GetSocialBilibiliUserinfo404Response](docs/GetSocialBilibiliUserinfo404Response.md)
- [GetSocialBilibiliUserinfo502Response](docs/GetSocialBilibiliUserinfo502Response.md)
- [GetSocialBilibiliVideoinfo200Response](docs/GetSocialBilibiliVideoinfo200Response.md)
- [GetSocialBilibiliVideoinfo200ResponseOwner](docs/GetSocialBilibiliVideoinfo200ResponseOwner.md)
- [GetSocialBilibiliVideoinfo200ResponsePagesInner](docs/GetSocialBilibiliVideoinfo200ResponsePagesInner.md)
- [GetSocialBilibiliVideoinfo200ResponseStat](docs/GetSocialBilibiliVideoinfo200ResponseStat.md)
- [GetSocialQqGroupinfo200Response](docs/GetSocialQqGroupinfo200Response.md)
- [GetSocialQqGroupinfo400Response](docs/GetSocialQqGroupinfo400Response.md)
- [GetSocialQqGroupinfo404Response](docs/GetSocialQqGroupinfo404Response.md)
- [GetSocialQqUserinfo200Response](docs/GetSocialQqUserinfo200Response.md)
- [GetSocialQqUserinfo400Response](docs/GetSocialQqUserinfo400Response.md)
- [GetSocialQqUserinfo404Response](docs/GetSocialQqUserinfo404Response.md)
- [GetStatusRatelimit200Response](docs/GetStatusRatelimit200Response.md)
- [GetStatusRatelimit401Response](docs/GetStatusRatelimit401Response.md)
- [GetStatusUsage200Response](docs/GetStatusUsage200Response.md)
- [GetStatusUsage200ResponseAnyOf](docs/GetStatusUsage200ResponseAnyOf.md)
- [GetStatusUsage200ResponseAnyOf1](docs/GetStatusUsage200ResponseAnyOf1.md)
- [GetStatusUsage200ResponseAnyOfEndpointsInner](docs/GetStatusUsage200ResponseAnyOfEndpointsInner.md)
- [GetStatusUsage200ResponseAnyOfUnaggregated](docs/GetStatusUsage200ResponseAnyOfUnaggregated.md)
- [GetStatusUsage404Response](docs/GetStatusUsage404Response.md)
- [GetTextMd5200Response](docs/GetTextMd5200Response.md)
- [GetTextMd5400Response](docs/GetTextMd5400Response.md)
- [GetWebTomarkdownAsyncStatus200Response](docs/GetWebTomarkdownAsyncStatus200Response.md)
- [GetWebTomarkdownAsyncStatus200ResponseAnyOf](docs/GetWebTomarkdownAsyncStatus200ResponseAnyOf.md)
- [GetWebTomarkdownAsyncStatus200ResponseAnyOf1](docs/GetWebTomarkdownAsyncStatus200ResponseAnyOf1.md)
- [GetWebTomarkdownAsyncStatus200ResponseAnyOf2](docs/GetWebTomarkdownAsyncStatus200ResponseAnyOf2.md)
- [GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result](docs/GetWebTomarkdownAsyncStatus200ResponseAnyOf2Result.md)
- [GetWebTomarkdownAsyncStatus200ResponseAnyOf3](docs/GetWebTomarkdownAsyncStatus200ResponseAnyOf3.md)
- [GetWebTomarkdownAsyncStatus404Response](docs/GetWebTomarkdownAsyncStatus404Response.md)
- [GetWebparseExtractimages200Response](docs/GetWebparseExtractimages200Response.md)
- [GetWebparseExtractimages500Response](docs/GetWebparseExtractimages500Response.md)
- [GetWebparseMetadata200Response](docs/GetWebparseMetadata200Response.md)
- [GetWebparseMetadata500Response](docs/GetWebparseMetadata500Response.md)
- [PostAiTranslate200Response](docs/PostAiTranslate200Response.md)
- [PostAiTranslate200ResponseBatchDataInner](docs/PostAiTranslate200ResponseBatchDataInner.md)
- [PostAiTranslate200ResponseBatchSummary](docs/PostAiTranslate200ResponseBatchSummary.md)
- [PostAiTranslate200ResponseData](docs/PostAiTranslate200ResponseData.md)
- [PostAiTranslate200ResponseDataExplanation](docs/PostAiTranslate200ResponseDataExplanation.md)
- [PostAiTranslate200ResponsePerformance](docs/PostAiTranslate200ResponsePerformance.md)
- [PostAiTranslate200ResponseQualityMetrics](docs/PostAiTranslate200ResponseQualityMetrics.md)
- [PostAiTranslate400Response](docs/PostAiTranslate400Response.md)
- [PostAiTranslate401Response](docs/PostAiTranslate401Response.md)
- [PostAiTranslate429Response](docs/PostAiTranslate429Response.md)
- [PostAiTranslate500Response](docs/PostAiTranslate500Response.md)
- [PostAiTranslateRequest](docs/PostAiTranslateRequest.md)
- [PostAnswerbookAsk200Response](docs/PostAnswerbookAsk200Response.md)
- [PostAnswerbookAskRequest](docs/PostAnswerbookAskRequest.md)
- [PostClipzyStore200Response](docs/PostClipzyStore200Response.md)
- [PostClipzyStore400Response](docs/PostClipzyStore400Response.md)
- [PostClipzyStore413Response](docs/PostClipzyStore413Response.md)
- [PostClipzyStoreRequest](docs/PostClipzyStoreRequest.md)
- [PostConvertJson200Response](docs/PostConvertJson200Response.md)
- [PostConvertJson400Response](docs/PostConvertJson400Response.md)
- [PostConvertJsonRequest](docs/PostConvertJsonRequest.md)
- [PostImageCompress400Response](docs/PostImageCompress400Response.md)
- [PostImageCompress500Response](docs/PostImageCompress500Response.md)
- [PostImageFrombase64200Response](docs/PostImageFrombase64200Response.md)
- [PostImageFrombase64400Response](docs/PostImageFrombase64400Response.md)
- [PostImageFrombase64500Response](docs/PostImageFrombase64500Response.md)
- [PostImageFrombase64Request](docs/PostImageFrombase64Request.md)
- [PostImageMotou400Response](docs/PostImageMotou400Response.md)
- [PostImageMotou500Response](docs/PostImageMotou500Response.md)
- [PostImageNsfw200Response](docs/PostImageNsfw200Response.md)
- [PostImageNsfw400Response](docs/PostImageNsfw400Response.md)
- [PostImageNsfw413Response](docs/PostImageNsfw413Response.md)
- [PostImageNsfw500Response](docs/PostImageNsfw500Response.md)
- [PostImageSpeechless400Response](docs/PostImageSpeechless400Response.md)
- [PostImageSpeechless500Response](docs/PostImageSpeechless500Response.md)
- [PostImageSpeechlessRequest](docs/PostImageSpeechlessRequest.md)
- [PostImageSvg400Response](docs/PostImageSvg400Response.md)
- [PostImageSvg500Response](docs/PostImageSvg500Response.md)
- [PostMiscDateDiff200Response](docs/PostMiscDateDiff200Response.md)
- [PostMiscDateDiff400Response](docs/PostMiscDateDiff400Response.md)
- [PostMiscDateDiffRequest](docs/PostMiscDateDiffRequest.md)
- [PostSearchAggregate200Response](docs/PostSearchAggregate200Response.md)
- [PostSearchAggregate200ResponseResultsInner](docs/PostSearchAggregate200ResponseResultsInner.md)
- [PostSearchAggregate200ResponseSourcesInner](docs/PostSearchAggregate200ResponseSourcesInner.md)
- [PostSearchAggregate400Response](docs/PostSearchAggregate400Response.md)
- [PostSearchAggregate401Response](docs/PostSearchAggregate401Response.md)
- [PostSearchAggregate429Response](docs/PostSearchAggregate429Response.md)
- [PostSearchAggregate500Response](docs/PostSearchAggregate500Response.md)
- [PostSearchAggregateRequest](docs/PostSearchAggregateRequest.md)
- [PostSensitiveWordAnalyze200Response](docs/PostSensitiveWordAnalyze200Response.md)
- [PostSensitiveWordAnalyze200ResponseResultsInner](docs/PostSensitiveWordAnalyze200ResponseResultsInner.md)
- [PostSensitiveWordAnalyze400Response](docs/PostSensitiveWordAnalyze400Response.md)
- [PostSensitiveWordAnalyze401Response](docs/PostSensitiveWordAnalyze401Response.md)
- [PostSensitiveWordAnalyze429Response](docs/PostSensitiveWordAnalyze429Response.md)
- [PostSensitiveWordAnalyzeRequest](docs/PostSensitiveWordAnalyzeRequest.md)
- [PostSensitiveWordQuickCheck200Response](docs/PostSensitiveWordQuickCheck200Response.md)
- [PostSensitiveWordQuickCheckRequest](docs/PostSensitiveWordQuickCheckRequest.md)
- [PostTextAesDecrypt200Response](docs/PostTextAesDecrypt200Response.md)
- [PostTextAesDecrypt400Response](docs/PostTextAesDecrypt400Response.md)
- [PostTextAesDecrypt500Response](docs/PostTextAesDecrypt500Response.md)
- [PostTextAesDecryptAdvanced200Response](docs/PostTextAesDecryptAdvanced200Response.md)
- [PostTextAesDecryptAdvanced400Response](docs/PostTextAesDecryptAdvanced400Response.md)
- [PostTextAesDecryptAdvancedRequest](docs/PostTextAesDecryptAdvancedRequest.md)
- [PostTextAesDecryptRequest](docs/PostTextAesDecryptRequest.md)
- [PostTextAesEncrypt200Response](docs/PostTextAesEncrypt200Response.md)
- [PostTextAesEncrypt400Response](docs/PostTextAesEncrypt400Response.md)
- [PostTextAesEncrypt500Response](docs/PostTextAesEncrypt500Response.md)
- [PostTextAesEncryptAdvanced200Response](docs/PostTextAesEncryptAdvanced200Response.md)
- [PostTextAesEncryptAdvanced400Response](docs/PostTextAesEncryptAdvanced400Response.md)
- [PostTextAesEncryptAdvancedRequest](docs/PostTextAesEncryptAdvancedRequest.md)
- [PostTextAesEncryptRequest](docs/PostTextAesEncryptRequest.md)
- [PostTextAnalyze200Response](docs/PostTextAnalyze200Response.md)
- [PostTextAnalyze400Response](docs/PostTextAnalyze400Response.md)
- [PostTextAnalyzeRequest](docs/PostTextAnalyzeRequest.md)
- [PostTextBase64Decode200Response](docs/PostTextBase64Decode200Response.md)
- [PostTextBase64Decode400Response](docs/PostTextBase64Decode400Response.md)
- [PostTextBase64DecodeRequest](docs/PostTextBase64DecodeRequest.md)
- [PostTextBase64Encode200Response](docs/PostTextBase64Encode200Response.md)
- [PostTextBase64Encode400Response](docs/PostTextBase64Encode400Response.md)
- [PostTextBase64EncodeRequest](docs/PostTextBase64EncodeRequest.md)
- [PostTextConvert200Response](docs/PostTextConvert200Response.md)
- [PostTextConvert400Response](docs/PostTextConvert400Response.md)
- [PostTextConvertRequest](docs/PostTextConvertRequest.md)
- [PostTextMd5400Response](docs/PostTextMd5400Response.md)
- [PostTextMd5Request](docs/PostTextMd5Request.md)
- [PostTextMd5Verify200Response](docs/PostTextMd5Verify200Response.md)
- [PostTextMd5Verify400Response](docs/PostTextMd5Verify400Response.md)
- [PostTextMd5VerifyRequest](docs/PostTextMd5VerifyRequest.md)
- [PostTranslateStream400Response](docs/PostTranslateStream400Response.md)
- [PostTranslateStream500Response](docs/PostTranslateStream500Response.md)
- [PostTranslateStreamRequest](docs/PostTranslateStreamRequest.md)
- [PostTranslateText200Response](docs/PostTranslateText200Response.md)
- [PostTranslateText400Response](docs/PostTranslateText400Response.md)
- [PostTranslateText500Response](docs/PostTranslateText500Response.md)
- [PostTranslateTextRequest](docs/PostTranslateTextRequest.md)
- [PostWebTomarkdownAsync202Response](docs/PostWebTomarkdownAsync202Response.md)
- [PostWebTomarkdownAsync400Response](docs/PostWebTomarkdownAsync400Response.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.17.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
