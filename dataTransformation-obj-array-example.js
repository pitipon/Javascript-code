////////////////// Data Transformation
//by using (map, filter, find , findIndex, reduce, reduceRight)

const nums = [1,2,3]
console.log(nums.map(num => num*2))

///////////////////////
//change advisorId from 1 to 2

const students = [
  { id: 1, advisorId: 1 },
  { id: 2, advisorId: 2 },
  { id: 3, advisorId: 3 },
  { id: 4, advisorId: 1 },
  { id: 5, advisorId: 3 }
]

console.log(
  students.map(student =>
       student.advisorId === 1 ? {...student, advisorId: 2} : student)
)

///////////////////////
// Find who have advisorId = 1

const students2 = [
  { id: 1, advisorId: 1 },
  { id: 2, advisorId: 2 },
  { id: 3, advisorId: 3 },
  { id: 4, advisorId: 1 },
  { id: 5, advisorId: 3 }
]

console.log(
  students2.filter(student => student.advisorId === 1)
)

////////////////////////
// Find sth in array

const nums2 = [1,2,3,4,5]
console.log(nums2.find(a => a % 2 === 0)) //2

console.log(nums2.findIndex(a => a % 2 === 0)) //1

//////////////////////

console.log(nums2.reduce((sum, a) => sum+a)) //15
console.log(nums2.reduce((sum, a) => sum+a, 10)) //25
console.log(nums2.reduceRight((sum, a) => sum+a)) //15  reduceRight will calculate data from right to left
