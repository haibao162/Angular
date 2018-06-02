function msgGetMessage(token,offset){
    var headers = [];
    var values = [];
    var jsonData = {
    url: "https://mp.weixin.qq.com/cgi-bin/message?t=message/list&action=&keyword=&frommsgid=&offset=" + offset + "&count=50&day=7&filterivrmsg=0&token=" + token + "&lang=zh_CN&f=json",
    headers:headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgGetRecent20Message(token, fakeid){
    var headers = [];
    var values = [];
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/singlesendpage?tofakeid=" + fakeid + "&t=message/send&action=index&token=" + token + "&lang=zh_CN&f=json",
        headers:headers,
        values:values
    };

    return JSON.stringify(jsonData);
}

//mode = small,large,
function msgGetMessageImage(token, msgid, source, mode){

    var headers = [];
    var values = [];
    var jsonData = {
    url: "https://mp.weixin.qq.com/cgi-bin/getimgdata?token=" + token + "&msgid=" + msgid + "&mode=" + mode + "&source=" + source + "&fileId=",
    headers:headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgGetMessageVoice(token, msgid, source){
    var headers = [];
    var values = [];
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/getvoicedata?msgid=" + msgid +"&fileid=&source="+ source +"&token="+ token +"&lang=zh_CN",
        headers:headers,
        values:values
    };

    return JSON.stringify(jsonData);
}

function getMessageVideo(token, msgid, source){
    var headers = [];
    var values = [];
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/getvideodata?msgid=" + msgid +"&fileid=&source="+ source +"&token="+ token +"&lang=zh_CN",
    headers:headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgReply(token, tofakeid, param, type){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/singlesendpage?tofakeid=" + tofakeid + "&t=message/send&action=index&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];

    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"random":"0.9201387697830796"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"t":"ajax-response"},
                  {"imgcode":""},
                  {"tofakeid":tofakeid},
                  {"type":type + ""}];

    if (type == 1) {
        values.push({"content":param});
    } else if (type == 2 || type == 3) {
        values.push({"file_id":param});
        values.push({"fileid":param});
    } else if (type == 10) {
        values.push({"app_id":param});
        values.push({"appmsgid":param});
    }

    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/singlesend",
        headers :headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgGetNewMessageNum(token, lastMessageId){
    var headers = [];
    var values = [];

    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/getnewmsgnum?f=json&t=ajax-getmsgnum&lastmsgid=" + lastMessageId + "&token=" + token + "&lang=zh_CN",
    headers:headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgBroadcast(token, type, groupId, param, code,operation_seq,list){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token=" + token + "&lang=zh_CN"},
                   {"X-Requested-With":"XMLHttpRequest"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"random":"0.0462703350931406"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"imgcode":""},
                  {"city":""},
                  {"province":""},
                  {"country":""},
                  {"synctxweibo":"0"},
                  {"cardlimit":"1"},
                  {"groupid":groupId + ""},
                  {"sex":"0"},
                  {"operation_seq":operation_seq + ""},
                  {"direct_send":"1"},
                  {"type":type + ""}];

    if (code != null && code.length > 0) {
        values.push({"code":code});
    }
    
    if(list != null && list.length > 0){
        values.push({"reprint_confirm": "1"});
        values.push({"list":list});
    }

    if (type == 1) {
        values.push({"content":param + ""});
    } else if (type == 2 || type == 3) {
        values.push({"fileid":param + ""});
    } else if (type == 10) {
        values.push({"appmsgid":param + ""});
    }

    var jsonData = {
        url :"https://mp.weixin.qq.com/cgi-bin/masssend",
    headers:headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgUploadResource(token, ticket, ticket_id, type){

    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/filepage?type="+ type +"&begin=0&count=100000&t=media/list&token=" + token+ "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = {};
    var filename = "";
    if(type == 3){
        filename = "voice" + new Date().valueOf() + ".mp3";
    }else if(type == 2){
        filename = "image" + new Date().valueOf() + ".png";
    }

    var formData = "name=\"file\"; folder=\"/cgi-bin/uploads\"; filename=\"" + filename + "\"";

    var jsonData  = {
        url:"https://mp.weixin.qq.com/cgi-bin/filetransfer?action=upload_material&writetype=doublewrite&groupid=1&ticket=" + ticket + "&f=json&token=" + token + "&ticket_id=" + ticket_id + "&lang=zh_cn",
        headers:headers,
        values:values
    };
    jsonData.formData = formData;
    return JSON.stringify(jsonData);
}


function msgGetTicket(token){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"random":"0.0462703350931406"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"action":"get_ticket"},
                  {"1":"1"}];

    var jsonData = {
    url:"https://mp.weixin.qq.com/misc/safeassistant",
    headers:headers,
    values:values
    };

    return JSON.stringify(jsonData);
}

function msgCheckQrCode(token,uuid,timeStamp){
    var url = "https://mp.weixin.qq.com/safe/safeuuid";
    if(token != null && token.length != 0){
        url += "?timespam=" + timeStamp + "&token=" + token + "&lang=zh_CN";
    }

    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"mp.weixin.qq.com"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = [{"lang":"zh_CN"},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"token":""},
                  {"uuid":uuid + ""},
                  {"type":"json"},
                  {"action":"json"}];

    var jsonData = {
        url:url,
        headers:headers,
        values:values
    };

    return JSON.stringify(jsonData);}

function msgGetMasssendpage(token){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Cache-Control":"max-age=0"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    var values = [];
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token="+token+"&lang=zh_CN&f=json",
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}

function msgMasssendCopyright(token, type, appmsgid, first_check) {
    var headers = [{
                   "Accept": "*/*"
                   }, {
                   "Accept-Encoding": "gzip,deflate,sdch"
                   }, {
                   "Accept-Language": "zh-CN,zh;q=0.8"
                   }, {
                   "Connection": "keep-alive"
                   }, {
                   "Cache-Control": "max-age=0"
                   }, {
                   "Host": "mp.weixin.qq.com"
                   }, {
                   "Origin": "https://mp.weixin.qq.com"
                   }, {
                   "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"
                   }, {
                   "Referer": "https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token="+token+"&lang=zh_CN"
                   }
                   ];
    
    var values = [{
                  "lang": "zh_CN"
                  }, {
                  "random": "0.21970548620447516"
                  }, {
                  "f": "json"
                  }, {
                  "ajax": "1"
                  }, {
                  "token": token +""
                  }, {
                  "appmsgid": appmsgid +""
                  }, {
                  "type": type +""
                  }, {
                  "first_check": first_check+""
                  }];
    
    var jsonData = {
    url: "https://mp.weixin.qq.com/cgi-bin/masssend?action=get_appmsg_copyright_stat&token=" + token + "&lang=zh_CN",
    headers: headers,
    values: values,
    };
    return JSON.stringify(jsonData);
}

