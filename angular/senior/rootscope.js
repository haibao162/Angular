
app.controller('branch3',branch3);
branch3.$inject=['myService','$scope','$rootScope','$element'];
function branch3(myService,$scope,$rootScope,$element){
	var vmds = this;
	$scope.third = "I am branch3";
	vmds.message = "mess";
}