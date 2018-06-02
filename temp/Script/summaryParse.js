function pSummaryGetAppidAndToken(response) {
	if (privateIsNull(response)) {
		return null;
	}
	var jsonData = {};
	jsonData.base_resp = {};

	try {
        var json = JSON.parse(response);
        jsonData.json = json;
        if (json.base_resp.ret >= 0) {
            var appid = json.plugin_login_info.appid;
            var pluginToken = json.plugin_login_info.plugin_token;
            var devtype = 3 + "";
            
            var appId = {
                appid:appid,
                token:pluginToken,
                devtype:devtype
            };
            
            jsonData.base_resp.ret = 0;
            jsonData.appId = appId;
        }else{
            jsonData.base_resp.ret = -1600;
            jsonData.base_resp.msg = "获取统计失败";
        }
    } catch (err) {
		jsonData.base_resp.ret = -1600;
		jsonData.base_resp.msg = "获取统计失败";
	}
	return JSON.stringify(jsonData);
}


/** ********************************SummaryCtrUserSummaryGetTrendChartData******************************************* */

function pSummaryCtrUserSummaryGetTrendChartDataNewUser(response) {
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataCancelUser(response) {
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataNetUser(response) {
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataCumulateUser(response) {
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataNewUserFromPassPort(response){
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataNewUserFromName(response){
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataNewUserFromMenu(response){
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataNewUserFromCard(response){
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}

function pSummaryCtrUserSummaryGetTrendChartDataNewUserFromQrCode(response){
	return privatePSummaryCtrUserSummaryGetTrendChartData(response);
}


function privatePSummaryCtrUserSummaryGetTrendChartData(response){
	if (privateIsNull(response)) {
		return null;
	}
	var jsonData = {};
	jsonData.base_resp = {};
	try {
		response = response.replace(/null/g, "0");
		var retJson = JSON.parse(response);
		jsonData.base_resp.ret = 0;
		jsonData.data = retJson.series;
	} catch (err) {
		jsonData.base_resp.ret = -1602;
		jsonData.base_resp.msg = "解析数据失败";
	}
	return JSON.stringify(jsonData);
}

/** ********************************SummaryCtrUserSummaryGetTableData******************************************* */

function pSummaryCtrUserSummaryGetTableData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrUserSummaryGetKeyIndexDataAndChart******************************************* */

function pSummaryCtrUserSummaryGetKeyIndexDataAndChart(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrUserAttrGetChartData******************************************* */

function pSummaryCtrUserAttrGetChartData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrUserAttrGetCityData******************************************* */
function pSummaryCtrUserAttrGetCityData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrUserAttrGetProviceDistributeData******************************************* */
function pSummaryCtrUserAttrGetProviceDistributeData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrUserAttrGetDeviceData******************************************* */
function pSummaryCtrUserAttrGetDeviceData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrUserAttrGetTableData******************************************* */
// index = 0
function pSummaryCtrUserAttrGetTableDataCity(response) {
	return privatePSummaryCtrUserAttrGetTableData(response);
}
// index = 1
function pSummaryCtrUserAttrGetTableDataSex(response) {
	return privatePSummaryCtrUserAttrGetTableData(response);
}
// index = 2
function pSummaryCtrUserAttrGetTableDataLanguage(response) {
	return privatePSummaryCtrUserAttrGetTableData(response);
}
// index = 3
function pSummaryCtrUserAttrGetTableDataDevice(response) {
	return privatePSummaryCtrUserAttrGetTableData(response);
}
// index = 4
function pSummaryCtrUserAttrGetTableDataMobileModel(response) {
	return privatePSummaryCtrUserAttrGetTableData(response);
}
// index = 9
function pSummaryCtrUserAttrGetTableDataProvince(response) {
	return privatePSummaryCtrUserAttrGetTableData(response);
}

function privatePSummaryCtrUserAttrGetTableData(response){
	if(privateIsNull(response)){
		return null;
	}
	
	var jsonData = {};
	jsonData.base_resp = {};
	try {
		response = response.replace(/null/g, "0");
		var retJson = JSON.parse(response);
		jsonData.base_resp.ret = 0;
		jsonData.data = retJson.data;
	} catch (err) {
		jsonData.base_resp.ret = -1602;
		jsonData.base_resp.msg = "解析数据失败";
	}
	return JSON.stringify(jsonData);
}
/** ********************************summaryCtrArticleDetailGetList******************************************* */
function pSummaryCtrArticleDetailGetList(response) {
	if (privateIsNull(response)) {
		return null;
	}

	var jsonData = {};
	jsonData.base_resp = {};

	var retJson = JSON.parse(response);
    try{
            jsonData.base_resp.ret = 0;
            var data = retJson.data;
            var retData = [];
            for(var i = 0;i < data.length;i++){
                var dataIitm = {};
                dataIitm.id = data[i].id;
                dataIitm.title = data[i].title;
                dataIitm.time = data[i].time;
                dataIitm.index = data[i].index;
                retData.push(dataIitm);
            }
            jsonData.data = retData;
            jsonData.hasMore = retJson.hasMore;
    }catch(err){
        jsonData.base_resp.ret = -1602;
        jsonData.base_resp.msg = "解析数据失败";
    }

	return JSON.stringify(jsonData);
}

/** ********************************summaryCtrArticleDetailGetList******************************************* */
function pSummaryCtrArticleAnalyseGetKeyIndexDataAndChart(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrArticleDetailGetList******************************************* */
function pSummaryCtrArticleAnalyseGetTableData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrArticleAnalyseGetTrendChartData******************************************* */
// index = IntPageReadUser,IntPageReadCount source_list=-1
function pSummaryCtrArticleAnalyseGetTrendChartData_1(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}
// index = IntPageReadUser,IntPageReadCount source_list=0
function pSummaryCtrArticleAnalyseGetTrendChartData0(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}
// index = IntPageReadUser,IntPageReadCount source_list=1
function pSummaryCtrArticleAnalyseGetTrendChartData1(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}
// index = IntPageReadUser,IntPageReadCount source_list=2
function pSummaryCtrArticleAnalyseGetTrendChartData2(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}
// index = IntPageReadUser,IntPageReadCount source_list=3
function pSummaryCtrArticleAnalyseGetTrendChartData3(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}
// index = IntPageReadUser,IntPageReadCount source_list=4
function pSummaryCtrArticleAnalyseGetTrendChartData4(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}
// index = IntPageReadUser,IntPageReadCount source_list=5
function pSummaryCtrArticleAnalyseGetTrendChartData5(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}

// OriPageReadUser,OriPageReadCount(原文页阅读人数,原文页阅读次数)
function pSummaryCtrArticleAnalyseGetTrendChartDataOri(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}

// ShareUser(分享人数) ShareCount(分享次数)
function pSummaryCtrArticleAnalyseGetTrendChartDataShare(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}

// AddToFavUser(微信收藏)
function pSummaryCtrArticleAnalyseGetTrendChartDataAddToFav(response) {
	return privatePSummaryCtrArticleAnalyseGetTrendChartData(response);
}

function privatePSummaryCtrArticleAnalyseGetTrendChartData(response){
	if (privateIsNull(response)) {
		return null;
	}

	var jsonData = {};
	jsonData.base_resp = {};

	var retJson = JSON.parse(response);
	try{
        jsonData.base_resp.ret = 0;
		var data = [];
        
        var retData = retJson.series;
        for(var i = 0; i < retData.length ;i++){
            data.push(retData[i]);
        }
        jsonData.data = data;
	}catch(err){
		jsonData.base_resp.ret = 1602;
		jsonData.base_resp.msg = "解析数据失败";
	}

	return JSON.stringify(jsonData);
}

/** ********************************summaryCtrMessageGetKeyIndexDataAndChart******************************************* */
function pSummaryCtrMessageGetKeyIndexDataAndChart(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrMessageGetChartData******************************************* */
// index MsgUser(消息发送人数)
function pSummaryCtrMessageGetChartDataMsgUser(response) {
	return privatePSummaryCtrMessageGetChartData(response);
}

// index MsgCount(消息发送次数)
function pSummaryCtrMessageGetChartDataMsgCount(response) {
	return privatePSummaryCtrMessageGetChartData(response);
}

// index MsgPerUser(人均发送次数)
function pSummaryCtrMessageGetChartDataMsgPerUser(response) {
	return privatePSummaryCtrMessageGetChartData(response);
}

function privatePSummaryCtrMessageGetChartData(response){
	if (privateIsNull(response)) {
		return null;
	}

	var jsonData = {};
	jsonData.base_resp = {};
    var retJson = JSON.parse(response);
    try{
        jsonData.base_resp.ret = 0;
        jsonData.data = retJson.series;
    }catch(err){
        jsonData.base_resp.ret = 1602;
        jsonData.base_resp.msg = "解析数据失败";
    }

	return JSON.stringify(jsonData);
}

/** ********************************summaryCtrMessageGetDistributeData******************************************* */
function pSummaryCtrMessageGetDistributeData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrMessageGetTableData******************************************* */
function pSummaryCtrMessageGetTableData(response) {
	return privatePSummaryBaseResponse(response);
}

/** ********************************summaryCtrKeywordGetTableData******************************************* */
// iscustom -1(全部)
function pSummaryCtrKeywordGetTableDataAll(response) {
	return privatePSummaryBaseResponse(response);
}
// iscustom 0(非自定义关键词)
function pSummaryCtrKeywordGetTableDataUnCustom(response) {
	return privatePSummaryBaseResponse(response);
}
// iscustom 1(自定义关键词)
function pSummaryCtrKeywordGetTableDataCustom(response) {
	return privatePSummaryBaseResponse(response);
}

function privatePSummaryCtrKeywordGetTableData(response){
	if (privateIsNull(response)) {
		return null;
	}

	var jsonData = {};
	jsonData.base_resp = {};

	var retJson = JSON.parse(response);
	if (retJson.hasMore) {
		jsonData.base_resp.ret = 0;
		jsonData.data = retJson.data;
	} else {
		jsonData.base_resp.ret = 1601;
		jsonData.base_resp.msg = "数据加载完毕！";
	}

	return JSON.stringify(jsonData);
}

/** ********************************private******************************************* */

function privatePSummaryBaseResponse(response) {
	if (privateIsNull(response)) {
		return null;
	}

	var jsonData = {};
	jsonData.base_resp = {};
	try {
		var data = JSON.parse(response);
		jsonData.data = data;
		jsonData.base_resp.ret = 0;
	} catch (err) {
		jsonData.base_resp.ret = -1600;
		jsonData.base_resp.msg = "获取统计失败";
	}
	return JSON.stringify(jsonData);
}

function privateIsNull(response) {
	if (response == null || response.length == 0) {
		return true;
	}
	return false;
}