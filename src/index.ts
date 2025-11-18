export class UapiError extends Error {
  constructor(public code: string, public status: number, public details?: any) {
    super(`${status} ${code}`)
  }
}

export class UapiClient {
  constructor(private baseURL: string, private token?: string) {
    ;(this as any)["Clipzy 在线剪贴板"] = this.clipzyZaiXianJianTieBan
    ;(this as any)["Convert"] = this.convert
    ;(this as any)["Daily"] = this.daily
    ;(this as any)["Game"] = this.game
    ;(this as any)["Image"] = this.image
    ;(this as any)["Misc"] = this.misc
    ;(this as any)["Network"] = this.network
    ;(this as any)["Poem"] = this.poem
    ;(this as any)["Random"] = this.random
    ;(this as any)["Social"] = this.social
    ;(this as any)["Status"] = this.status
    ;(this as any)["Text"] = this.text
    ;(this as any)["Translate"] = this.translate
    ;(this as any)["WebParse"] = this.webparse
    ;(this as any)["敏感词识别"] = this.minGanCiShiBie
    ;(this as any)["智能搜索"] = this.zhiNengSouSuo
  }
  clipzyZaiXianJianTieBan = new ClipzyZaiXianJianTieBanApi(this)
  convert = new ConvertApi(this)
  daily = new DailyApi(this)
  game = new GameApi(this)
  image = new ImageApi(this)
  misc = new MiscApi(this)
  network = new NetworkApi(this)
  poem = new PoemApi(this)
  random = new RandomApi(this)
  social = new SocialApi(this)
  status = new StatusApi(this)
  text = new TextApi(this)
  translate = new TranslateApi(this)
  webparse = new WebparseApi(this)
  minGanCiShiBie = new MinGanCiShiBieApi(this)
  zhiNengSouSuo = new ZhiNengSouSuoApi(this)
  async _request(method: string, path: string, params?: Record<string,any>, body?: any) {
    const url = new URL(this.baseURL.replace(/\/$/, '') + path)
    if (params) Object.entries(params).forEach(([k,v]) => url.searchParams.set(k, String(v)))
    const res = await fetch(url.toString(), { method, headers: { 'Content-Type':'application/json', ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}) }, body: body ? JSON.stringify(body) : undefined })
    if (!res.ok) {
      let data:any=null; try { data = await res.json() } catch {}
      const code = (data?.code || 'API_ERROR').toUpperCase()
      throw new UapiError(code, res.status, data?.details)
    }
    const ct = res.headers.get('content-type') || ''
    return ct.includes('application/json') ? res.json() : res.arrayBuffer()
  }
}
class ClipzyZaiXianJianTieBanApi {
  constructor(private c: UapiClient) {}
  async getClipzyGet(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["id"] !== undefined) params["id"] = args["id"]
    let path = '/api/get'
    return this.c._request('GET', path, params)
  }
  async getClipzyRaw(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["key"] !== undefined) params["key"] = args["key"]
    let path = '/api/raw/{id}'
    if (args['id'] !== undefined) path = path.replace('{' + 'id' + '}', String(args['id']))
    return this.c._request('GET', path, params)
  }
  async postClipzyStore(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/api/store'
    return this.c._request('POST', path, params)
  }
}
class ConvertApi {
  constructor(private c: UapiClient) {}
  async getConvertUnixtime(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["time"] !== undefined) params["time"] = args["time"]
    let path = '/convert/unixtime'
    return this.c._request('GET', path, params)
  }
  async postConvertJson(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/convert/json'
    return this.c._request('POST', path, params)
  }
}
class DailyApi {
  constructor(private c: UapiClient) {}
  async getDailyNewsImage(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/daily/news-image'
    return this.c._request('GET', path, params)
  }
}
class GameApi {
  constructor(private c: UapiClient) {}
  async getGameEpicFree(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/game/epic-free'
    return this.c._request('GET', path, params)
  }
  async getGameMinecraftHistoryid(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["uuid"] !== undefined) params["uuid"] = args["uuid"]
    let path = '/game/minecraft/historyid'
    return this.c._request('GET', path, params)
  }
  async getGameMinecraftServerstatus(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["server"] !== undefined) params["server"] = args["server"]
    let path = '/game/minecraft/serverstatus'
    return this.c._request('GET', path, params)
  }
  async getGameMinecraftUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["username"] !== undefined) params["username"] = args["username"]
    let path = '/game/minecraft/userinfo'
    return this.c._request('GET', path, params)
  }
  async getGameSteamSummary(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["steamid"] !== undefined) params["steamid"] = args["steamid"]
    if (args["id"] !== undefined) params["id"] = args["id"]
    if (args["id3"] !== undefined) params["id3"] = args["id3"]
    if (args["key"] !== undefined) params["key"] = args["key"]
    let path = '/game/steam/summary'
    return this.c._request('GET', path, params)
  }
}
class ImageApi {
  constructor(private c: UapiClient) {}
  async getAvatarGravatar(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["email"] !== undefined) params["email"] = args["email"]
    if (args["hash"] !== undefined) params["hash"] = args["hash"]
    if (args["s"] !== undefined) params["s"] = args["s"]
    if (args["d"] !== undefined) params["d"] = args["d"]
    if (args["r"] !== undefined) params["r"] = args["r"]
    let path = '/avatar/gravatar'
    return this.c._request('GET', path, params)
  }
  async getImageBingDaily(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/image/bing-daily'
    return this.c._request('GET', path, params)
  }
  async getImageMotou(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["qq"] !== undefined) params["qq"] = args["qq"]
    if (args["bg_color"] !== undefined) params["bg_color"] = args["bg_color"]
    let path = '/image/motou'
    return this.c._request('GET', path, params)
  }
  async getImageQrcode(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["text"] !== undefined) params["text"] = args["text"]
    if (args["size"] !== undefined) params["size"] = args["size"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/image/qrcode'
    return this.c._request('GET', path, params)
  }
  async getImageTobase64(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/image/tobase64'
    return this.c._request('GET', path, params)
  }
  async postImageCompress(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["level"] !== undefined) params["level"] = args["level"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/image/compress'
    return this.c._request('POST', path, params)
  }
  async postImageFrombase64(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/image/frombase64'
    return this.c._request('POST', path, params)
  }
  async postImageMotou(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/image/motou'
    return this.c._request('POST', path, params)
  }
  async postImageSpeechless(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/image/speechless'
    return this.c._request('POST', path, params)
  }
  async postImageSvg(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["format"] !== undefined) params["format"] = args["format"]
    if (args["width"] !== undefined) params["width"] = args["width"]
    if (args["height"] !== undefined) params["height"] = args["height"]
    if (args["quality"] !== undefined) params["quality"] = args["quality"]
    let path = '/image/svg'
    return this.c._request('POST', path, params)
  }
}
class MiscApi {
  constructor(private c: UapiClient) {}
  async getHistoryProgrammer(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["month"] !== undefined) params["month"] = args["month"]
    if (args["day"] !== undefined) params["day"] = args["day"]
    let path = '/history/programmer'
    return this.c._request('GET', path, params)
  }
  async getHistoryProgrammerToday(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/history/programmer/today'
    return this.c._request('GET', path, params)
  }
  async getMiscHotboard(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/misc/hotboard'
    return this.c._request('GET', path, params)
  }
  async getMiscPhoneinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["phone"] !== undefined) params["phone"] = args["phone"]
    let path = '/misc/phoneinfo'
    return this.c._request('GET', path, params)
  }
  async getMiscRandomnumber(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["min"] !== undefined) params["min"] = args["min"]
    if (args["max"] !== undefined) params["max"] = args["max"]
    if (args["count"] !== undefined) params["count"] = args["count"]
    if (args["allow_repeat"] !== undefined) params["allow_repeat"] = args["allow_repeat"]
    if (args["allow_decimal"] !== undefined) params["allow_decimal"] = args["allow_decimal"]
    if (args["decimal_places"] !== undefined) params["decimal_places"] = args["decimal_places"]
    let path = '/misc/randomnumber'
    return this.c._request('GET', path, params)
  }
  async getMiscTimestamp(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["ts"] !== undefined) params["ts"] = args["ts"]
    let path = '/misc/timestamp'
    return this.c._request('GET', path, params)
  }
  async getMiscTrackingCarriers(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/misc/tracking/carriers'
    return this.c._request('GET', path, params)
  }
  async getMiscTrackingDetect(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["tracking_number"] !== undefined) params["tracking_number"] = args["tracking_number"]
    let path = '/misc/tracking/detect'
    return this.c._request('GET', path, params)
  }
  async getMiscTrackingQuery(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["tracking_number"] !== undefined) params["tracking_number"] = args["tracking_number"]
    if (args["carrier_code"] !== undefined) params["carrier_code"] = args["carrier_code"]
    let path = '/misc/tracking/query'
    return this.c._request('GET', path, params)
  }
  async getMiscWeather(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["city"] !== undefined) params["city"] = args["city"]
    if (args["adcode"] !== undefined) params["adcode"] = args["adcode"]
    let path = '/misc/weather'
    return this.c._request('GET', path, params)
  }
  async getMiscWorldtime(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["city"] !== undefined) params["city"] = args["city"]
    let path = '/misc/worldtime'
    return this.c._request('GET', path, params)
  }
}
class NetworkApi {
  constructor(private c: UapiClient) {}
  async getNetworkDns(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/network/dns'
    return this.c._request('GET', path, params)
  }
  async getNetworkIcp(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    let path = '/network/icp'
    return this.c._request('GET', path, params)
  }
  async getNetworkIpinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["ip"] !== undefined) params["ip"] = args["ip"]
    if (args["source"] !== undefined) params["source"] = args["source"]
    let path = '/network/ipinfo'
    return this.c._request('GET', path, params)
  }
  async getNetworkMyip(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["source"] !== undefined) params["source"] = args["source"]
    let path = '/network/myip'
    return this.c._request('GET', path, params)
  }
  async getNetworkPing(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["host"] !== undefined) params["host"] = args["host"]
    let path = '/network/ping'
    return this.c._request('GET', path, params)
  }
  async getNetworkPingmyip(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/network/pingmyip'
    return this.c._request('GET', path, params)
  }
  async getNetworkPortscan(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["host"] !== undefined) params["host"] = args["host"]
    if (args["port"] !== undefined) params["port"] = args["port"]
    if (args["protocol"] !== undefined) params["protocol"] = args["protocol"]
    let path = '/network/portscan'
    return this.c._request('GET', path, params)
  }
  async getNetworkUrlstatus(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/network/urlstatus'
    return this.c._request('GET', path, params)
  }
  async getNetworkWhois(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/network/whois'
    return this.c._request('GET', path, params)
  }
  async getNetworkWxdomain(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    let path = '/network/wxdomain'
    return this.c._request('GET', path, params)
  }
}
class PoemApi {
  constructor(private c: UapiClient) {}
  async getSaying(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/saying'
    return this.c._request('GET', path, params)
  }
}
class RandomApi {
  constructor(private c: UapiClient) {}
  async getAnswerbookAsk(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["question"] !== undefined) params["question"] = args["question"]
    let path = '/answerbook/ask'
    return this.c._request('GET', path, params)
  }
  async getRandomImage(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["category"] !== undefined) params["category"] = args["category"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/random/image'
    return this.c._request('GET', path, params)
  }
  async getRandomString(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["length"] !== undefined) params["length"] = args["length"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/random/string'
    return this.c._request('GET', path, params)
  }
  async postAnswerbookAsk(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/answerbook/ask'
    return this.c._request('POST', path, params)
  }
}
class SocialApi {
  constructor(private c: UapiClient) {}
  async getGithubRepo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["repo"] !== undefined) params["repo"] = args["repo"]
    let path = '/github/repo'
    return this.c._request('GET', path, params)
  }
  async getSocialBilibiliArchives(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["mid"] !== undefined) params["mid"] = args["mid"]
    if (args["keywords"] !== undefined) params["keywords"] = args["keywords"]
    if (args["orderby"] !== undefined) params["orderby"] = args["orderby"]
    if (args["ps"] !== undefined) params["ps"] = args["ps"]
    if (args["pn"] !== undefined) params["pn"] = args["pn"]
    let path = '/social/bilibili/archives'
    return this.c._request('GET', path, params)
  }
  async getSocialBilibiliLiveroom(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["mid"] !== undefined) params["mid"] = args["mid"]
    if (args["room_id"] !== undefined) params["room_id"] = args["room_id"]
    let path = '/social/bilibili/liveroom'
    return this.c._request('GET', path, params)
  }
  async getSocialBilibiliReplies(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["oid"] !== undefined) params["oid"] = args["oid"]
    if (args["sort"] !== undefined) params["sort"] = args["sort"]
    if (args["ps"] !== undefined) params["ps"] = args["ps"]
    if (args["pn"] !== undefined) params["pn"] = args["pn"]
    let path = '/social/bilibili/replies'
    return this.c._request('GET', path, params)
  }
  async getSocialBilibiliUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["uid"] !== undefined) params["uid"] = args["uid"]
    let path = '/social/bilibili/userinfo'
    return this.c._request('GET', path, params)
  }
  async getSocialBilibiliVideoinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["aid"] !== undefined) params["aid"] = args["aid"]
    if (args["bvid"] !== undefined) params["bvid"] = args["bvid"]
    let path = '/social/bilibili/videoinfo'
    return this.c._request('GET', path, params)
  }
  async getSocialQqGroupinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["group_id"] !== undefined) params["group_id"] = args["group_id"]
    let path = '/social/qq/groupinfo'
    return this.c._request('GET', path, params)
  }
  async getSocialQqUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["qq"] !== undefined) params["qq"] = args["qq"]
    let path = '/social/qq/userinfo'
    return this.c._request('GET', path, params)
  }
}
class StatusApi {
  constructor(private c: UapiClient) {}
  async getStatusRatelimit(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/status/ratelimit'
    return this.c._request('GET', path, params)
  }
  async getStatusUsage(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["path"] !== undefined) params["path"] = args["path"]
    let path = '/status/usage'
    return this.c._request('GET', path, params)
  }
}
class TextApi {
  constructor(private c: UapiClient) {}
  async getTextMd5(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["text"] !== undefined) params["text"] = args["text"]
    let path = '/text/md5'
    return this.c._request('GET', path, params)
  }
  async postTextAesDecrypt(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/aes/decrypt'
    return this.c._request('POST', path, params)
  }
  async postTextAesEncrypt(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/aes/encrypt'
    return this.c._request('POST', path, params)
  }
  async postTextAnalyze(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/analyze'
    return this.c._request('POST', path, params)
  }
  async postTextBase64Decode(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/base64/decode'
    return this.c._request('POST', path, params)
  }
  async postTextBase64Encode(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/base64/encode'
    return this.c._request('POST', path, params)
  }
  async postTextMd5(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/md5'
    return this.c._request('POST', path, params)
  }
  async postTextMd5Verify(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/md5/verify'
    return this.c._request('POST', path, params)
  }
}
class TranslateApi {
  constructor(private c: UapiClient) {}
  async getAiTranslateLanguages(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/ai/translate/languages'
    return this.c._request('GET', path, params)
  }
  async postAiTranslate(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["target_lang"] !== undefined) params["target_lang"] = args["target_lang"]
    let path = '/ai/translate'
    return this.c._request('POST', path, params)
  }
  async postTranslateStream(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/translate/stream'
    return this.c._request('POST', path, params)
  }
  async postTranslateText(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["to_lang"] !== undefined) params["to_lang"] = args["to_lang"]
    let path = '/translate/text'
    return this.c._request('POST', path, params)
  }
}
class WebparseApi {
  constructor(private c: UapiClient) {}
  async getWebTomarkdownAsyncStatus(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/web/tomarkdown/async/{task_id}'
    if (args['task_id'] !== undefined) path = path.replace('{' + 'task_id' + '}', String(args['task_id']))
    return this.c._request('GET', path, params)
  }
  async getWebparseExtractimages(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/webparse/extractimages'
    return this.c._request('GET', path, params)
  }
  async getWebparseMetadata(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/webparse/metadata'
    return this.c._request('GET', path, params)
  }
  async postWebTomarkdownAsync(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/web/tomarkdown/async'
    return this.c._request('POST', path, params)
  }
}
class MinGanCiShiBieApi {
  constructor(private c: UapiClient) {}
  async getSensitiveWordAnalyzeQuery(args: any = {}): Promise<any> {
    const params:any = {}
    if (args["keyword"] !== undefined) params["keyword"] = args["keyword"]
    let path = '/sensitive-word/analyze-query'
    return this.c._request('GET', path, params)
  }
  async postSensitiveWordAnalyze(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/sensitive-word/analyze'
    return this.c._request('POST', path, params)
  }
  async postSensitiveWordQuickCheck(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/text/profanitycheck'
    return this.c._request('POST', path, params)
  }
}
class ZhiNengSouSuoApi {
  constructor(private c: UapiClient) {}
  async getSearchEngines(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/search/engines'
    return this.c._request('GET', path, params)
  }
  async postSearchAggregate(args: any = {}): Promise<any> {
    const params:any = {}
    let path = '/search/aggregate'
    return this.c._request('POST', path, params)
  }
}
