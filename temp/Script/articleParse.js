function pArticleGetArticles(response){
    
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var articleJson = JSON.parse(response);
    var ret = articleJson.base_resp.ret;
    if (ret == 0) {
        
        jsonData.base_resp.ret = 0;
        jsonData.articles = articleJson.app_msg_info;
    }else{
        jsonData.base_resp.ret = -1300;
        jsonData.base_resp.msg = "获取图文列表失败，请重试！";
    }
    
    return JSON.stringify(jsonData);
}

function pArticleGetTempurl(response){
    
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var articleJson = JSON.parse(response);
    var ret = articleJson.base_resp.ret;
    if (ret == 0) {
        
        jsonData.base_resp.ret = 0;
        jsonData.temp_url = articleJson.temp_url;
    }else{
        jsonData.base_resp.ret = -1300;
        jsonData.base_resp.msg = "获取图文临时链接失败，请重试！";
    }
    
    return JSON.stringify(jsonData);
}

function pArticleGetArticle(response){
    
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    try{
        response = response.substring(response.indexOf("infos = "));
        response = response.substring("infos = ".length, response.indexOf("item ="));
        response = response.substring(0, response.lastIndexOf(","));
        
        var articleJson = JSON.parse(response);
        
        jsonData.base_resp.ret = 0;
        jsonData.article_detail = articleJson.item[0];
    }catch(err){
        jsonData.base_resp.ret = -1301;
        jsonData.base_resp.msg = "获取图文失败，请重试！";
    }
    return JSON.stringify(jsonData);
}

function pArticleCreateOrUpdate(response){
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var result = JSON.parse(response);
    if (result.base_resp.ret == 0) {
        jsonData.base_resp.ret = 0;
    }else if(result.base_resp.ret == 153008){
        jsonData.base_resp.ret = 153008;
        jsonData.base_resp.msg = "原创图文内容不能小于300字！";
    }else if(result.base_resp.ret == 15806){
        jsonData.base_resp.ret = -15806;
        jsonData.base_resp.msg = "图文消息中含有诱导分享内容!";
    }else {
        jsonData.base_resp.ret = -1302;
        jsonData.base_resp.msg = "创建或修改图文失败！";
    }
    jsonData.result = result;
    return JSON.stringify(jsonData);
}

function pArticleDeleteArtilce(response){
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var result = JSON.parse(response);
    if (result.ret == 0) {
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.msg = "删除图文失败，原文可能已经不存在，请勿非法操作！";
        jsonData.base_resp.ret = "-1303";
    }
    
    return JSON.stringify(jsonData);
}

function pArticlePreviewGetArticle(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
   
    try{
        response = response.substring(response.indexOf("infos = "));
        response = response.substring("infos = ".length, response.indexOf("item ="));
        response = response.substring(0, response.lastIndexOf(","));
        
        var articleJson = JSON.parse(response).item[0].multi_item;
        jsonData.base_resp.ret = 0;
        jsonData.articleJson = articleJson;
    }catch(err){
        jsonData.base_resp.ret = -1303;
        jsonData.base_resp.msg = "预览失败！";
    }
    
    return JSON.stringify(jsonData);
}

function pArticlePreview(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    var preview = JSON.parse(response);
    if(preview.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
    }else{
        jsonData.base_resp.ret =-1304;
        jsonData.base_resp.msg = "预览失败，您输入的微信号不是您的好友！";
    }
    return JSON.stringify(jsonData);
}

function pArticleUploadVoide(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var retJson = JSON.parse(response);
    if(retJson.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.content = retJson.content;
        jsonData.type = retJson.type;
        jsonData.location = retJson.location;
    }else if(retJson.base_resp.ret == -1){
        jsonData.base_resp.ret = -1306;
        jsonData.base_resp.msg = "系统错误，请稍后重试！";
    }else{
        jsonData.base_resp.ret = -1305;
        jsonData.base_resp.msg = "上传视频失败";
    }

    return JSON.stringify(jsonData);
}

