function pCountArticelCount(response){
    if (response == null || response.length == 0) {
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    var retArticleCount = [];
    
    var articleCountJson = JSON.parse(response);
    try{
        var articleCountData = articleCountJson.data;
        for (var i = 0; i < articleCountData.length; i++) {
            articleCountItemData = articleCountData[i];
            
            var retArticleCountItem = {};
            retArticleCountItem.id = articleCountItemData.id;
            retArticleCountItem.title = articleCountItemData.title;
            retArticleCountItem.name = articleCountItemData.name;
            
            var retArticleItemIndex = [];
            var articleItemIndex = articleCountItemData.index;
            for(var j = 0 ;j < articleItemIndex.length ;j++){
                retArticleItemIndex.push(articleItemIndex[j]);
            }
            
            retArticleCountItem.index = retArticleItemIndex;
            
            retArticleCount.push(retArticleCountItem);
        }
        
        jsonData.base_resp.ret = 0;
        jsonData.articleCount = retArticleCount;
    }catch(err){
        jsonData.base_resp.ret = -1400;
        jsonData.base_resp.msg = "图文分析获取失败，请稍后重试！";
    }
    
    return JSON.stringify(jsonData);
}

function pCountGetUserCount(response){
    if(response == null || response.length == 0){
        return null;
    }
    
    var jsonData = {};
    jsonData.base_resp = {};
    
    var retUserCounts = [];
    try{
        var userCount = JSON.parse(response).chart;
        userCount =  JSON.parse(JSON.stringify(userCount).replace(/null/g,"0"));
        
        var newUser = userCount.NewUser.series[0].data;
        var cancelUser = userCount.CancelUser.series[0].data;
        var netUser = userCount.NetUser.series[0].data;
        var cumulateUser = userCount.CumulateUser.series[0].data;
        
        for(var i = 0 ; i < newUser.length ;i++){
            var retUserCount = {};
            retUserCount.newUser = newUser[i].y;
            retUserCount.cancelUser = cancelUser[i].y;
            retUserCount.Netuser = netUser[i].y;
            retUserCount.cumulateUser = cumulateUser[i].y;
            
            retUserCount.time = newUser[i].name;
            
            retUserCounts.push(retUserCount);
        }
 
        jsonData.list_user = retUserCounts;
        jsonData.base_resp.ret = 0;
    }catch(err){
        jsonData.base_resp.ret = -1401;
        jsonData.base_resp.msg = "获取用户分析失败，请稍后重试！";
    }
    
    return JSON.stringify(jsonData);
}

