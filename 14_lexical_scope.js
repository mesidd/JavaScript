function CreateCounter (){
  let count = 0;
  // Closure Function - Function bounded by its lexical scope
  return function (){
    count++;
    return count;
  }
}

const x = CreateCounter();
const y = CreateCounter();
const z = CreateCounter();


console.log("X call : ",x(),x(),x(),x())
console.log("Y call : ",y(),y())
console.log("Z call : ",z(),z())
