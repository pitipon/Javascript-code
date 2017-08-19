const student = {
  id: 599559,
  name: 'Somchai Haha',
  get(prop) {
    return this[prop]
  }
}

console.log(student.get('name')) //"Somchai Haha"
