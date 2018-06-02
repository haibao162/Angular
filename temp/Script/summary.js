function summaryGetAppidAndToken(token) {
    var headers = [{"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
        {"Accept-Encoding": "gzip,deflate,sdch"},
        {"Accept-Language": "zh-CN,zh;q=0.8"},
        {"Connection": "keep-alive"},
        {"Host": "mp.weixin.qq.com"},
        {"Referer": "https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=" + token},
        {"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = [];

    var jsonData = {
        url: "https://mp.weixin.qq.com/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index&token=" + token + "&lang=zh_CN&f=json",
        headers: headers,
        values: values
    };
    return JSON.stringify(jsonData);
}

/*
 * 用户增长 关键指标详解
 * 
 * 新增人数 index=NewUser 取消关注人数 index=CancelUser 净增人数 index=NetUser 累计人数
 * index=CumulateUser
 * source_list -1(全部) 35(搜索公众号名称) 3(搜索微信号) 43(图文消息右上角菜单) 17(名片分享) 0(扫二维码及其他)
 */
function summaryCtrUserSummaryGetTrendChartData(index, source_list, appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"index": index + ""},
        {"start_date": start_date + ""},
        {"end_date": end_date + ""},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid + ""},
        {"pluginid": "luopan"},
        {"token": appIdToken.token + ""},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype + ""},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    if (index == "NewUser") {
        values.push({"source_list": source_list + ""});
    }

//    var values = [];

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_summary/get_trend_chart_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 用户分析 用户增长 详细数据
function summaryCtrUserSummaryGetTableData(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_summary/get_table_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 用户分析 用户增长 昨日关键数据
function summaryCtrUserSummaryGetKeyIndexDataAndChart(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_summary/get_key_index_data_and_chart",
        headers: headers,
        values: values
    };
    return JSON.stringify(jsonData);
}

// 用户分析 用户属性(性别分布，语言分布，终端分布)
function summaryCtrUserAttrGetChartData(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    // 有可能传两遍
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_attr/get_key_index_data_and_chart",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 用户分析 用户属性 城市分布
function summaryCtrUserAttrGetCityData(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_attr/get_city_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 用户分析 用户属性 省份分布
function summaryCtrUserAttrGetProviceDistributeData(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_attr/get_provice_distribute_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 用户分析 用户属性 设备分布
function summaryCtrUserAttrGetDeviceData(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_attr/get_device_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 用户分析 用户属性 属性分析表
// index 1(性别) 2(语言) 9(省份) 0(城市) 3(终端) 4(机型)
function summaryCtrUserAttrGetTableData(index, appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"index": index + ""},
        {"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_user_attr/get_table_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

/***********************************************************************/

// 图文分析 图文群发 数据详解 所有图文
function summaryCtrArticleDetailGetList(appIdToken, page, start_date, end_date) {
    var headers = [];
    var values = [{"sort": "RefDate desc"},
        {"keyword": ""},
        {"page": page + ""},
        {"start_date": start_date + ""},
        {"end_date": end_date + ""},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"source_show": "35,3,43,17,0"},
        {"appid": appIdToken.appid + ""},
        {"pluginid": "luopan"},
        {"token": appIdToken.token + ""},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype + ""},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_article_detail/get_list",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 图文分析 图文统计 昨日关键指标
function summaryCtrArticleAnalyseGetKeyIndexDataAndChart(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"source_list": "-1"},
        {"source_show": "0,1,2,3,4"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];


    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_article_analyse/get_key_index_data_and_chart",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 图文分析 图文统计 详细数据
function summaryCtrArticleAnalyseGetTableData(appIdToken, start_date, end_date) {
    var headers = [];
    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"source_list": "-1"},
        {"source_show": "0,1,2,3,4"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_article_analyse/get_table_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 图文分析 图文页阅读
// source_list -1(全部) 0(会话) 1(好友转发) 2(朋友圈) 3(腾讯微博) 4(消息历史页) 5(其他)
// index = IntPageReadUser,IntPageReadCount(图文页阅读人数,图文页阅读次数) OriPageReadUser,OriPageReadCount(原文页阅读人数,原文页阅读次数) ShareUser(分享人数) ShareCount(分享次数) AddToFavUser(微信收藏)
function summaryCtrArticleAnalyseGetTrendChartData(appIdToken, index, source_list, start_date, end_date) {
    var headers = [];

    var values = [{"index": index},
        {"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    if (index == "IntPageReadUser,IntPageReadCount") {
        values.push({"source_list": source_list});
    }

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_article_analyse/get_trend_chart_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}


/*******************************************/
//消息分析 昨日关键指标
function summaryCtrMessageGetKeyIndexDataAndChart(appIdToken, start_date, end_date) {
    var headers = [];

    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_message/get_key_index_data_and_chart",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 消息分析 关键指标详解
// index MsgUser(消息发送人数) MsgCount(消息发送次数) MsgPerUser(人均发送次数)
function summaryCtrMessageGetChartData(appIdToken, index, start_date, end_date) {
    var headers = [];

    var values = [{"index": index},
        {"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    if (index == "IntPageReadUser,IntPageReadCount") {
        values.push({"source_list": source_list});
    }

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_message/get_chart_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 消息分析 消息发送次数分布图
function summaryCtrMessageGetDistributeData(appIdToken, start_date, end_date) {
    var headers = [];

    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];
    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_message/get_distribute_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 消息分析 详细数据
function summaryCtrMessageGetTableData(appIdToken, start_date, end_date) {
    var headers = [];

    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_message/get_table_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

// 消息分析 消息关键字
// iscustom -1(全部) 0(非自定义关键词) 1(自定义关键词)
function summaryCtrKeywordGetTableData(iscustom, appIdToken, start_date, end_date) {
    var headers = [];

    var values = [{"start_date": start_date},
        {"end_date": end_date},
        {"need_compare": "0"},
        {"start_compare_date": ""},
        {"end_compare_date": ""},
        {"app_id": ""},
        {"appid": appIdToken.appid},
        {"pluginid": "luopan"},
        {"token": appIdToken.token},
        {"from": ""},
        {"src": "false"},
        {"devtype": appIdToken.devtype},
        {"time_type": "day"},
        {"rnd": new Date().valueOf() + ""},
        {"ajax": "1"}];

    if (iscustom != -1) {
        values.push(iscustom);
    }

    var jsonData = {
        url: "http://mta.qq.com/mta/wechat/ctr_keyword/get_table_data",
        headers: headers,
        values: values
    };

    return JSON.stringify(jsonData);
}

function sumSysnotify(token, begin, count) {
    var headers = [{"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
        {"Accept-Encoding": "gzip,deflate,sdch"},
        {"Accept-Language": "zh-CN,zh;q=0.8"},
        {"Connection": "keep-alive"},
        {"Host": "mp.weixin.qq.com"},
        {"Referer": "https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=" + token},
        {"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = [{"token": token},
        {"lang": "zh_CN"},
        {"f": "json"},
        {"ajax": 1},
        {"random": "0.6794080848987214"},
        {"begin": begin + ""},
        {"count": count + ""},
        {"status": "0"}];

    var jsonData = {
        url: "https://mp.weixin.qq.com/cgi-bin/sysnotify",
        headers: headers,
        values: values
    };
    return JSON.stringify(jsonData);
}

function pSumSysnotify(response) {
    var jsonData = {};
    jsonData.base_resp = {}

    var json = JSON.parse(response);
    if (json.base_resp.ret == 0) {
        jsonData.data = json.List;
        jsonData.base_resp.ret = 0;
    } else {
        jsonData.base_resp.ret = 1600;
        jsonData.base_resp.msg = "获取通知失败";
    }
    return JSON.stringify(jsonData)
}
//https://mp.weixin.qq.com/merchant/ad_host_pay?action=income_info&token=896487984&lang=zh_CN&f=json&ajax=1&random=0.3120817921435086&start_date=2016-05-09&end_date=2016-05-16&cont_type=0&count=10&begin=0
function sumMerchantAdHostPay(token,start_date,end_date,begin
                              ,count){
    var headers = [{"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
                   {"Accept-Encoding": "gzip,deflate,sdch"},
                   {"Accept-Language": "zh-CN,zh;q=0.8"},
                   {"Connection": "keep-alive"},
                   {"Host": "mp.weixin.qq.com"},
                   {"Referer": "https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=" + token},
                   {"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [];
    
    var jsonData = {
    url: "https://mp.weixin.qq.com/merchant/ad_host_pay?action=income_info&token="+token+"&lang=zh_CN&f=json&ajax=1&random=0.3120817921435086&start_date="+start_date+"&end_date="+end_date+"&cont_type=0&count="+count+"&begin=" + begin,
    headers: headers,
    values: values
    };
    return JSON.stringify(jsonData);
}

function pSumMerchantAdHostPay(response) {
    var jsonData = {};
    jsonData.base_resp = {}
    
    var json = JSON.parse(response);
    if (json.base_resp.ret == 0) {
        delete json['base_resp']
        jsonData.data = json;
        jsonData.base_resp.ret = 0;
    } else {
        jsonData.base_resp.ret = 1600;
        jsonData.base_resp.msg = "失败";
    }
    return JSON.stringify(jsonData)
}


