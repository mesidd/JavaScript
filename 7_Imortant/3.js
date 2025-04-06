function * generateEven(start, end){
  while(start <= end){
    yield (start++) * 2
  }
}

const number = generateEven(0,5)

// console.log(number.next().value) // 0
// console.log(number.next().value) // 2
// console.log(number.next().value) // 4

for ( const num of number ){
  console.log(num)
}

// Custom Iterator 

const obj = {
  *[Symbol.iterator](){
    yield '1'
    yield '2'
    yield '3'
    yield '4'
  }
}

for ( const item of obj ){
  console.log(item)
}
