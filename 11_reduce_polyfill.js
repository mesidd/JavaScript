
if(!Array.prototype.myReduce){
  Array.prototype.myReduce = function(cb,initial = undefined){
    let acc = initial || this[0]; 
    const k = initial ? 0 : 1 ;
     for(let j = k; j < this.length; j++){
      acc = cb(acc, this[j])
     }
     return acc;
  }
}
const newsum = arr.myReduce((acc,curr) => acc + curr,12);

console.log(newsum);
