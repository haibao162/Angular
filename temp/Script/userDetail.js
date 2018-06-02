function userDetailGetAppInfo(token){
    var headers = [];
    var values = [];
    
    var jsonData = {
    url:"https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev&token=" + token + "&lang=zh_CN&f=json",
    headers:headers,
        values :values
    };
    
    return JSON.stringify(jsonData);
}

function userDetailGetUserDetail(token){
    var headers = [];
    var values = [];
    
    var jsonData = {
        url:"https://mp.weixin.qq.com/cgi-bin/settingpage?t=setting/index&action=index&token=" + token + "&lang=zh_CN&f=json",
        headers:headers,
        values :values
    };
    
    return JSON.stringify(jsonData);
}

function udGetHeadImage(token,fakeid){
    var headers = [];
    var values = [];
    var jsonData = {
        url :"https://mp.weixin.qq.com/misc/getheadimg?fakeid=" + fakeid + "&token=" + token + "&lang=zh_CN",
        headers :headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function udGetQRCodeImage(token,fakeid){
    var headers = [];
    var values = [];
    var jsonData = {
        url :"https://mp.weixin.qq.com/misc/getqrcode?fakeid=" + fakeid + "&token=" + token + "&style=1",
        headers :headers,
    values:values
    };
    
    return JSON.stringify(jsonData);
}

function udGetApplyProgress(token)
{
    var headers = [];
    var values = [];
    var jsonData = {
        url :"https://mp.weixin.qq.com/pay/index.php/c/get_apply_progress?g_ty=ajax",
        values :values,
        headers:headers
    };
}

function userDetailGetFansAndNewMessageCount(token){
	var headers = [{"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},
	               {"Accept-Encoding":"gzip,deflate,sdch"},
	               {"Accept-Language":"zh-CN,zh;q=0.8"},
	               {"Host":"mp.weixin.qq.com"},
	               {"Connection":"keep-alive"},
	               {"Referer":"https://mp.weixin.qq.com/"},
	               {"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36 CoolNovo/2.0.9.20"}];
	var values = [];
	var jsonData = {
			url:"https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&f=json&token=" + token,
			headers :headers,
			values : values
	};
	return JSON.stringify(jsonData);
}


function userGetAdHostIndex(token){
    var headers = [];
    var values = [];
    var jsonData = {
        url :"https://mp.weixin.qq.com/merchant/ad_host_index?t=ad_system/host_index&token=" + token + "&lang=zh_CN&f=json",
        values :values,
    headers:headers
    };
    return JSON.stringify(jsonData);
}