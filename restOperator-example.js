const obj1 = {a:1, b:2, c:1}
const obj2 = {c:3, d:4}

console.log({...obj1, ...obj2})  //{a:1,b:2,c:3,d:4}

const arr1 = [1,2,3,4]
const arr2 = [4,5,6]

console.log([...arr1, ...arr2]) //[1, 2, 3, 4, 4, 5, 6]

function sum(...rest){
  console.log(rest)
}

sum(1,2,3,4) //[1, 2, 3, 4]
sum(1,2,3) //[1, 2, 3]

function sum2(a,b,...rest){
  console.log(rest)
}

sum(1,2,3,4) //a=1, b=2 , rest = 3,4
sum(1,2,3,4) //a=1, b=2 , rest = 3
