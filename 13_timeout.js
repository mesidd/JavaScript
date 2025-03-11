let timer;
function xyz (){
  timer = setTimeout(()=>{
    console.log("Hello")
  },3000);
}

xyz(); // Hello
xyz(); // Hello
xyz(); // clear out - each time refernce id changes
clearTimeout(timer);
xyz(); // Heello


