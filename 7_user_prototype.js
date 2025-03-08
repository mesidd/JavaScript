const arr = [1,2,3,4,5]

const n = arr.map((e)=> e*2);

console.log(n);

// myMap
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

// myFilter

if(!Array.prototype.myFilter){
  Array.prototype.myFilter = function(userFn){
    const result = []
    for ( let i = 0; i < this.length; i++){
      if ( userFn(this[i]) == 1){
        result.push(this[i]);
      }
    }
    return result
  }
}

const n5 = arr.myFilter((e)=> e %2 == 0)

console.log(n5);
