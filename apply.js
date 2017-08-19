const foo = (a,b,c) => a+b+c

let arr=[1,2,3]

console.log(foo.apply(null,arr)) //6

//////////////////////////////

console.log(Math.min(1,2,3)) //1

console.log(Math.min(arr)) //NULL - need to fix by using apply

console.log(Math.min.apply(null,arr)) //1
