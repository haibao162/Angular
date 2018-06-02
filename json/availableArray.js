var BenchLocation=[];
var Allbenches=[];
var availableBenches=[];

function getavaliableBenches(){
	var index=0;
	availableBenches[index]={};
for(var i=0;i<devices.length;i++){
      for(var j=0;j<AllBenches.length;i++){
         if(devices[i].DMS.dmsID == AllBenches[i].id && removeRepeatAttribute(availableBenches,Allbenches[i].id)){
            availableBenches[index].id=Allbenches[i].id;
            availableBenches[index].ById={};
            availableBenches[index].ById=Allbenches[i];
            index+=1;
            availableBenches[index]={}; 
            }
        } 	
  	}
}
function removeRepeatAttribute(array,value){
if(typeof(array[0]) == typeof({}) && array.length > 0){	
for(var i=0;i<array.length;i++){
      if( array[i].id == value){
      	return false;
      }

}
}
return true;
}



var m=[{id:1,name:"qw"}];
console.log(typeof(m[0]) == typeof({}));//true




var availableBenches={ems_id_1:{name:1}};
console.log(availableBenches.ems_id_1.name);
console.log(availableBenches["ems_id_"+1]);
var data=[];
var index=0;
for(var i=0;i<10;i++){
data[index++]=i;

console.log(index);
}
console.log(data);


var da=[];
for(var i=0;i<10;i++){
   da[i]={};
   da[i][i]=i;
   da[i].ById={};
  da[i].ById.location="test";
  da[i].ById.publicIPAddress="127.0.0.1";
}
console.log(da);

var d={};
var l="1";
d[l]="re";
console.log(d);
d={"key":"value"};
console.log(d);
var arr=[1,3,4,5];
console.log(typeof(arr) == typeof([]));
arr=[{}];
console.log(arr.length);//1