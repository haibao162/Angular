function pUserDetailGetAppInfo(response){
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    try{
        var advancedEditStatus = 0;
        var advancedDevStatus = 0;
        var mobile;
        var protect_status;
        var advanced_dev_url = "";
        
        var json = JSON.parse(response);
        if(json.base_resp.ret >= 0){
            mobile = JSON.parse(json.strategy_info).mobile;
            protect_status = JSON.parse(json.strategy_info).protect_status;
//            advanced_dev_url = json.advanced_info.dev_info.callback_url;
//            advancedDevStatus = json.advanced_info.is_dev_reply_open;
//            advancedEditStatus = advancedDevStatus == 1 ? 0 : 1;
            
            jsonData.advancedEditStatus = advancedEditStatus;
            jsonData.advancedDevStatus = advancedDevStatus;
            jsonData.mobile = mobile;
            jsonData.protect_status = protect_status;
            jsonData.advanced_dev_url = advanced_dev_url;
        }else{
            jsonData = {};
            jsonData.base_resp = {};
            
            jsonData.base_resp.ret = -1101;
            jsonData.base_resp.msg = "appInfo解析失败";
            
            return JSON.stringify(jsonData);
        }
    }catch(err){
        jsonData = {};
        jsonData.base_resp = {};
        
        jsonData.base_resp.ret = -1101;
        jsonData.base_resp.msg = "appInfo解析失败";
        
        return JSON.stringify(jsonData);
    }
    
    jsonData.base_resp.ret = 0;
    return JSON.stringify(jsonData);
}

