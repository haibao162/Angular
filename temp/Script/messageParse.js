function pMsgGetRecent20Message(response){
    if(response == null){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var json = JSON.parse(response);
    if(json.base_resp.ret == 0){
        var messages = json.page_info.msg_items.msg_item;
        if(messages.author!=undefined){
            messages=[messages];
        }
        for(var i = 0;i<messages.length;i++){
            var multi_item = messages[i].multi_item;
            if(multi_item!=null){
                if(multi_item.author!=undefined){
                    messages[i].multi_item = [multi_item];
                }
            }
        }
        jsonData.messages = messages;
        jsonData.base_resp.ret = 0;
        
    }else{
        jsonData.base_resp.ret = -1509;
        jsonData.base_resp.msg = "获取消息失败";
    }
    return JSON.stringify(jsonData);
}

function pMsgReplyMessage(response)
{
    if(response == null || response.length == 0){
        return;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    var responseJson = JSON.parse(response);
    if(responseJson.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
    }else if(responseJson.base_resp == 10700){
        jsonData.base_resp.ret = -1500;
        jsonData.base_resp.msg = "回复失败！对方已经对您取消关注！";
    }else if(responseJson.base_resp.ret == 10703){
        jsonData.base_resp.ret = -1502;
        jsonData.base_resp.msg = "回复失败！对方已经对你设置拒收消息！";
    }else if(responseJson.base_resp.ret == 10706){
        jsonData.base_resp.ret = -1503;
        jsonData.base_resp.msg = "48小时内当前用户与你没有互动，不能发消息给对方！";
    }else{
        jsonData.base_resp.ret = -1504;
        jsonData.base_resp.msg = "回复失败！回复频率过快，请稍后在试！";
    }
    return JSON.stringify(jsonData);
}

function pMsgUploadData(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    var responseJson = JSON.parse(response);
    if(responseJson.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.file_id = responseJson.content;
        jsonData.cdn_url = responseJson.cdn_url;
    }else{
        jsonData.base_resp.ret = -1501;
        jsonData.base_resp.msg = "上传文件失败！";
    }
    return JSON.stringify(jsonData);
}
//json
function pMsgGetMessage(response){
    if(response == null || response.length == 0){
        return null;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    
    try{
        var json = JSON.parse(response);
        if (json.base_resp.ret == 0) {
            var msg_items = json.msg_items;
            var msg_items_json = JSON.parse(msg_items);
            
            jsonData.base_resp.ret = 0;
            jsonData.messages = msg_items_json.msg_item;
            jsonData.lastMessageId = json.latest_msg_id;
        }else{
            jsonData.base_resp.ret = -1505;
            jsonData.base_resp.msg = "获取消息列表失败！";
        }
        
    }catch(err){
        jsonData.base_resp.ret = -1505;
        jsonData.base_resp.msg = "获取消息列表失败！";
    }
    return JSON.stringify(jsonData);
}

function pMsgGetNewMessageNum(response){
	if(response == null || response.length == 0){
		return null;
	}
	
	var jsonData = {};
	jsonData.base_resp = {};
	var messageNumJson = JSON.parse(response);
	if(messageNumJson.base_resp.ret == 0){
		jsonData.base_resp.ret = 0;
		jsonData.newTotalMsgCount = messageNumJson.newTotalMsgCount;
	}else{
		jsonData.base_resp.ret = - 1506;
		jsonData.base_resp.msg = "获取新消息数失败！";
	}
	return JSON.stringify(jsonData);
}

function privateParseMessage(messages){
	var retMessages = [];
	try{
		for(var i = 0;i < messages.length ;i++){
			var message = {};
			var messageJson = messages[i];
			message.id = messageJson.id;
			message.type = messageJson.type;
			message.fakeid = messageJson.fakeid;
			message.nick_name = messageJson.nick_name;
            message.remark_name = messageJson.remark_name;
			message.date_time = messageJson.date_time;
			message.content = messageJson.content;
			message.play_length = messageJson.play_length;
            
			var multi_itemList = {};
            message.multi_item = multi_itemList;
            
			var multi_itemListJson = messageJson.multi_item;
			
			for(var j = 0 ; j < multi_itemListJson.length ; j ++){
				var multi_item = {};
				var multi_itemJson = multi_itemListJson[j];
				multi_item.seq = multi_itemJson.seq;
				multi_item.title = multi_itemJson.title;
				multi_item.digest = multi_itemJson.digest;
				multi_item.cover = multi_itemJson.cover;
				multi_item.contentUrl = multi_itemJson.contentUrl;
				
				mulit_itemList.push(multi_item);
			}
            retMessages.push(message);
		}
	}catch(err){
		
	}
	return retMessages;
}

function pMsgGetTicket(response){
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

function pMsgCheckQrCode(response){
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

function pMsgBroadcast(response){
    if(response == null || response.length == 0){
        return null;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    var jsonRes = JSON.parse(response);
    if(jsonRes.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.ret = -1508;
        jsonData.base_resp.msg = "群发失败！";
    }
    return JSON.stringify(jsonData);
}

function pMsgGetMasssendpage(response){
    if(response == null || response.length == 0){
        return null;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    try{
        var json = JSON.parse(response);
        if(json.base_resp.ret == 0){
//            var mass_send_left = json.user_info.mass_send_left;
            var mass_send_left = json.vip_mass_send_left;
//            var gray_status = json.gray_status;
            var group = JSON.parse(json.contact_group_list).groups;
            var strategy_info = JSON.parse(json.strategy_info);
            var operation_seq = json.operation_seq;
            var third_status = "";
            var bind_mail = json.bind_mail;
            var time_send_oper_left = json.time_send_oper_left;
            var time_send_today_left = json.time_send_today_left;
            var time_send_tomorrow_left = json.time_send_tomorrow_left;
            var time_send_total_left = json.time_send_total_left;
            var time_send_total_num = json.time_send_total_num;
            
//            strategy_info.ticket = json.media_ticket;
            
            jsonData.base_resp.ret = 0;
            jsonData.mass_send_left = mass_send_left;
//            jsonData.gray_status = gray_status;
            jsonData.group = group;
            jsonData.strategy_status = strategy_info;
            jsonData.operation_seq = operation_seq;
            jsonData.third_status = third_status;
            jsonData.bind_mail = bind_mail;
//            jsonData.ticket = json.base_resp.media_ticket;
            jsonData.time_send_oper_left = time_send_oper_left;
            jsonData.time_send_today_left = time_send_today_left;
            jsonData.time_send_tomorrow_left = time_send_tomorrow_left;
            jsonData.time_send_total_left = time_send_total_left;
            jsonData.time_send_total_num = time_send_total_num;
        }else{
            jsonData.base_resp.ret = -1507;
            jsonData.base_resp.msg = "获取群发消息失败1！";
        }
    }catch(err){
//        if(response.indexOf("在使用微信公众平台群发消息功能前") != -1){
//            jsonData.base_resp.ret = -1520;
//            jsonData.base_resp.msg = "腾讯提醒";
//        }else{
            jsonData.base_resp.ret = -1507;
            jsonData.base_resp.msg = "获取群发信息失败2！";
//        }
    }
    return JSON.stringify(jsonData);
}

function pMsgMasssendCopyright(response) {
    var jsonData = {};
    jsonData.base_resp = {};
    var json = JSON.parse(response);
    if (json.base_resp.ret == 154011 || json.base_resp.ret == 154009) {
        jsonData.base_resp.ret = 0;
    } else if (json.base_resp.ret == 154008) {
        var list = JSON.parse(json.list);
        jsonData.base_resp.ret = -1515;
        jsonData.data = list;
    }
    return JSON.stringify(jsonData);
}

function privateGetTicket(response){
    try{
        var ticketStr = response.substring(response.indexOf("ticket:\"") + "ticket:\"".length);
        ticketStr = ticketStr.substring(0,ticketStr.indexOf("\","));
        return ticketStr;
    }catch(err){
        return "";
    }
}

