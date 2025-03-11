function createCounter ( step = 1, initial = 0){
  return function (){
    initial += step;
    return initial
  }
}

const x = createCounter(2, 4)
const y = createCounter(4,-4);

const arr = [ x(), x(), x(), x()]
const arr2 = [ y(), y(), y(), y()]

console.log(arr)
console.log(arr2)

