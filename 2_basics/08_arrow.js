const user = {
    username : "xyz",
    price : 999,

    wlcommsg : function() {
        console.log(`${this.username} is enrolled.`)
    }

}
// this - current context 
// user.wlcommsg()

// // Object.freeze(user) // no change
// user.username="sam" // change
// user.wlcommsg()

// console.log(this);

// this - not defined in function

// function nay(){
//     let username="is"
//     console.log(this.username)
// }
// nay()


//Arrow function  ()=> 

// const chai = () => {
//     let username ="sid"
//     console.log(this)
// }
// chai()

const sum1 = (num1,num2) => num1+num2 // implicit return 
// const sum1 = (num1,num2) => (num1+num2) no return if ()
// const sum1 = (num1,num2) => {return num1+num2 } - use return {}
// console.log(sum1(5,6))

const obj=(num1,num2) => ({username : "sid"}) // () must for object
console.log(obj(5,4))
