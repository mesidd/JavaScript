const bcrypt = require('bcrypt');

function create(password){
  return bcrypt.hash(password, 10);
}

function test(a,b){

  let h1, h2;
  create(a).then((e)=>{
    h1 = e;
    return create(b)
  }).then((e)=> {
    h2 = e;
    console.log(h1);
    console.log(h2);

    const match = h1 === h2 ? "True" : "False";
    console.log(match);
  });
  
}

test("hello","hello"); // has different hashed value for same arguments
