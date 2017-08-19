class Human {
  constructor(name){
    this.name = name
  }

  printName() {
    console.log(this.name)
  }
}

const somchai = new Human('Somchai')
somchai.printName()


/////// Woman class extend from Human class
class Woman extends Human {
  constructor(name){
    super(name); //send "name" to parent class
  }

  pregnant() {

  }
}

const somsree = new Woman('somsree')
somsree.printName()
