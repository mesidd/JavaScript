const arr = [1,2,3,4,5]

const n = arr.map((e)=> e*2);

console.log(n);

if(!Array.prototype.myMap) {
  Array.prototype.myMap = function(userFn) {
    const arr = this
    const result = []
    for ( let i = 0  ; i < this.length; i++ ){
      const value = userFn(this[i]);
      result.push(value);
    }
    return result;
  }
}

const n1 = arr.myMap( (e) => e * 3 );
console.log(n1);
