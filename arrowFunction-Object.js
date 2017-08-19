//// normal funtion

function foo() {
  return {a:1,b:2}
}

//// change to arrow function

const foo2 = () => ({a:1,b:2})

console.info(foo2())
