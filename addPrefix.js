function Prefixer(prefix = ''){
  this.prefix = prefix
}

Prefixer.prototype.prefixArray = function(array = []) {
  console.log(this)
  return array.map(item => `${this.prefix} ${item}`)
}

const prefixer = new Prefixer('Dr.')
const doctors = [
    'Somchai',
    'Somsree',
    'Somset'
  ]

  console.log(prefixer.prefixArray(doctors))
