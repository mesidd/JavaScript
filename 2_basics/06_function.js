// Function

// function sayname(){
//     console.log("hi")
//     console.log("sir")
// }
// sayname() // sayname - reference 

function addno(n1,n2){ // n1,n2 - parameters
    // console.log(n1+n2);
    return n1+n2

    
}

// console.log(addno(5,3)) // 5,3 - arguments
// addno(3,"a") // not possible
// const result = addno(8,4)
// console.log(result);

// console.log(addno()); // NaN

// !userename -- false
// username = 'sam' --> default value
function login(userename){
    if (userename === undefined){
        console.log("Enter username");
        return 
    }
    return `${userename} logged in.`
}
console.log(login("sid"));
console.log(login(""));
console.log(login());





