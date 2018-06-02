var array1=[2,3,4,5,6,8,9,12,14,15];
var array2=['SHZ_1F','SHZ_1F','SHZ_1F','SHZ_2F','SHZ_2F','SHZ_3F','SHZ_3F','SHZ_4F','SHZ_2F'];

function getTarget(array,target){
	var object=[];
	var objectIndex=0;
	var target=array[target];
   for(var i=0;i<array.length;i++){
        if(array[i]==target){
               object[objectIndex]=i;
               objectIndex++;
        }

   }
   return object;
}

function getMap(fromArray,endArray){
var json=[];
var elite=[];

for(var i=0;i<fromArray.length;i++){
     temp=getTarget(fromArray,i);
       for(var j=0;j<temp.length;j++){
           elite.push(endArray[temp[j]]);

       }     //return array1[index]
        json.push(JSON.parse('{"'+fromArray[i]+'":['+elite.join(",")+']}'));   
       elite=[];
 
}
  return json;
}

console.log(getMap(array2,array1));

// var temp=getTarget(array2,3);
// console.log(temp);

var js='{"e":12}';
console.log(JSON.parse(js));

var data={"SHZ":"parse"};
console.log(data.SHZ);

// var e=[2,3,4];
//  console.log(e.join(","));// string
// console.log(e); //array
// //splice delete elements
// var arr = new Array(6)
// arr[0] = "George"
// arr[1] = "John"
// arr[2] = "Thomas"
// arr[3] = "James"
// arr[4] = "Adrew"
// arr[5] = "Martin"
// arr.splice(2,0,"William");  //add William 
// console.log(arr);  //George,John,William,Thomas,James,Adrew,Martin

// arr.splice(1,1,'haibao'); //replace John to haibao
// console.log(arr);   //George,haibao,William,Thomas,James,Adrew,Martin

// arr.splice(5,2); //5:arr[4],  2:arr[4],arr[5] 
// console.log(arr); //remove arr[4] and arr[5]
