function pFansGetFans(response){
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    try{
        if (response == null || response.length == 0) {
            return null;
        }
        
        var json = JSON.parse(response);
        
        var groupsJson = json.group_info?(json.group_info.group_info_list?json.group_info.group_info_list:[]):[];
        var friendsJson = json.user_list?(json.user_list.user_info_list?json.user_list.user_info_list:[]):[];
        
        var retGroupsJson = [];
        for (var i = 0; i < groupsJson.length; i++) {
            var group = groupsJson[i];
            var groupJson = {};
            
            groupJson.id = group.group_id;
            groupJson.count = group.group_cnt;
            groupJson.name = group.group_name;
            groupJson.group_create_time = group.group_create_time;
            
            retGroupsJson.push(groupJson);
        }
        
        var retFriendsJson = [];
        
        for (var i = 0; i < friendsJson.length; i++) {
            var friend = friendsJson[i];
            var friendJson = {};
            
            friendJson.nick_name = friend.user_name;
            friendJson.remark_name = friend.user_remark;
            
            var groupId = friend.user_group_id;
            var groupIdStr;
            if(groupId.length == 0){
                groupIdStr = 0;
            }else{
                groupIdStr = groupId[0];
            }
            
            friendJson.group_id = groupIdStr;
            friendJson.fake_id = friend.user_openid;
            friendJson.user_openid = friend.user_openid
            
            retFriendsJson.push(friendJson);
        }
        
        jsonData.base_resp.ret = 0;
        jsonData.groups = retGroupsJson;
        jsonData.friends = retFriendsJson;
        
        return JSON.stringify(jsonData);
    }catch(err){
        jsonData = {};
        jsonData.base_resp = {};
        jsonData.base_resp.ret = -1200;
        jsonData.base_resp.msg = "获取好友列表失败,请稍后重试";
        
        return JSON.stringify(jsonData);
    }
}

function pFansGetContactInfo(response){
    var jsonData = {};
    jsonData.base_resp = {};
    
    response = response.replace("<br\\/>", "");
    var baseResponse = JSON.parse(response);

    var ret = baseResponse.base_resp.ret;
    
    if (ret == 0) {
        var contactInfo = baseResponse.contact_info;
        
        jsonData.fake_id = contactInfo.fake_id + "";
        jsonData.nick_name = contactInfo.nick_name;
        jsonData.user_name = contactInfo.user_name;
        jsonData.signature = contactInfo.signature;
        jsonData.city = contactInfo.city;
        jsonData.province = contactInfo.province;
        jsonData.country = contactInfo.country;
        jsonData.gender = contactInfo.gender;
        jsonData.remark_name = contactInfo.remark_name;
        jsonData.group_id = contactInfo.group_id;
        
        jsonData.base_resp.ret = 0;
    }else{
        jsonData = {};
        jsonData.base_resp = {};
        jsonData.base_resp.ret = -1201;
        jsonData.base_resp.msg = "用户信息获取失败，请稍后重试";
    }
    
    return JSON.stringify(jsonData);
}

function pFansModifyContacts(response){
    var jsonData = {};
    jsonData.base_resp = {};
    
    var modifyContactsResult = JSON.parse(response);
    var ret = modifyContactsResult.base_resp.ret;
    if (ret == 0) {
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.ret = -1202;
        jsonData.base_resp.msg = "修改粉丝分组失败";
    }
    
    return JSON.stringify(jsonData);
}

function pFansModifyGroup(response){
    var jsonData = {};
    jsonData.base_resp = {};
    
    var modifyGroupResult = JSON.parse(response);
    
    var ret = modifyGroupResult.base_resp.ret;
    if (ret ==  0) {
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.ret = -1203;
        jsonData.base_resp.msg = "修改分组失败";
    }
    return JSON.stringify(jsonData);
}




