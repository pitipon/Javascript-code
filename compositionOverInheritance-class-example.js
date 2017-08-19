////////////// "Composition over Inheritance" for class
// obj will include many action class ... and avoid inheritance of class
// because Inheritance have problem in design ... sometime not flexible

const Walkable = {
  walk() {console.log("I'm walking")}
}

const Printable = {
  print() {console.log(this.name)}
}

const Barkable = {
  bark() {console.log("Boooooo")}
}

const Dog = (name) => ({
  name,
  ...Printable,
  ...Walkable,
  ...Barkable
})

const Cat = (name) => ({
  name,
  ...Printable,
  ...Walkable
})

//////////////////////////////////////////////////////
// How to using these class

const dog = new Dog('Boo')
dog.print()
dog.bark()

const cat = new Cat('Meaw')
cat.print()
cat.walk()
