/////// Object Literal //////

var somchai = {
  height: 170,
  weight: 99,
  getBMI: function() {
    return this.weight / Math.pow(this.height / 100, 2)
  },
  neighbors: [
    somsree
  ]
}

var somsree = {
  height: 150,
  weight: 40,
  age: 99
}

console.log(somchai.getBMI())
