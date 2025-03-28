
// Export 
function add(a,b){
  console.log(a+b)
}

function sub(a,b){
  console.log(a-b)
}

export {add,sub}

//Import


import {add,sub} from "./p.js";

add(4,5);
sub(6,2);
