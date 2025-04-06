console.log('5' + undefined) // 5undefined
console.log('5' - undefined) // NaN
console.log('a' - '2') // NaN
console.log('5' - true) // 4
console.log('5' - null) // 5

console.log(parseInt('5')) // 5
console.log(Number('5')) // 5
console.log(parseInt('45d')) // 45
console.log(Number('')) // 0

console.log(String(500)) // '500'
console.log(String(null)) // null
console.log(String(undefined)) // undefined
console.log((400).toString()) // 400

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(0)) // false
console.log(Boolean('')) // false

console.log(10 == '10') // true
console.log(10 === '10') // false

do {
  console.log(i)
  i++
}
while( i < 5)

for ( const key in obj ) // key, value
for ( const num of arr ) // values
