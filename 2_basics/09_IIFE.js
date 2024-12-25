// ()()
// first one definition 
// second one execution

// function alert(){
//     console.log("Alert!!!!")
// }
// alert()

(function alert(){ // named iife
    console.log("Alert!!!!")
})(); //; necessary

// Global scope pollution create problem 

// IIFE - Immediately Invoked Function Expression

((name) => {
    console.log(`Ok ${name}`)
}) ('sid');

// two iife -- use ;