//获取评论列表
function commentAppmsgCommentList(token, begin, count){
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/appmsgevent?t=wap_templates/discuss/index&action=list_app_msg&type=1&begin="+begin+"&count="+count+"&token="+token+"&lang=zh_CN&mod=wap&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pCommentAppmsgCommentList(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        var comment_list = json.app_msg_list;
        jsonData.comment_list = JSON.parse(comment_list).app_msg;
    }else {
        jsonData.base_resp.ret = 2200;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}

//POST
// action = remove_good_comment//删除评论
// action = set_good_comment
function commentAppmsgCommentGood(token, comment_id, action, user_comment_id) {
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip, deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com "},
                   {"Referer":"https://mp.weixin.qq.com/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&token=370193076&lang=zh_CN "},
                   {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"random": new Date().valueOf() + ""},
                  {"comment_id": comment_id + ""},
                  {"action":action},
                  {"user_comment_id_count":"1"},
                  {"user_comment_id_0":user_comment_id + ""}];
    
    var jsonData = {
        headers : headers,
        values : values,
        url : "https://mp.weixin.qq.com/misc/appmsgcomment"
    }
    return JSON.stringify(jsonData);
}

function pCommentAppmsgCommentGood(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}


function commentAppmsgComment(token,type,begin,comment_id) {
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/appmsgcomment?t=wap_templates/discuss/list&action=list_comment&type="+type+"&begin="+begin+"&count=10&comment_id="+comment_id+"&token="+token+"&lang=zh_CN&mod=wap&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pCommentAppmsgComment(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        var comment_list = json.comment_list;
        jsonData.comment_list = JSON.parse(comment_list).comment;
    }else {
        jsonData.base_resp.ret = -2200;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}


//回复评论
//POST
function commentAppmsgCommentReply (token, comment_id, content_id, content) {
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip, deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&token=370193076&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"random":new Date().valueOf() + ""},
                  {"comment_id":comment_id + ""},
                  {"content_id":content_id + ""},
                  {"content":content + ""}];
    
    var jsonData = {
        headers : headers,
        values : values,
        url : "https://mp.weixin.qq.com/misc/appmsgcomment?action=reply_comment&token=" + token + "&lang=zh_CN"
    }
    return JSON.stringify(jsonData);
}

function pCommentAppmsgCommentReply (response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        jsonData.reply_id = json.reply_id;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}

//删除评论
//POST
function commentAppmsgDeleteReply(token, reply_id,comment_id,content_id) {
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip, deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&token=370193076&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"random": new Date().valueOf() + ""},
                  {"reply_id": reply_id + ""},
                  {"comment_id":comment_id + ""},
                  {"content_id":content_id + ""}]
    
    var jsonData = {
        headers : headers,
        values : values,
        url : "https://mp.weixin.qq.com/misc/appmsgcomment?action=delete_reply&token="+token+"&lang=zh_CN"
    }
    return JSON.stringify(jsonData);
}

function pCommentAppmsgDeleteReply (response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        jsonData.reply_id = json.reply_id;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}

//获取新评论
function commentPollNewCommentCnt (token) {
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/appmsgcomment?action=poll_biz_new_comment_cnt&token=" + token + "&lang=zh_CN&token=" + token + "&lang=zh_CN&f=json&ajax=1&random=" + new Date().valueOf();
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pCommentPollNewCommentCnt (response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        jsonData.new_num = json.new_num;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}

function commentAppMsgCommentListComment(token,type,begin,count,comment_id){
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/appmsgcomment?action=list_comment&mp_version=7&type="+type+"&begin="+begin+"&count="+count+"&comment_id="+comment_id+"&token="+token+"&lang=zh_CN&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pCommentAppMsgCommentListComment(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        var comment_list = json.comment_list;
        jsonData.title = json.title;
        var comment = JSON.parse(comment_list).comment;
        jsonData.comment = comment;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}


//赞赏
function commentAppMsgStatList(token,begin,count){
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/misc/appmsgevent?t=wap_templates/reward/index&action=list_app_msg&type=2&begin="+begin+"&count="+count+"&token="+token+"&lang=zh_CN&mod=wap&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}


function pCommentAppMsgStatList(response){
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        jsonData.app_msg = JSON.parse(json.app_msg_list).app_msg;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}

function commentGetappmsgStat(token,appmsgid,idx,offset,count){
    var headers = [];
    var values = [];
    var url = "https://mp.weixin.qq.com/merchant/reward?action=getappmsgstat&appmsgid="+appmsgid+"&idx="+idx+"&offset="+offset+"&count="+count+"&token="+token+"&lang=zh_CN&mod=wap&f=json";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pCommentGetappmsgStat(response){
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
        var data = json.data;
        data = JSON.parse(data);
        
        jsonData.record_list = data.record_list;
        jsonData.total_count = json.total_count;
        jsonData.total_reward = json.total_reward;
        jsonData.pub_time = json.pub_time;
        jsonData.invite_authority = json.invite_authority;
        jsonData.appmsg_title = json.appmsg_title;
        jsonData.total_usr_count = json.total_usr_count;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    
    return JSON.stringify(jsonData);
}

//回复赞赏
function commnetAppmsgstatReply(token,tofakeid,type,content,out_trade_no) {
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip, deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com "},
                   {"Referer":"https://mp.weixin.qq.com/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&token=370193076&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"type":type + ""},
                  {"content":content + ""},
                  {"r": new Date().valueOf() + ""},
                  {"tofakeid": tofakeid + ""},
                  {"out_trade_no":out_trade_no + ""},
                  {"mod":"wap"}]
    var url = "https://mp.weixin.qq.com/cgi-bin/singlesend";
    
    var jsonData = {
    headers: headers,
    values: values,
    url: url,
    }
    return JSON.stringify(jsonData);
}

function pCommnetAppmsgstatReply(response) {
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    
    if (json.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.ret = -2201;
        jsonData.base_resp.msg = json.base_resp.msg;
    }
    return JSON.stringify(jsonData);
}

