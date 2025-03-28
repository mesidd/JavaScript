import fs from 'fs';

// Sync Write
fs.writeFileSync('./test.txt',"Hey test file!")

//Async Write
fs.writeFileSync('./test.txt', "New Information.", (err)=>{
  console.log(err)
})

//Sync Read -- Return value
const result = fs.readFileSync('./info.txt', "utf-8");
console.log(result);


// Async Read -- No return 
fs.readFile('./info.txt', 'utf-8', (err, value)=> {
  if(err){
    console.log("Error: ",err)
  }
  else{
    console.log(value);
  }
})

// Append File -- don't overwrite
fs.appendFileSync('./info.txt',`${Date.now()}Information added\n`);

const newresult = fs.readFileSync('./info.txt','utf-8')
console.log(newresult);

// Unlink -- delete files
fs.unlinkSync('./test.txt');
