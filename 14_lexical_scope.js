function increment (){
  let count = 0;
  return function (){
    count++;
    return count;
  }
}

const x = increment();
const y = increment();
const z = increment();


console.log("X call : ",x(),x(),x(),x())
console.log("Y call : ",y(),y())
console.log("Z call : ",z(),z())
