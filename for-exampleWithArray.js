///// Example "for" with array

var arr = ['Somchai','Somsree','Somset']

for(var i=0; i<arr.length ; i++){
  console.log(arr[i]); //"Somchai","Somsree","Somset"
}

arr.forEach(function(item,index,array){
  console.log(item,index)
}); //"Somchai",0,"Somsree",1,"Somset",2

for(let index in arr){
  console.log(index); //0,1,3
}

for(let value of arr){
  console.log(value); //"Somchai","Somsree","Somset"
}
