function analyUserAnalysis(token) {
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/useranalysis?&token=" + token + "&lang=zh_CN&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

/**
 *  公众号网页版虽然只能选7天内的数据，但是接口传入的日期可以超过7天
 */
function analyAppmsgAnalysis(token, begin_date, end_date, page_num, page_size) {
    
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/appmsganalysis?action=all&begin_date=" + begin_date + "&end_date=" + end_date + "&order_by=1&order_direction=2" + "&token=" + token + "&lang=zh_CN&f=json&ajax=1&random=" + new Date().valueOf();
    
    var jsonData = {
        headers: headers,
        values: values,
        url: url
    }
    return JSON.stringify(jsonData)
}

function analyMessageanalysis(token){
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/messageanalysis?type=daily&t=statistics/msg&token="+token+"&lang=zh_CN&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pAnalyUserAnalysis(response) {
    var json = JSON.parse(response);
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.data = json.category_list[0].list;
        jsonData.base_resp.ret = 0;
    } else {
        jsonData.base_resp.ret == -2010;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}

function analyGetUserAnalysisAttr(token,begin_date,end_date) {
    var headers = [];
    var values = [];
    var jsonData = {
    url:"https://mp.weixin.qq.com/misc/useranalysis?action=attr&begin_date="+begin_date+"&end_date="+end_date+"&token="+token+"&lang=zh_CN&f=json",
    headers:headers,
    values:values
    }
    return JSON.stringify(jsonData);
}


function pAnalyGetUserAnalysisAttr(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    if (json.base_resp.ret == 0) {
        var data = json.user_portrait.list;
        jsonData.base_resp.ret = 0;
        jsonData.data = data;
    }else{
        jsonData.base_resp.ret == -3000;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}


function pAnalyAppmsganalysis(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        var total_article_data = json.total_article_data;
        //        var article_summary_data = json.article_summary_data;
        
        data = JSON.parse(total_article_data).list;
        if(data == null){
            data = [];
        }
        
        jsonData.total_article_data = data;
        //        jsonData.article_summary_data = JSON.parse(article_summary_data);
        //        jsonData.data = json;
        jsonData.base_resp.ret = 0;
    } else {
        jsonData.base_resp.ret == -2010;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}

function pAnalyMessageanalysis(response){
    var json = JSON.parse(response);
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.data = json.list;
        jsonData.base_resp.ret = 0;
    } else {
        jsonData.base_resp.ret == -2010;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}