function pUserLogin(jsonString){
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(jsonString);
    
    if(jsonObject.base_resp.ret == 0){
        if(jsonString.indexOf("qy.weixin.qq.com") != -1){
            jsonData.base_resp.ret = -1000;
            jsonData.base_resp.msg = "不支持企业号登录！";
        }
        else
        {
            jsonData.base_resp.ret = 0;
            jsonData.token = privateUserGetToken(jsonString);
            jsonData.redirect_url = jsonObject.redirect_url;

            if(jsonData.token.length <= 0){
                
                var phone = privateUserGetPhone(jsonString);
                if(phone == null || phone.length <= 0){
                    
                    var ticketJson = privateUserGetTicket(jsonString);
                    jsonData.base_resp.ret = -1002;
                    jsonData.base_resp.msg = "您的帐号开通了微信保护功能，需要进行微信验证";
                }
                else{
                    jsonData.base_resp.ret = -1001;
                    jsonData.phone = phone;
                    jsonData.base_resp.msg = "请输入短信验证码";
                }
            }
        }
    }
    else{
        switch(jsonObject.base_resp.ret){
            case -1:
            {
                jsonData.base_resp.ret = -1011;
                jsonData.base_resp.msg = "系统错误，请稍后重试！";
            }
                break;
            case 200023:
            {
                jsonData.base_resp.ret = -1012;
                jsonData.base_resp.msg = "您输入的帐号或者密码不正确，请重新输入。";
            }
                break;
            case 200002:
            {
                jsonData.base_resp.ret = -1012;
                jsonData.base_resp.msg = "帐号或密码错误！";
            }
                break;
            case 200021:
            {
                jsonData.base_resp.ret = -1013;
                jsonData.base_resp.msg = "不存在该帐户！";
            }
                break;
            case 200007:
            {
                jsonData.base_resp.ret = -1014;
                jsonData.base_resp.msg = "您目前处于访问受限状态！";
            }
                break;
            case 200008:
            {
                jsonData.base_resp.ret = -1015;
                jsonData.base_resp.msg = "请输入图中验证码！";
            }
                break;
            case 200027:
            {
                jsonData.base_resp.ret = -1016;
                jsonData.base_resp.msg = "您的验证码不正确请重新输入！";
            }
                break;
            case 200026:
            {
                jsonData.base_resp.ret = -1017;
                jsonData.base_resp.msg = "该公众会议号已过期，无法登录使用！";
            }
                break;
            case 200025:
            {
                jsonData.base_resp.ret = -1018;
                jsonData.base_resp.msg = "不支持海外用户！";
            }
                break;
            case 200121:
            {
                jsonData.base_resp.ret = -1019;
                jsonData.base_resp.msg = "该帐号属于微信开放平台！";
            }
                break;
        }
    }
    
    return JSON.stringify(jsonData);
}

//private
function privateUserGetToken(jsonstring){
    var token = "";
    try{
        if(jsonstring.indexOf("&token=") != -1){
            token = jsonstring.substring(jsonstring.indexOf("&token=") + "&token=".length);
            token = token.substring(0,token.indexOf("\""));
        }
    }catch(err){
        token = "";
    }
    return token;
}

//private
function privateUserGetPhone(response){
    var phone = "";
    
    if(response.indexOf("validate_phone_tmpl") == -1){
        return null;
    }else{
        phone = response.substring(response.indexOf("&phone=") + "&phone=".length);
        phone = phone.substring(0, phone.indexOf("\""));
        return phone;
    }
}

//private
function privateUserGetTicket(response){
    var ticketJson = {};
    if (response.indexOf("validate_wx_tmpl") == -1) {
        return null;
    }else{
        var account = response.substring(response.indexOf("&account=") + "&account=".length);
        account = account.substring(0, account.indexOf("&"));
        
        var appticket = response.substring(response.indexOf("&appticket=") + "&appticket=".length);
        appticket = appticket.substring(0, appticket.indexOf("&"));
        
        var bindalias = response.substring(response.indexOf("&bindalias=") + "&bindalias=".length);
        bindalias = bindalias.substring(0, bindalias.indexOf("&"));
        
        ticketJson.account = account;
        ticketJson.appticket = appticket;
        ticketJson.bindalias = bindalias;
        
        return ticketJson;
    }
}