function pUserDetailGetUserDetail(response){
    if (response == null || response.length == 0) {
        return null;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    var ticket = "";
    var fakeId = "";
    var name = "";
    var srcId = "";
    var passPort = "";
    var type = "";
    var address = "";
    var signature = "";
    var certificate = "";
    var subject = "";
//    var account = "";
    
    var hasComment = false;
    var hasAppreciated = false;
    var hasCopyright = false;
    
    try{
        var json = JSON.parse(response);
        
        if (json.base_resp.ret == 0) {
//            ticket = json.base_resp.media_ticket;
//            fakeId = json.user_info.fake_id;
//            name = json.user_info.nick_name;
            name = json.setting_info.nickname.nickname;
            srcId = json.setting_info.original_username;
            passPort = json.setting_info.username;
            
//            var service_type = json.user_info.service_type;
//            if (service_type == 1 || service_type == 0) {
//                type = "订阅号";
//            }else if(service_type == 2){
//                type = "服务号";
//            }
            
            address = json.setting_info.location_info.position;
            signature = json.setting_info.intro.signature;
            
//            var wxverify_status = json.user_info.is_wx_verify;
//            if (wxverify_status == 0) {
//                certificate = "未认证";
//            }else{
//                certificate = "已经认证";
//            }
//            subject = json.setting_info.contractor_info.name;
//            account = json.setting_info.bind_email.account;
            
            jsonData.ticket = ticket;
            jsonData.fakeId = fakeId;
            jsonData.address = address;
            jsonData.name = name;
            jsonData.passPort = passPort;
            jsonData.type = type;
            jsonData.certificate = certificate;
            jsonData.signature = signature;
            jsonData.srcId = srcId;
            jsonData.subject = subject;
            jsonData.base_resp.ret = 0;
//            jsonData.account = account;
            
//            try{
//                var nav_item = json.base_resp.nav.nav_items[1].nav_item;
//                for(var i =0;i < nav_item.length ;i++){
//                    item = nav_item[i];
//                    if(item.id == 10033){
//                        hasComment = true;
//                    }else if(item.id == 10040){
//                        hasAppreciated = true;
//                    }else if(item.id == 10042){
//                        hasCopyright = true;
//                    }
//                }
//
//            }catch(err){
//            }
            jsonData.hasComment = hasComment;
            jsonData.hasAppreciated = hasAppreciated;
            jsonData.hasCopyright = hasCopyright;
            
        }else{
            jsonData = {};
            jsonData.base_resp = {};
            
            jsonData.base_resp.ret = -1100;
            jsonData.base_resp.msg = "获取userDetail失败";
        }
        
    }catch(err){
        jsonData = {};
        jsonData.base_resp = {};
        
        jsonData.base_resp.ret = -1100;
        jsonData.base_resp.msg = "获取userDetail失败";
    }
    return JSON.stringify(jsonData);
}

function pUserDetailGetUserDetail2(response){
    if (response == null || response.length == 0){
        return null;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    var ticket = "";
    var fakeId = "";
    var name = "";
    var srcId = "";
    var passPort = "";
    var type = "";
    var address = "";
    var signature = "";
    var certificate = "";
    var subject = "";
    
    var hasComment = false;
    var hasAppreciated = false;
    var hasCopyright = false;
    
    try{
        var json = JSON.parse(response);
        if (json.base_resp.ret == 0){
            ticket = json.base_resp.media_ticket;
            fakeId = json.user_info.fake_id;
            var service_type = json.user_info.service_type;
            if (service_type == 1 || service_type == 0){
                type = "订阅号";
            }else if(service_type == 2){
                type = "服务号";
            }
            
            var wxverify_status = json.user_info.is_wx_verify;
            if (wxverify_status == 0){
                certificate = "未认证";
            }else{
                certificate = "已经认证";
            }
            
            jsonData.ticket = ticket;
            jsonData.fakeId = fakeId;
            jsonData.type = type;
            jsonData.certificate = certificate;
            jsonData.subject = subject;
            jsonData.base_resp.ret = 0;
            
            try{
                var nav_item = json.base_resp.nav.nav_items[1].nav_item;
                for(var i = 0; i < nav_item.length;i++){
                    item = nav_item[1];
                    if(item.id == 10033){
                        hasComment = true;
                    }else if(item.id == 10040){
                        hasAppreciated = true;
                    }else if(item.id == 10042){
                        hasCopyright = true;
                    }
                }
            }catch(err){
                
            }
            jsonData.hasComment = hasComment;
            jsonData.hasAppreciated = hasAppreciated;
            jsonData.hasCopyright = hasCopyright;
        }else{
            jsonData = {};
            jsonData.base_resp = {};
            
            jsonData.base_resp.ret = -1100;
            jsonData.base_resp.msg = "获取userDetail2失败";
        }
    }catch(err){
        jsonData = {};
        jsonData.base_resp = {};
        
        jsonData.base_resp.ret = -1100;
        jsonData.base_resp.msg = "获取userDetail2失败";
    }
    return JSON.stringify(jsonData);
}

function pUserDetailGetFansAndNewMessageCount(aa) {
    var jsonData = {};
    jsonData.base_resp = {};
    try {
        var response = JSON.parse(aa);
        if (response.base_resp.ret == 0) {
            var homeInfo = response.home_info;
            jsonData.fansCount = homeInfo.total_friend_cnt;
            jsonData.newMessageCount = homeInfo.new_msg_cnt;
            jsonData.newFansCount = homeInfo.new_friend_cnt;
            jsonData.todayMoney = "-1";
            
            jsonData.base_resp.ret = 0;
        }else{
            jsonData.base_resp.ret = -1204;
            jsonData.base_resp.msg = response.base_resp.err_msg;
        }
    } catch (err) {
        jsonData.base_resp.ret = -1204;
        jsonData.base_resp.msg = "获取粉丝数失败";
    }
    return JSON.stringify(jsonData);
}

function pUserGetAdHostIndex(response){
    var jsonData = {};
    jsonData.base_resp = {};
    var has_ad = false;
    try{
        if(response.indexOf('{"base_resp":{"ret":0') == -1){
            has_ad = true;
        }
    }catch(err){
    }
    jsonData.has_ad = has_ad;
    jsonData.base_resp.ret = 0;
    return JSON.stringify(jsonData);
}

function pUserLogout(response){
    var jsonData = {};
    jsonData.base_resp = {};
    jsonData.base_resp.ret = 0;
    jsonData.response = response;
    return JSON.stringify(jsonData);
}


