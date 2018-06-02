/*
 function y(d) {
 return (d || "") + Math.round(2147483647 * (Math.random() || 0.5)) * +new Date % 1E10
 }
 document.write("pgv_pvi="+y()+"; ");
 document.write("pgv_si="+y("s")+"; ");
 var d=(Math.round(Math.random() * 2147483647) * (new Date().getUTCMilliseconds())) % 10000000000;
 document.write("pgv_pvid="+d+"; ");
 document.write("pgv_info=ssid=s"+d+"; ");
 */
// function requestWithDictionary(dic, func) {
//     var xhr = new XMLHttpRequest();
//
//     xhr.open(dic.requestMethod, dic.url, false);
//     for (item in dic.headers) {
//         xhr.setRequestHeader(item, dic.headers[item])
//     }
//     xhr.withCredentials = true;
//     xhr.onreadystatechange = function () {
//         console.log(this.response);
//         console.log(this.getAllResponseHeaders())
//         console.log(this)
//         func(this)
//     };
//     xhr.send(dic.postData);
// }

function y(d) {
    return (d || "") + Math.round(2147483647 * (Math.random() || 0.5)) * +new Date % 1E10
}


//2017.1.6 新微信登录
function userBizLogin(pass_port,pass_word,image_code){
    var dic2 = {
        requestMethod: "GET",
        url: "https://mp.weixin.qq.com/",
        headers: {
            Host: "mp.weixin.qq.com",
            Accept: "*/*",
            Connection: "keep-alive",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.8",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": "pgv_pvi=" + y() + "; pgv_si=" + y("s")
        }
    };
    
    var r2 = requestWithDictionary(dic2);

    var values = [
        {"f":"json"},
        {"imgcode":image_code},
        {"pwd":pass_word},
        {"username":pass_port}];

    var headers = [
        {"Referer":"https://mp.weixin.qq.com/"},
        {"Origin":"https://mp.weixin.qq.com"},
        {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
        {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
        {"X-Requested-With":"XMLHttpRequest"}];

    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/bizlogin?action=startlogin",
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}

function userLogin(pass_port,pass_word,image_code){
	var headers = [
        {"Referer":"https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN"},
        {"Origin":"https://mp.weixin.qq.com"},
        {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
        {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
        {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [
        {"f":"json"},
        {"imgcode":image_code},
        {"pwd":pass_word},
        {"username":pass_port}];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/login",
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}

//2017.1.5 新的二维码扫描登录方法
function qrCodeVerify(referer) {
    var dicAsk = {
        requestMethod: "GET",
        url: "https://mp.weixin.qq.com/cgi-bin/loginqrcode?action=ask&token=&lang=zh_CN&token=&lang=zh_CN&f=json&ajax=1&random=" + Math.random(),
        headers: {
            Accept:	"application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate, sdch, br",
            "Accept-Language": "zh-CN,zh;q=0.8",
            Host: "mp.weixin.qq.com",
            Connection: "keep-alive",
            Referer: "https://mp.weixin.qq.com" + referer,
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
            Cookie: "noticeLoginFlag=1"
        }
    };

    var responseStr = requestWithDictionary(dicAsk);
    print(responseStr);
    var responseObj = JSON.parse(responseStr);

    //TODO:开启微信保护功能
    // if (1 != wx_protext) {
    //
    // }else {
    //
    // }

    if (responseObj.base_resp.ret == 0) {
        if (responseObj.status == 0){
            //未扫码
            qrCodeCheck(responseObj, 0);

        }else if (responseObj.status == 4) {
            //已扫码，未确认
            qrCodeCheck(responseObj, 1);
        }else if (responseObj.status == 1) {
            //已确认
            if (responseObj.user_category == 1) {
                //通过其他微信请求通过 等
                qrCodeCheck(responseObj, 2);
            }else {
                // 登录成功
                // var dicTocken = {
                //     requestMethod: "POST",
                //     postData: "token=&lang=zh_CN&f=json&ajax=1&random=" + Math.random(),
                //     url: "https://mp.weixin.qq.com/cgi-bin/bizlogin?action=login&token=&lang=zh_CN",
                //     headers: {
                //         Accept:	"application/json, text/javascript, */*; q=0.01",
                //         Referer: "https://mp.weixin.qq.com" + referer,
                //         "X-Requested-With": "XMLHttpRequest",
                //         "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
                //     }
                // };
                // var str = requestWithDictionary(dicTocken);
                // var ro = JSON.parse(str);
                // //    "redirect_url": "/cgi-bin/home?t=home/index&lang=zh_CN&token=1349552889"
                // var token = str.substring(str.indexOf("token=") + "token=".length, str.lastIndexOf("\""));
                // ro.token = token;
                qrCodeCheck(responseObj, 100);
            }
        }
    }
}

/*
* 通过非管理员微信扫描请求登录
* */
function qrCodeVerifyOther(referer) {
    var dicAuth = {
        requestMethod: "GET",
        url: "https://mp.weixin.qq.com/cgi-bin/loginauth?action=ask&token=&lang=zh_CN&token=&lang=zh_CN&f=json&ajax=1&random=" + Math.random(),
        headers: {
            Accept:	"application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate, sdch, br",
            "Accept-Language": "zh-CN,zh;q=0.8",
            Host: "mp.weixin.qq.com",
            Connection: "keep-alive",
            Referer: "https://mp.weixin.qq.com" + referer,
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
        }
    };

    var subre = requestWithDictionary(dicAuth);
    var subreObj = JSON.parse(subre);
    switch (subreObj.status) {
        case 0: {
            //未确认
            qrCodeCheck(subreObj, 3);
        }
            break;

        case 1: {
            // 管理员已通过
            qrCodeCheck(subreObj, 100);
        }
            break;

        case 2: {
            //管理员已拒绝你的操作申请
            qrCodeCheck(subreObj, 4);
        }
            break;

        case 3: {
            // 操作申请已过期
            qrCodeCheck(subreObj, 5);
        }
            break;

        case 4: {
            //已确认
            qrCodeCheck(subreObj, 6);
        }
            break;

        default :{
            //未知
            print(subreObj);
            qrCodeCheck(subreObj, 7);
        }

    }
}

function userGetImgCode(username){
    var headers = [];
    var values = [];
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/verifycode?username=" + username + "&r=" + new Date().getTime(),
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}

//ticket和operation_seq通过udGetTicket方法获取
//uuid 通过userGetUUID获取
//type login或者msgs
function userGetQrCode(ticket,uuid,type,operation_seq){
    var headers = [];
    
    var values = [];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/safe/safeqrcode?ticket=" + ticket + "&uuid=" + uuid + "&action=check&type=" + type + "&auth=ticket&msgid=" + operation_seq,
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}


//2017.1.5 获取二维码的新方法
function userGetQrCode2(){
  var headers = [];
    
  var values = [];
    
  var jsonData = {
      url: "https://mp.weixin.qq.com/cgi-bin/loginqrcode?action=getqrcode&param=4300&rd=" + Math.floor(1e3 * Math.random()),
      headers:headers,
      values:values
  };
    return JSON.stringify(jsonData);
}

function userSendSecuresmsverify(loginSmsCode){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection": "keep-alive"},
                   {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Origin": "https://mp.weixin.qq.com"},
                   {"Referer": "https://mp.weixin.qq.com/cgi-bin/readtemplate?t=user/validate_phone_tmpl&lang=zh_CN&type=&protected=1&phone=186******86"},
                   {"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With": "XMLHttpRequest"}];
    
    
    var values = [];
    try{
        if(loginSmsCode == null){
            values.push({"act": "sendsmscode"});
        }else
        {
            values.push({"act": "verifysmscode"});
            values.push({"login_sms_code":loginSmsCode});
        }
        
    }catch(err){
        values = [];
        values.push({"act": "sendsmscode"});
    }
    values.push({"lang": "zh_CN"});
    values.push({"random": "0.21970548620447516"});
    values.push({"f": "json"});
    values.push({"ajax": "1"});
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/securesmsverify",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

function userGetUUID(ticket){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"mp.weixin.qq.com"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"1":"1"},
                  {"appid":"wx3a432d2dbe2442ce"},
                  {"scope":"snsapi_contact"},
                  {"state":"0"},
                  {"redirect_uri":"https://mp.weixin.qq.com"},
                  {"login_type":"safe_center"},
                  {"redirect_uri":"https://mp.weixin.qq.com"},
                  {"f":"json"},
                  {"token":""},
                  {"lang":"zh_CN"},
                  {"random":"0.699701951816678"},
                  {"ajax":"1"},
                  {"ticket":ticket}];
    var jsonData = {
        url:"https://mp.weixin.qq.com/safe/safeqrconnect",
        headers:headers,
        values:values
    };
    
    return  JSON.stringify(jsonData);
}

function userGetTicket(){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/advanced/advanced?action=interface&t=advanced/interface&token=&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"token":""},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"auth":"ticket"},
                  {"ajax":"1"},
                  {"action":"get_ticket"}];
    
    var jsonData = {
        url: "https://mp.weixin.qq.com/misc/safeassistant?1=1&token=&lang=zh_CN",
        headers :headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

function userCheckQrCode(uuid,timeStamp,token){
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
                  {"uuid":uuid},
                  {"type":"json"},
                  {"action":"json"}];

    var jsonData = {
        url:url,
        headers : headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}


//[[MMPHttpHelper standardMPHttpHelper] post:@"nUserCheckQrCodeSecurewxverify" parseFunction: @"pUserCheckQrCodeSecurewxverify" args:@[_redirect_url] httpMethodType:MT_POST delegate:self selector: @selector(onCheckQrCodeSecurewxverifyCB:backCode:) backCode:nil];
function nUserCheckQrCodeSecurewxverify(referer){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
        {"Accept-Encoding":"gzip,deflate,sdch"},
        {"Accept-Language":"zh-CN,zh;q=0.8"},
        {"Connection":"keep-alive"},
        {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
        {"Host":"mp.weixin.qq.com"},
        {"Origin":"https://mp.weixin.qq.com"},
        {"Referer":"https://mp.weixin.qq.com" + referer},
        {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
        {"X-Requested-With":"XMLHttpRequest"}];

    var values = [{"lang":"zh_CN"},
        {"random":"0.21970548620447516"},
        {"f":"json"},
        {"ajax":"1"},
        {"token":""}];

    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/bizlogin?action=login&token=&lang=zh_CN",
        headers:headers,
        values:values
    };

    return JSON.stringify(jsonData);
}

function userCheckQrCodeSecurewxverify(pass_port,code){    
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=user/validate_phone_tmpl&lang=zh_CN&type=&protected=1&phone=186******86"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"token":""},
                  {"account":pass_port},
                  {"code":code}];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/securewxverify",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

function userCheckQrCodeSecurewxverifyOther(pass_port,code,operation_seq){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=user/validate_phone_tmpl&lang=zh_CN&type=&protected=1&phone=186******86"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"token":""},
                  {"account":pass_port},
                  {"code":code},
                  {"operation_seq":operation_seq}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/securewxverify",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function userSafeassistantAdminAction1(uuid){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"token":""},
                  {"action":"get_uuid"},
                  {"uuid":uuid},
                  {"auth":"ticket"}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/misc/safeassistant?1=1",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function userSafeassistantAdminAction2(msgid){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"token":""},
                  {"type":"1"},
                  {"msgid":msgid},
                  {"auth":"ticket"}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/misc/safeassistant?action=admin_action",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function userSafeassistantAdminActionIsAdmin(token,uuid){
    var headers = [{"Accept":"application/json, text/javascript, */*; q=0.01"},
                   {"Accept-Encoding":"gzip,deflate"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com"},
                   {"X-Requested-With":"XMLHttpRequest"}];
    
    var values = [{"lang":"zh_CN"},
                  {"random":"0.21970548620447516"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"token":token},
                  {"action":"get_uuid"},
                  {"uuid":uuid}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/misc/safeassistant?1=1",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}


function userLogout(token){
    var headers = [];
    
    var values = [];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/logout?t=wxm-logout&lang=zh_CN&token=" + token,
        headers:headers,
        values:values
    };
    return JSON.stringify(jsonData);
}
