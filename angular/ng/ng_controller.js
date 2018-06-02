app.controller('external',function($scope){
$scope.ext="外部文件控制器";

});

app.controller('myfilter',function($scope){
$scope.msg="jiaxin";
}).filter('reverse',function(){

return function(text){
return text.split("").reverse().join("");
}
}
);