
/*
 * 获取素材列表
 * type = 10,图文 15,视频
 *
 */
function articleGetArticles(token, begin, count, type){
    return articleGetArticlesByQuery(token, begin, count, type,"");
}

function articleGetArticlesByQuery(token, begin, count, type, query){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [];
    
    var url = "https://mp.weixin.qq.com/cgi-bin/appmsg?token=" + token + "&lang=zh_CN&f=json&type=" + type + "&action=list_card&t=media/appmsg_list2&begin=" + begin * count + "&count=" + count;
    
    if(query != null && query.length != 0){
        url += "&query=" + encodeURI(query);
    }
    
    var jsonData = {
    url:url,
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function articleGetTempurl(token,appMsgId,idx){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch,br"},
                   {"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=10&action=list_card&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [];
    
    var url = "https://mp.weixin.qq.com/cgi-bin/appmsg?token=" + token + "&lang=zh_CN&f=json&action=get_temp_url&ajax=1&random=0.21338756950041726" + "random" + "&appmsgid=" + appMsgId + "&itemidx=" + idx;
    
    var jsonData = {
    url:url,
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function articleDeleteArticle(token, appMsgId){
    
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=10&action=list&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"random":"0.0462703350931406"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"t":"ajax-response"},
                  {"sub":"del"},
                  {"AppMsgId":appMsgId}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/operate_appmsg",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function articleGetImgData(token, fileId){
    
    var headers = [];
    
    var values = [];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/getimgdata?mode=large&source=file&fileId=" + fileId + "&token=" + token + "&lang=zh_CN",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

//music_id0:
//video_id0:
//show_cover_pic0:0
//shortvideofileid0:
//copyright_type0:0
//releasefirst0:1
//platform0:
//reprint_permit_type0:1 1可以转载 3禁止转载
//original_article_type0:互联网
//can_reward0:0
//reward_wording0:
//need_open_comment0:1
//sourceurl0:http://www.lagou.com/center/job_1538505.html?source=weixin&m=1
//free_content0:
//fee0:0
function articleCreateOrUpdateArticle(token, appMsgId, articlesJson,confirm){
    if (appMsgId == null) {
        appMsgId = "";
    }
    
    var isMul = 0;
    try{
        articlesJson = JSON.parse(articlesJson);
    }catch(err){
        
    }
    if(articlesJson.length > 1){
        isMul = 1;
    }
    
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=" + isMul + "&isNew=1&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var executeType = "update";
    if(appMsgId == ""){
        executeType = "create";
    }
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"random":"0.0462703350931406"},
                  {"f":"json"},
                  {"vid":""},
                  {"ajax":"1"},
                  {"t":"ajax-response"},
                  {"sub":executeType},
                  {"AppMsgId":appMsgId},
                  {"count":articlesJson.length + ""}];
    
    if(confirm != null || confirm != undefined){
        values.push({confirm:confirm});
    }
    
    for (var i = 0; i < articlesJson.length ; i++) {
        var article = articlesJson[i];
        
        for (var key in article) {
            var newkey = key + i;
            var newdic = {};
            newdic[newkey] = article[key];
            values.push(newdic);
        }
    }
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/operate_appmsg",
    headers:headers,
    values:values
    };
    return JSON.stringify(jsonData);
}

function articleGetArticleByAppMsgId(token, app_msg_id){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token=" + token + "&lang=zh_CN"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token=" + token + "&type=10&appmsgid=" + app_msg_id + "&isMul=1",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function articleGetResource(token, type, fileId, begin){
    var headers = [];
    
    var values = [];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/filepage?token=" + token + "&lang=zh_CN&random=0.560133311431855&f=json&ajax=1&type=" + type + "&begin=" + begin + "&count=10",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

// 预览
function articlePreviewGetArticle(token, userName, appmsgid){
    var headers = [{"Accept": "*/*"},
                   {"Accept-Encoding": "gzip,deflate,sdch"},
                   {"Accept-Language": "zh-CN,zh;q=0.8"},
                   {"Connection": "keep-alive"},
                   {"Host": "mp.weixin.qq.com"},
                   {"Origin": "https://mp.weixin.qq.com"},
                   {"Referer": "https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/send&token=" + token + "&lang=zh_CN"},
                   {"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    var values = [];

    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token=" + token + "&type=10&appmsgid=" + appmsgid + "&isMul=1",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

function articlePreview(token, userName, appMsgId, jsonArray){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token=" + token + "&type=10&appmsgid=" + appMsgId + "&isMul=1"},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"random":"0.0462703350931406"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"imgcode":""},
                  {"t":"ajax-response"},
                  {"sub":"preview"},
                  {"type":"10"},
                  {"vid":""},
                  {"AppMsgId":appMsgId},
                  {"count":jsonArray.length + ""},
                  {"preusername":userName}];
    
    for (var i = 0; i < jsonArray.length; i++) {
        var jsonObject = jsonArray[i];
        
        var title = "title" + i;
        var content = "content" + i;
        var digest = "digest" + i;
        var author = "author" + i;
        var fileid = "fileid" + i;
        var show_cover_pic = "show_cover_pic" + i;
        var sourceurl = "sourceurl" + i;
        var copyright_type = "copyright_type" + i;
        
        var pushTitle = {};
        pushTitle[title] = privateUrlDecode(jsonObject.title);
        values.push(pushTitle);
        
        var pushContent = {};
        pushContent[content] = privateUrlDecode(jsonObject.content);
        values.push(pushContent);
        
        var pushDigest = {};
        pushDigest[digest] = privateUrlDecode(jsonObject.digest);
        values.push(pushDigest);
        
        var pushAuthor = {};
        pushAuthor[author] = privateUrlDecode(jsonObject.author);
        values.push(pushAuthor);
        
        var pushFileid = {};
        pushFileid[fileid] = jsonObject.file_id + "";
        values.push(pushFileid);
        
        var pushShowConverPic = {};
        pushShowConverPic[show_cover_pic] = jsonObject.show_cover_pic + "";
        values.push(pushShowConverPic);
        
        var pushSourceUrl = {};
        pushSourceUrl[sourceurl] = jsonObject.source_url;
        values.push(pushSourceUrl);
    }
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/operate_appmsg",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

//上传视频
function articleUploadVideo(token, ticket_id, ticket){
    
    var headers = [];
    var values = [];
    
    var filename = "video" + new Date().valueOf() + ".mp4";
    
    var formData = "name=\"file\"; filename=\"" + filename + "\"";
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/filetransfer?action=upload_video_cdn&f=json&ticket_id=" + ticket_id + "&ticket=" + ticket + "&token=" + token + "&lang=zh_CN",
    headers:headers,
    values:values
    };
    jsonData.formData = formData;
    return JSON.stringify(jsonData);
}

//新建视频
//type = create update
function articleCrteataOrUpdateVideo(token, type, AppMsgId, title, content, fileid, digest, contenturl){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&isNew=1&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];

    var values = [{"token":token},
                  {"lang":"zh_CN"},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"random":"0.6338910439517349"},
                  {"type":"15"},
                  {"count":"1"},
                  {"AppMsgId":AppMsgId},
                  {"title0":title},
                  {"content0":fileid},
                  {"fileid0":fileid},
                  {"digest0":digest},
                  {"contenturl0":contenturl}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/operate_appmsg?t=ajax-response&sub="+type+"&type=15&token="+token+"&lang=zh_CN",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}


//获取微视返回值
function articleGetWeishiCallback(token, weishiUrl){
    var headers = [];
    var values = [];
   
    var lastIndex = weishiUrl.length;
    if(weishiUrl.indexOf("?") != -1){
        lastIndex = weishiUrl.indexOf("?");
    }
    
    weishiUrl = weishiUrl.substring(0,lastIndex);
    weishiUrl = weishiUrl.substring(weishiUrl.lastIndexOf("/") + 1);
    
    var jsonData = {
    url:"https://open.t.qq.com/api/weishi/show?appid=801451669&callback=callback&token="+token+"&lang=zh_CN&f=json&ajax=1&random=0.2471659816801548&wid="+weishiUrl+"&_=1426819862501",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

//上传微视缩略图
function articleUploadImageByUrl(token, url){
    var headers = [{"Accept":"*/*"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&isNew=1&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [{"token":token},
                  {"lang":""},
                  {"f":"json"},
                  {"ajax":"1"},
                  {"random":"0.42510621016845107"},
                  {"url":url}];
   
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/uploadimgbyurl",
        headers:headers,
        values:values
    };
    
    return JSON.stringify(jsonData);
}

function articleGetBroadcastHistory(token, beginIndex, count){
    var headers = [];
    
    var values = [];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/list&action=history&begin=" + beginIndex + "&count=" + count + "&token=" + token + "&lang=zh_CN&f=json",
    headers:headers,
    values:values,
    };
    
    return JSON.stringify(jsonData);
}

function getFileInfoByFileId(token){
    var headers = [];
    var values = [];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/filepage?1=1&token="+token+"&lang=zh_CN&token="+token+"&lang=zh_CN&f=json&ajax=1&random=0.46478483849205077&group_id=1&begin=0&count=50&type=2",
        headers :headers,
        values :values
    };
    
    return JSON.stringify(jsonData);
}

function articleGetBroadcastHistoryData(token,begin,count){
    var headers = [];
    var values = [];
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/list&action=history&begin="+begin+"&count="+count+"&token="+token+"&lang=zh_CN&mod=wap&f=json",
    headers:headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function articleAppmsgext(token,idJson) {
    var headers = [{"Accept":"application/json"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Content-Type":"application/x-www-form-urlencoded"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&isNew=1&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [{comment:"1"},
                  {reward:"0"},
                  {id:idJson},
                  {token:token},
                  {lang:"zh_CN"},
                  {mod:"wap"},
                  {r:new Date().valueOf() + ""},
                  {f:"json"}];
    var jsonData = {
    url:"https://mp.weixin.qq.com/misc/appmsgext",
    headers:headers,
    values:values
    };
    return JSON.stringify(jsonData);
}

function articleSetprotocolSign(token) {
    var headers = [{"Accept":"application/json"},
                   {"Accept-Encoding":"gzip,deflate,sdch"},
                   {"Accept-Language":"zh-CN,zh;q=0.8"},
                   {"Connection":"keep-alive"},
                   {"Host":"mp.weixin.qq.com"},
                   {"Content-Type":"application/x-www-form-urlencoded"},
                   {"Origin":"https://mp.weixin.qq.com"},
                   {"Referer":"https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&isNew=1&lang=zh_CN&token=" + token},
                   {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"}];
    
    var values = [{issigned:"1"}];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/cgi-bin/setprotocolsign?cgi=setprotocolsign&lang=zh_CN&token=" + token,
    headers:headers,
    values:values
    };
    return JSON.stringify(jsonData);
}

function privateUrlDecode(str){
    str = str.replace(/&lt;/g,"<");
    str = str.replace(/&gt;/g,">");
    str = str.replace(/&quot;/g,"\"");
    str = str.replace(/&amp;/g,"&");
    return str;
}

function readMpArticle(url){
    var headers = [];
    var values = [];
    var jsonData = {
    url:url,
    headers:headers,
    values:values
    };
    return JSON.stringify(jsonData);
}