function pArticleGetWeishiCallback(response){
    if(response == null || response.length == 0){
        return null;
    }

    response = response.replace("callback(","");
    response = response.replace(");","");
    var retJson = JSON.parse(response);
    
    var jsonData = {};
    jsonData.base_resp = {};
    if(retJson.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.picurl = retJson.data.info.videos[0].picurl;
    }else{
        jsonData.base_resp.ret = -1307;
        jsonData.base_resp.msg = retJson.msg;
    }
    return JSON.stringify(jsonData);
}

function pArticleUploadImageByUrl(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var retJson = JSON.parse(response);
    
    var jsonData = {};
    jsonData.base_resp = {};
    if(retJson.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.fileid = retJson.content;
        jsonData.type = retJson.type;
        jsonData.location = retJson.location;
    }else{
        jsonData.base_resp.ret = -1308;
        jsonData.base_resp.msg = "上传微视缩略图失败！";
    }
    return JSON.stringify(jsonData);
}

function pArticleCrteataOrUpdateVideo(response)
{
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    jsonData.base_resp.ret = 0;
    var retJson = JSON.parse(response);
    if(retJson.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.appMsgId = retJson.appMsgId;
    }else{
        jsonData.base_resp.ret = -1306;
        jsonData.base_resp.msg = "新建视频失败！";
    }
    return JSON.stringify(jsonData);
}

function pArticleGetBroadcastHistory(response){
    if(response == null || response.length == 0){
        return;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var json = JSON.parse(response);
    if(json.base_resp.ret == 0){
        var str = json.msg_items
        var msg_item = JSON.parse(str).msg_item;
        msg_item = JSON.stringify(msg_item);
        msg_item = msg_item.replace(/&amp;/g, '&');
        var broadcast_history = JSON.parse(msg_item);
        jsonData.base_resp.ret = 0;
        jsonData.broadcast_history = broadcast_history;

    }else{
        jsonData.ret = -1310;
        jsonData.msg = "获取群发历史失败";
    }
    return JSON.stringify(jsonData);
}

function pGetFileInfoByFileId(response){
    if(response == null || response.length == 0){
        return;
    }
    var json = JSON.parse(response);
    var jsonData = {};
    jsonData.base_resp = {};
    if(json.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.page_info = json.page_info;
    }else{
        jsonData.ret = -1309;
        jsonData.msg = "获取资源数据失败";
    }
    return JSON.stringify(jsonData);
}

function pArticleGetBroadcastHistoryData(response){
    if(response == null || response.length == 0){
        return;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    if(json.base_resp.ret == 0){
        var str = json.msg_items
        var msg_item = JSON.parse(str).msg_item;
        msg_item = JSON.stringify(msg_item);
        msg_item = msg_item.replace(/&amp;/g, '&');
        var broadcast_history = JSON.parse(msg_item);
        jsonData.base_resp.ret = 0;
        jsonData.broadcast_history = broadcast_history;
        
    }else{
        jsonData.ret = -1310;
        jsonData.msg = "获取群发历史失败";
    }
    return JSON.stringify(jsonData);
}

function pArticleAppmsgext(response) {
    if(response == null || response.length == 0){
        return;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var json = JSON.parse(response);
    
    jsonData.base_resp.ret = 0;
    jsonData.appmsg = json.appmsg;
    
    return JSON.stringify(jsonData);
}

function pArticleSetprotocolSign(response){
    if(response == null || response.length == 0){
        return;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    jsonData.base_resp.ret = 0;
    
    return JSON.stringify(jsonData);
}

function pReadMpArticle(response){
    if(response == null || response.length == 0){
        return;
    }
    var jsonData = {};
    jsonData.base_resp = {};
    var preview = JSON.parse(response);
    preview.content = preview.content_noencode;
    if(preview.base_resp.ret == 0){
        jsonData.base_resp.ret = 0;
        jsonData.data = preview;
    }else{
        jsonData.base_resp.ret =-1610;
        jsonData.base_resp.msg = preview.base_resp.msg;
        jsonData.base_resp.wxRet = preview.base_resp.ret;
    }
    return JSON.stringify(jsonData);
}
