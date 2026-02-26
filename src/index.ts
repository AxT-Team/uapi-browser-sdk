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
    const body:any = {}
    if (args["id"] !== undefined) params["id"] = args["id"]
    let path = '/api/v1/api/get'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getClipzyRaw(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["key"] !== undefined) params["key"] = args["key"]
    let path = '/api/v1/api/raw/{id}'
    if (args['id'] !== undefined) path = path.replace('{' + 'id' + '}', String(args['id']))
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postClipzyStore(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["compressedData"] !== undefined) body["compressedData"] = args["compressedData"]
    if (args["ttl"] !== undefined) body["ttl"] = args["ttl"]
    let path = '/api/v1/api/store'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class ConvertApi {
  constructor(private c: UapiClient) {}
  async getConvertUnixtime(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["time"] !== undefined) params["time"] = args["time"]
    let path = '/api/v1/convert/unixtime'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postConvertJson(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["content"] !== undefined) body["content"] = args["content"]
    let path = '/api/v1/convert/json'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class DailyApi {
  constructor(private c: UapiClient) {}
  async getDailyNewsImage(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/daily/news-image'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class GameApi {
  constructor(private c: UapiClient) {}
  async getGameEpicFree(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/game/epic-free'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getGameMinecraftHistoryid(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["name"] !== undefined) params["name"] = args["name"]
    if (args["uuid"] !== undefined) params["uuid"] = args["uuid"]
    let path = '/api/v1/game/minecraft/historyid'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getGameMinecraftServerstatus(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["server"] !== undefined) params["server"] = args["server"]
    let path = '/api/v1/game/minecraft/serverstatus'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getGameMinecraftUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["username"] !== undefined) params["username"] = args["username"]
    let path = '/api/v1/game/minecraft/userinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getGameSteamSummary(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["steamid"] !== undefined) params["steamid"] = args["steamid"]
    if (args["id"] !== undefined) params["id"] = args["id"]
    if (args["id3"] !== undefined) params["id3"] = args["id3"]
    if (args["key"] !== undefined) params["key"] = args["key"]
    let path = '/api/v1/game/steam/summary'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class ImageApi {
  constructor(private c: UapiClient) {}
  async getAvatarGravatar(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["email"] !== undefined) params["email"] = args["email"]
    if (args["hash"] !== undefined) params["hash"] = args["hash"]
    if (args["s"] !== undefined) params["s"] = args["s"]
    if (args["d"] !== undefined) params["d"] = args["d"]
    if (args["r"] !== undefined) params["r"] = args["r"]
    let path = '/api/v1/avatar/gravatar'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getImageBingDaily(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/image/bing-daily'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getImageMotou(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["qq"] !== undefined) params["qq"] = args["qq"]
    if (args["bg_color"] !== undefined) params["bg_color"] = args["bg_color"]
    let path = '/api/v1/image/motou'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getImageQrcode(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) params["text"] = args["text"]
    if (args["size"] !== undefined) params["size"] = args["size"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    if (args["transparent"] !== undefined) params["transparent"] = args["transparent"]
    if (args["fgcolor"] !== undefined) params["fgcolor"] = args["fgcolor"]
    if (args["bgcolor"] !== undefined) params["bgcolor"] = args["bgcolor"]
    let path = '/api/v1/image/qrcode'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getImageTobase64(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/image/tobase64'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postImageCompress(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["level"] !== undefined) params["level"] = args["level"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    if (args["file"] !== undefined) body["file"] = args["file"]
    let path = '/api/v1/image/compress'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postImageFrombase64(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["imageData"] !== undefined) body["imageData"] = args["imageData"]
    let path = '/api/v1/image/frombase64'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postImageMotou(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["bg_color"] !== undefined) body["bg_color"] = args["bg_color"]
    if (args["file"] !== undefined) body["file"] = args["file"]
    if (args["image_url"] !== undefined) body["image_url"] = args["image_url"]
    let path = '/api/v1/image/motou'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postImageNsfw(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["file"] !== undefined) body["file"] = args["file"]
    if (args["url"] !== undefined) body["url"] = args["url"]
    let path = '/api/v1/image/nsfw'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postImageSpeechless(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["bottom_text"] !== undefined) body["bottom_text"] = args["bottom_text"]
    if (args["top_text"] !== undefined) body["top_text"] = args["top_text"]
    let path = '/api/v1/image/speechless'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postImageSvg(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["format"] !== undefined) params["format"] = args["format"]
    if (args["width"] !== undefined) params["width"] = args["width"]
    if (args["height"] !== undefined) params["height"] = args["height"]
    if (args["quality"] !== undefined) params["quality"] = args["quality"]
    if (args["file"] !== undefined) body["file"] = args["file"]
    let path = '/api/v1/image/svg'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class MiscApi {
  constructor(private c: UapiClient) {}
  async getHistoryProgrammer(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["month"] !== undefined) params["month"] = args["month"]
    if (args["day"] !== undefined) params["day"] = args["day"]
    let path = '/api/v1/history/programmer'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getHistoryProgrammerToday(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/history/programmer/today'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscDistrict(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["keywords"] !== undefined) params["keywords"] = args["keywords"]
    if (args["adcode"] !== undefined) params["adcode"] = args["adcode"]
    if (args["lat"] !== undefined) params["lat"] = args["lat"]
    if (args["lng"] !== undefined) params["lng"] = args["lng"]
    if (args["level"] !== undefined) params["level"] = args["level"]
    if (args["country"] !== undefined) params["country"] = args["country"]
    if (args["limit"] !== undefined) params["limit"] = args["limit"]
    let path = '/api/v1/misc/district'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscHolidayCalendar(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["date"] !== undefined) params["date"] = args["date"]
    if (args["month"] !== undefined) params["month"] = args["month"]
    if (args["year"] !== undefined) params["year"] = args["year"]
    if (args["timezone"] !== undefined) params["timezone"] = args["timezone"]
    if (args["holiday_type"] !== undefined) params["holiday_type"] = args["holiday_type"]
    if (args["include_nearby"] !== undefined) params["include_nearby"] = args["include_nearby"]
    if (args["nearby_limit"] !== undefined) params["nearby_limit"] = args["nearby_limit"]
    let path = '/api/v1/misc/holiday-calendar'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscHotboard(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["type"] !== undefined) params["type"] = args["type"]
    if (args["time"] !== undefined) params["time"] = args["time"]
    if (args["keyword"] !== undefined) params["keyword"] = args["keyword"]
    if (args["time_start"] !== undefined) params["time_start"] = args["time_start"]
    if (args["time_end"] !== undefined) params["time_end"] = args["time_end"]
    if (args["limit"] !== undefined) params["limit"] = args["limit"]
    if (args["sources"] !== undefined) params["sources"] = args["sources"]
    let path = '/api/v1/misc/hotboard'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscLunartime(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["ts"] !== undefined) params["ts"] = args["ts"]
    if (args["timezone"] !== undefined) params["timezone"] = args["timezone"]
    let path = '/api/v1/misc/lunartime'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscPhoneinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["phone"] !== undefined) params["phone"] = args["phone"]
    let path = '/api/v1/misc/phoneinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscRandomnumber(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["min"] !== undefined) params["min"] = args["min"]
    if (args["max"] !== undefined) params["max"] = args["max"]
    if (args["count"] !== undefined) params["count"] = args["count"]
    if (args["allow_repeat"] !== undefined) params["allow_repeat"] = args["allow_repeat"]
    if (args["allow_decimal"] !== undefined) params["allow_decimal"] = args["allow_decimal"]
    if (args["decimal_places"] !== undefined) params["decimal_places"] = args["decimal_places"]
    let path = '/api/v1/misc/randomnumber'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscTimestamp(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["ts"] !== undefined) params["ts"] = args["ts"]
    let path = '/api/v1/misc/timestamp'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscTrackingCarriers(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/misc/tracking/carriers'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscTrackingDetect(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["tracking_number"] !== undefined) params["tracking_number"] = args["tracking_number"]
    let path = '/api/v1/misc/tracking/detect'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscTrackingQuery(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["tracking_number"] !== undefined) params["tracking_number"] = args["tracking_number"]
    if (args["carrier_code"] !== undefined) params["carrier_code"] = args["carrier_code"]
    if (args["phone"] !== undefined) params["phone"] = args["phone"]
    let path = '/api/v1/misc/tracking/query'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscWeather(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["city"] !== undefined) params["city"] = args["city"]
    if (args["adcode"] !== undefined) params["adcode"] = args["adcode"]
    if (args["extended"] !== undefined) params["extended"] = args["extended"]
    if (args["forecast"] !== undefined) params["forecast"] = args["forecast"]
    if (args["hourly"] !== undefined) params["hourly"] = args["hourly"]
    if (args["minutely"] !== undefined) params["minutely"] = args["minutely"]
    if (args["indices"] !== undefined) params["indices"] = args["indices"]
    if (args["lang"] !== undefined) params["lang"] = args["lang"]
    let path = '/api/v1/misc/weather'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getMiscWorldtime(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["city"] !== undefined) params["city"] = args["city"]
    let path = '/api/v1/misc/worldtime'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postMiscDateDiff(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["end_date"] !== undefined) body["end_date"] = args["end_date"]
    if (args["format"] !== undefined) body["format"] = args["format"]
    if (args["start_date"] !== undefined) body["start_date"] = args["start_date"]
    let path = '/api/v1/misc/date-diff'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class NetworkApi {
  constructor(private c: UapiClient) {}
  async getNetworkDns(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/network/dns'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkIcp(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    let path = '/api/v1/network/icp'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkIpinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["ip"] !== undefined) params["ip"] = args["ip"]
    if (args["source"] !== undefined) params["source"] = args["source"]
    let path = '/api/v1/network/ipinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkMyip(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["source"] !== undefined) params["source"] = args["source"]
    let path = '/api/v1/network/myip'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkPing(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["host"] !== undefined) params["host"] = args["host"]
    let path = '/api/v1/network/ping'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkPingmyip(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/network/pingmyip'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkPortscan(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["host"] !== undefined) params["host"] = args["host"]
    if (args["port"] !== undefined) params["port"] = args["port"]
    if (args["protocol"] !== undefined) params["protocol"] = args["protocol"]
    let path = '/api/v1/network/portscan'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkUrlstatus(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/network/urlstatus'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkWhois(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    if (args["format"] !== undefined) params["format"] = args["format"]
    let path = '/api/v1/network/whois'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getNetworkWxdomain(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["domain"] !== undefined) params["domain"] = args["domain"]
    let path = '/api/v1/network/wxdomain'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class PoemApi {
  constructor(private c: UapiClient) {}
  async getSaying(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/saying'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class RandomApi {
  constructor(private c: UapiClient) {}
  async getAnswerbookAsk(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["question"] !== undefined) params["question"] = args["question"]
    let path = '/api/v1/answerbook/ask'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getRandomImage(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["category"] !== undefined) params["category"] = args["category"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/random/image'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getRandomString(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["length"] !== undefined) params["length"] = args["length"]
    if (args["type"] !== undefined) params["type"] = args["type"]
    let path = '/api/v1/random/string'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postAnswerbookAsk(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["question"] !== undefined) body["question"] = args["question"]
    let path = '/api/v1/answerbook/ask'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class SocialApi {
  constructor(private c: UapiClient) {}
  async getGithubRepo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["repo"] !== undefined) params["repo"] = args["repo"]
    let path = '/api/v1/github/repo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialBilibiliArchives(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["mid"] !== undefined) params["mid"] = args["mid"]
    if (args["keywords"] !== undefined) params["keywords"] = args["keywords"]
    if (args["orderby"] !== undefined) params["orderby"] = args["orderby"]
    if (args["ps"] !== undefined) params["ps"] = args["ps"]
    if (args["pn"] !== undefined) params["pn"] = args["pn"]
    let path = '/api/v1/social/bilibili/archives'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialBilibiliLiveroom(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["mid"] !== undefined) params["mid"] = args["mid"]
    if (args["room_id"] !== undefined) params["room_id"] = args["room_id"]
    let path = '/api/v1/social/bilibili/liveroom'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialBilibiliReplies(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["oid"] !== undefined) params["oid"] = args["oid"]
    if (args["sort"] !== undefined) params["sort"] = args["sort"]
    if (args["ps"] !== undefined) params["ps"] = args["ps"]
    if (args["pn"] !== undefined) params["pn"] = args["pn"]
    let path = '/api/v1/social/bilibili/replies'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialBilibiliUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["uid"] !== undefined) params["uid"] = args["uid"]
    let path = '/api/v1/social/bilibili/userinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialBilibiliVideoinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["aid"] !== undefined) params["aid"] = args["aid"]
    if (args["bvid"] !== undefined) params["bvid"] = args["bvid"]
    let path = '/api/v1/social/bilibili/videoinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialQqGroupinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["group_id"] !== undefined) params["group_id"] = args["group_id"]
    let path = '/api/v1/social/qq/groupinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getSocialQqUserinfo(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["qq"] !== undefined) params["qq"] = args["qq"]
    let path = '/api/v1/social/qq/userinfo'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class StatusApi {
  constructor(private c: UapiClient) {}
  async getStatusRatelimit(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/status/ratelimit'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getStatusUsage(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["path"] !== undefined) params["path"] = args["path"]
    let path = '/api/v1/status/usage'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class TextApi {
  constructor(private c: UapiClient) {}
  async getTextMd5(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) params["text"] = args["text"]
    let path = '/api/v1/text/md5'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextAesDecrypt(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["key"] !== undefined) body["key"] = args["key"]
    if (args["nonce"] !== undefined) body["nonce"] = args["nonce"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/aes/decrypt'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextAesDecryptAdvanced(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["iv"] !== undefined) body["iv"] = args["iv"]
    if (args["key"] !== undefined) body["key"] = args["key"]
    if (args["mode"] !== undefined) body["mode"] = args["mode"]
    if (args["padding"] !== undefined) body["padding"] = args["padding"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/aes/decrypt-advanced'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextAesEncrypt(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["key"] !== undefined) body["key"] = args["key"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/aes/encrypt'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextAesEncryptAdvanced(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["iv"] !== undefined) body["iv"] = args["iv"]
    if (args["key"] !== undefined) body["key"] = args["key"]
    if (args["mode"] !== undefined) body["mode"] = args["mode"]
    if (args["output_format"] !== undefined) body["output_format"] = args["output_format"]
    if (args["padding"] !== undefined) body["padding"] = args["padding"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/aes/encrypt-advanced'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextAnalyze(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/analyze'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextBase64Decode(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/base64/decode'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextBase64Encode(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/base64/encode'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextConvert(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["from"] !== undefined) body["from"] = args["from"]
    if (args["options"] !== undefined) body["options"] = args["options"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    if (args["to"] !== undefined) body["to"] = args["to"]
    let path = '/api/v1/text/convert'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextMd5(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/md5'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTextMd5Verify(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["hash"] !== undefined) body["hash"] = args["hash"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/md5/verify'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class TranslateApi {
  constructor(private c: UapiClient) {}
  async getAiTranslateLanguages(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/ai/translate/languages'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postAiTranslate(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["target_lang"] !== undefined) params["target_lang"] = args["target_lang"]
    if (args["context"] !== undefined) body["context"] = args["context"]
    if (args["fast_mode"] !== undefined) body["fast_mode"] = args["fast_mode"]
    if (args["max_concurrency"] !== undefined) body["max_concurrency"] = args["max_concurrency"]
    if (args["preserve_format"] !== undefined) body["preserve_format"] = args["preserve_format"]
    if (args["source_lang"] !== undefined) body["source_lang"] = args["source_lang"]
    if (args["style"] !== undefined) body["style"] = args["style"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    if (args["texts"] !== undefined) body["texts"] = args["texts"]
    let path = '/api/v1/ai/translate'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTranslateStream(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["from_lang"] !== undefined) body["from_lang"] = args["from_lang"]
    if (args["query"] !== undefined) body["query"] = args["query"]
    if (args["to_lang"] !== undefined) body["to_lang"] = args["to_lang"]
    if (args["tone"] !== undefined) body["tone"] = args["tone"]
    let path = '/api/v1/translate/stream'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postTranslateText(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["to_lang"] !== undefined) params["to_lang"] = args["to_lang"]
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/translate/text'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class WebparseApi {
  constructor(private c: UapiClient) {}
  async getWebTomarkdownAsyncStatus(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/web/tomarkdown/async/{task_id}'
    if (args['task_id'] !== undefined) path = path.replace('{' + 'task_id' + '}', String(args['task_id']))
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getWebparseExtractimages(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/webparse/extractimages'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async getWebparseMetadata(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/webparse/metadata'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postWebTomarkdownAsync(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["url"] !== undefined) params["url"] = args["url"]
    let path = '/api/v1/web/tomarkdown/async'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class MinGanCiShiBieApi {
  constructor(private c: UapiClient) {}
  async getSensitiveWordAnalyzeQuery(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["keyword"] !== undefined) params["keyword"] = args["keyword"]
    let path = '/api/v1/sensitive-word/analyze-query'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postSensitiveWordAnalyze(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["keywords"] !== undefined) body["keywords"] = args["keywords"]
    let path = '/api/v1/sensitive-word/analyze'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postSensitiveWordQuickCheck(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["text"] !== undefined) body["text"] = args["text"]
    let path = '/api/v1/text/profanitycheck'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
class ZhiNengSouSuoApi {
  constructor(private c: UapiClient) {}
  async getSearchEngines(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    let path = '/api/v1/search/engines'
    return this.c._request('GET', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
  async postSearchAggregate(args: any = {}): Promise<any> {
    const params:any = {}
    const body:any = {}
    if (args["fetch_full"] !== undefined) body["fetch_full"] = args["fetch_full"]
    if (args["filetype"] !== undefined) body["filetype"] = args["filetype"]
    if (args["query"] !== undefined) body["query"] = args["query"]
    if (args["site"] !== undefined) body["site"] = args["site"]
    if (args["sort"] !== undefined) body["sort"] = args["sort"]
    if (args["time_range"] !== undefined) body["time_range"] = args["time_range"]
    if (args["timeout_ms"] !== undefined) body["timeout_ms"] = args["timeout_ms"]
    let path = '/api/v1/search/aggregate'
    return this.c._request('POST', path, params, Object.keys(body).length > 0 ? body : undefined)
  }
}
