//  const user = new Object() //singleton
const user ={} // non-singleton 

// console.log(typeof user);

// user.name="sidd"
// user.id="22PE"

//multiple nesting possible

// console.log(user);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2) // {} good practice

const obj3={...obj1,...obj2} // spread method

// console.log(obj3);


// const user_details =[
//     {
//         id:1,
//         name:"s"
//     }
//     ,{
//         sa:3,
//         ngk:4
//     },
//     {
//         id:4,
//         name:"hi"
//     }
// ]
// console.log(user_details[0]);

// const user_info={
//     1:'a',
//     2:'b'
// }

// // console.log(Object.keys(user_details)) // returns array of keys
// console.log(Object.values(user_info)) // returns values of keys
// console.log(Object.keys(user_info))
// console.log(Object.entries(user_info)); // returns elements

// console.log(user_info.hasOwnProperty(1))


// Destructuring 

const course = {
    coursename : "js_course",
    price : 1000
}

console.log(course.coursename);

const {price : p} = course //

// console.log((price));
console.log(p)



