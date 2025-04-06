// Closure

function outer(){
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  return inner
}
const fn = outer()
fn() // 1
fn() // 2

// Generator 

function* actress(){
  yield 'Rakul'
  yield 'Kriti'
  yield 'Neha'
  yield 'Sonam'
}

const girls = actress()

console.log(girls.next().value);

girls.next(); // SKip

for ( const girl of girls){
  console.log(girl)
}

// Output : 
// Rakul
// Neha
// Sonam
