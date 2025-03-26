const composeAll = (...fns) => (...val) => fns.reduce(
  (a,b) => b(a), fns.shift()(...val));

const task = composeAll(
  (a,b)=>a*b, 
  (a)=> a*a, 
  (a)=> a+4
);

console.log(task(3,4)); 
// 3 * 4 = 12
// 12 * 12 = 144
// 144 + 4 = 148
