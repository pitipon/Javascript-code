/////// Problem "couter" is not immutibity
/*
const counter = {
  count:0,
  myIncrement(){
    this.count++
  },
  myDecrement(){
    this.count--
  }
}

counter.count = 5
console.log(counter.count)
*/


///////////////// change to function

const counter = (function(){
  let count=0

  return {
    increment(){
      count++
    },
    decrement(){
      count--
    },
    getCount(){
      return count
    }
  }
})()

counter.increment()
console.log(counter.getCount())
