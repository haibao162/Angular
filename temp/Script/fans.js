function fansGetFans(token, group_id, page_index, page_total){
    var headers = [];
    var values = [];
    
    if(group_id == -1 || group_id == 0){
        group_id = -2;
    }
    
    var url = "https://mp.weixin.qq.com/cgi-bin/user_tag?action=get_user_list&groupid="+group_id+"&begin_openid=-1&begin_create_time=-1&limit="+page_total+"&offset="+page_index*page_total+"&backfoward=1&token="+token+"&lang=zh_CN&f=json";
    
    var jsonData = {
        url :url,
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function fansGetContactInfo(token, fakeid){
    
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pagesize=500000&pageidx=0&type=0&token=" + token+ "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"fakeid":fakeid},
                  {"lang":"zh_CN"},
                  {"token":token},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"t":"ajax-getcontactinfo"}];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/getcontactinfo",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

/**
 * type = 1修改备注。2=修改分组 2014年10月13日 13:02:28
 */
function fansModifyContacts(token, fakeid, param, type){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pagesize=500000&pageidx=0&type=0&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"token":token},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"}];
    
    if (type == 1) {
        values.push({"tofakeuin":fakeid});
        values.push({"remark":param});
        values.push({"action":"setremark"});
        values.push({"t":"ajax-response"});
    } else if (type == 2) {
        values.push({"tofakeidlist":fakeid});
        values.push({"contacttype":param});
        values.push({"action":"modifycontacts"});
        values.push({"t":"ajax-putinto-group"});
    }
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/modifycontacts",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

function fansModifyGroup(token, groupId, param, type){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];

    var values = [{"lang":"zh_CN"},
                  {"token":token},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"t":"ajax-friend-group"}];
    
    if (type == 1) {
        values.push({"name":param});
        values.push({"func":"add"});
    } else if (type == 2) {
        values.push({"name":param});
        values.push({"func":"rename"});
        values.push({"id":groupId});
    } else if (type == 3) {
        values.push({"func":"del"});
        values.push({"id":groupId});
    }
    
    var jsonData =  {
        url:"https://mp.weixin.qq.com/cgi-bin/modifygroup?t=ajax-friend-group",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}