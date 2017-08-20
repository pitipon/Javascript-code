///// Composition in Functional Programming

// Program: change string to lowercase and please blank to '-'

//EX1: normal Programming
const title = `Introduction to Javascript`
const lowercase = (a) => a.toLowerCase()
const dasherize = (a) => a.replace(/ +/g, '-')

console.log(dasherize(lowercase(title))) //"introduction-to-javascript"

//EX2: Composition with two Functions
const title = `Introduction to Javascript`
const lowercase = (a) => a.toLowerCase()
const dasherize = (a) => a.replace(/ +/g, '-')

const compose = (fn1, fn2) => (arg) => fn1(fn2(arg))

console.log(compose(dasherize,lowercase)(title))  //"introduction-to-javascript"

//EX3: Composition with many functions
const title = `Introduction to Javascript`
const lowercase = (a) => a.toLowerCase()
const dasherize = (a) => a.replace(/ +/g, '-')

const compose = (...fns) => (arg) => fns.reduce((composed, fn) => fn(composed),arg)

console.log(compose(dasherize,lowercase)(title)) //"introduction-to-javascript"
