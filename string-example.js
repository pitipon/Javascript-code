///////// string example

var str = 'Hello World'

console.log(str.toUpperCase())  //"HELLO WORLD"
console.log(str.toLowerCase())  //"hello world"

console.log(str.slice(3,5)) //"lo"
console.log(str.split(' ')) //["Hello", "World"]

console.log(str.indexOf('o')) //4
console.log(str.indexOf('55555555'))  // It will return -1
console.log(str.lastIndexOf('o')) //7
console.log(str.lastIndexOf('rl')) //8

console.log(str.startsWith('He')) //true
console.log(str.endsWith('ld')) //true
console.log(str.includes('Wo')) //true
