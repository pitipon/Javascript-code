///////// Destructuring - access data inside object

const somchai = {
  name: {
    firstName: 'Somchai',
    lastName: 'Haha'
  },
  age:22,
  gender: 'male'
}

console.log(somchai.name.firstName) //"Somchai"
console.log(somchai.name.lastName) //"Haha"
console.log(somchai.age) //22
console.log(somchai.gender) //"male"

/////////////////////////////////////////////

// "age" and "gender" match with somchai's obj
const {age, gender} = somchai

console.log(age) //22
console.log(gender) //male

// we can use other name to represent "age" and "gender"
const {age: a, gender: g} = somchai

console.log(a) //22
console.log(g) //male

const {name} = somchai
console.log(name) //"[object Object]"

const {name: {firstName, lastName}} = somchai
console.log(firstName + " " + lastName) //"Somchai Haha"

const {name: {firstName: f, lastName: l}} = somchai
console.log(f + " " + l) //"Somchai Haha"
