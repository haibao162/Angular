function countGetAppidAndToken(token){
    var headers = [{"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
 
    var values = [];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index&token=" + token + "&lang=zh_CN",
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}

function countGetArticlePageView(articleId, appIdToken, startDate, endDate){
    
    var headers = [{"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [];
    
    var jsonData = {
        url:"https://mta.qq.com/mta/wechat/ctr_article_detail/get_trend_chart_data?article_id=" + articleId + "&index=IntPageReadUser&chart_start_date=" + startDate + "&chart_date_len=30&" + "start_date=" + startDate + "&end_date=" + endDate + "&need_compare=0&start_compare_date=&end_compare_date=&app_id=&appid=" + appIdToken.appid + "&pluginid=luopan&token=" + appIdToken.pluginToken + "&devtype=" + appIdToken.devtype + "&time_type=day&rnd=1405498678381&ajax=1",
        headers:headers,
        values:values,
    };
    
    return JSON.stringify(jsonData);
}



function countGetUserCount(appIdToken, startDate, endDate){
    var headers = [];
    
    var values = [];
    
    var jsonData = {
        url:"https://mta.qq.com/mta/wechat/ctr_user_summary/get_key_index_data_and_chart?" + "start_date=" + startDate + "" + "&end_date=" + endDate + "" + "&need_compare=0" + "&start_compare_date=" + "&end_compare_date=" + "&app_id=" + "&appid=" + appIdToken.appid + "&pluginid=luopan&token=" + appIdToken.pluginToken + "&from=" + "&devtype=" + appIdToken.devtype + "" + "&time_type=day" + "&rnd=" + (new Date().valueOf()) + "&ajax=1",
        headers:headers,
        values:values,
    };
    return JSON.stringify(jsonData);
}

function countGetUserAttrCount(appIdToken, index, date){
    
    var headers = [];
    
    var values = [];
    
    var jsonData = {
        url:"https://mta.qq.com/mta/wechat/ctr_user_attr/get_table_data?index=" + index + "&start_date=" + date + "&end_date=" + date + "&need_compare=&start_compare_date=&end_compare_date=&app_id=&appid=" + appIdToken.appid + "&pluginid=luopan&token=" + appIdToken.pluginToken + "&devtype=" + appIdToken.devtype + "&rnd=1396601639946",
        headers:headers,
        values:values,
    };
    
    return JSON.stringify(jsonData);
}



function countGetAritcleCount(appIdToken, page, start_date, end_date, page_index){
	  var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mta.qq.com"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36 CoolNovo/2.0.9.20"},
                   {"X-Requested-With":"XMLHttpRequest"}];
	    
	    var values = [];
	    
	    var jsonData = {
	        url:"https://mta.qq.com/mta/wechat/ctr_article_detail/get_list?sort=RefDate%20desc&keyword=&page=" + page + "&appid=" + appIdToken.appid + "&pluginid=luopan&token=" + appIdToken.pluginToken + "&from=&devtype=" + appIdToken.devtype + "&time_type=day&start_date=" + start_date + "&end_date=" + end_date + "&need_compare=0&app_id=&rnd=" + (new Date().valueOf()) + "&ajax=1",
	        headers:headers,
	        values:values,
	    };
	    return JSON.stringify(jsonData);
};