///// Higher Order Functions

//example of bad one
function log(level, message){
  console.log(`${level} ${message}`)
}

log('error', 'test1')
log('error', 'test2')
log('error', 'test3')

//change to higher order function
function log2(level){
  return function(message){
    console.log(`${level}: ${message}`)
  }
}

const debugLevel = log2('DEBUG')
debugLevel('Test1')
debugLevel('Test2')
debugLevel('Test3')

//change previous function to arrow function
const log3 = level => message => (
  console.log(`${level}: ${message}`)
)
const prototypeLevel = log3('PROTOTYPE')
prototypeLevel('Test1')
prototypeLevel('Test2')
prototypeLevel('Test3')
