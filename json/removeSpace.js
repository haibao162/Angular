var fileList ={};
fileList.name = 'image (2).zip';
fileList.name = fileList.name.split('');

fileList.name = fileList.name.filter(function(data){
return data != ' ';
});
console.log(fileList.name.join(''));


