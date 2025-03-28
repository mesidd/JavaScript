import fs from 'fs';

// Blocing .... Sync

console.log('1');
const result = fs.readFileSync('./info.txt','utf-8');
console.log(result);
console.log('2\n');
// Output : 1 "..." 2


// Non-Blocking .... Async

console.log('1');
fs.readFile('./info.txt','utf-8',(err, res)=>{
  console.log(res);
})
console.log('2');
// Output : 1 2 "...."

// Default pool size - 4

// os.cpus().length - 8