//sendSecuresmsverify
function pUserGetSmsCode(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    
    var errCode = jsonObject.base_resp.ret;
    if(errCode != 0){
        jsonData.base_resp.ret = -1004;
        jsonData.base_resp.msg = "获取验证码过于频繁，请过段时间再试";
    }else{
        jsonData.base_resp.ret = 0;
        jsonData.base_resp.msg = "发送成功，请注意查收，可能会短时间延迟，请耐心等待";
    }
    
    return JSON.stringify(jsonData);
}

//sendSecuresmsverify, sms_code
function pUserCheckSmsCode(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    var errCode = jsonObject.base_resp.ret;
    if(errCode != 0){
        jsonData.base_resp.ret = -1006;
        jsonData.base_resp.msg = "短信验证码输入有误，请重新输入";
    }else{
        var token = privateUserGetToken(response);
        if(token != null && token.length != 0){
            jsonData.base_resp.ret = 0;
            jsonData.token = token;
        }else{
            jsonData.base_resp.ret = 0;
            jsonData.response = response;
        };
    }
    
    return JSON.stringify(jsonData);
}

//getTicket(this, "")
function pUserGetTicket(response){
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    
    var errCode = jsonObject.base_resp.ret;
    if(errCode == 0){
        jsonData.base_resp.ret = 0;
        jsonData.ticket = jsonObject.ticket;
        jsonData.operation_seq = jsonObject.operation_seq;
    }else{
        jsonData.base_resp.ret = -1010;
        jsonData.base_resp.msg = "获取ticket失败";
    }
    return JSON.stringify(jsonData);
}

//getUUID(ticket)
function pUserGetUUID(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    
    jsonData.base_resp.ret = 0;
    jsonData.uuid = jsonObject.uuid;
    jsonData.timestamp = new Date().getTime();
    
    return JSON.stringify(jsonData);
}

//checkQrCode(this, uuid, timestamp)
function pUserCheckQrCode(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    
    if(jsonObject.errcode == 405){
        jsonData.base_resp.ret = 0;
        jsonData.code = jsonObject.code;
    }else{
        jsonData.base_resp.ret = -1008;
        jsonData.base_resp.msg = "您还未扫描二维码！请先扫描后点击确认！";
    }
    
    return JSON.stringify(jsonData);
}

//checkQrCodeSecurewxverify(this, pass_port, code, getHttpClientId())
function pUserCheckQrCodeSecurewxverify(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
        jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    
    var errCode = jsonObject.base_resp.ret;
    if(errCode == 0){
        var token = privateUserGetToken(response);
        if(token != null && token.length != 0){
            jsonData.base_resp.ret = 0;
            jsonData.token = token;
        }else{
            jsonData.base_resp.ret = -9999;
            jsonData.base_resp.msg = "未知错误";
        };
    }else if (errCode == 11004) {
        jsonData.base_resp.ret = 11004;
        jsonData.base_resp.msg = "其他帐号申请登录";
    }else{
        jsonData.base_resp.ret = -1009;
        jsonData.base_resp.msg = "二维码认证错误";
    };
    
    return JSON.stringify(jsonData);
};

function pUserSafeassistantAdminAction1(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    jsonData.base_resp.ret = jsonObject.base_resp.ret;
    jsonData.base_resp.msg = jsonData.base_resp.err_msg;
    return JSON.stringify(jsonData);
}

function pUserSafeassistantAdminAction2(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    if (jsonObject.status == 1){
        //登录成功
        jsonData.base_resp.ret = 0;
        jsonData.base_resp.msg = "验证成功";
    }else {
        //需联系管理员验证
        jsonData.base_resp.ret = -1;
        jsonData.base_resp.msg = "需联系管理员验证";
    }
    return JSON.stringify(jsonData);
}

function pUserSafeassistantAdminActionIsAdmin(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var jsonObject = JSON.parse(response);
    if (jsonObject.base_resp.ret == 0){
        //登录成功
        jsonData.base_resp.ret = 0;
        if (jsonObject.isadmin == 1){
            jsonData.base_resp.msg = "管理员已验证";
        }else {
            jsonData.base_resp.msg = "已向管理员发送群发请求";
        }
        jsonData.isadmin = jsonObject.isadmin;
    }
    return JSON.stringify(jsonData);
}


