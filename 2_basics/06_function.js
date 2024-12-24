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
// function login(userename){
//     if (userename === undefined){
//         console.log("Enter username");
//         return 
//     }
//     return `${userename} logged in.`
// }
// console.log(login("sid"));
// console.log(login("")); 
// console.log(login());


// function calculate_cart(...num){ //...num
//     return num
// }
// console.log(calculate_cart(700)); // 700
// console.log(calculate_cart(700,800)); // 700
// console.log(calculate_cart(700,800)); // ...num


// function list_value(val1,val2,...num){
//     return num
// }
// console.log(list_value(700,800,900)) // 700,800 - val1,val2 - num=900


 function handle_object(user){
    console.log(`Username is : ${user.username}, City : ${user.city}`);
 }
const user ={ 
    username : "roy",
    city : "nyc"
}

 handle_object({"username": "rohan", "city" : " bangkok"})




