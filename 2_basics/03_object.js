// singleton - formed from constructor

// object lierals

const sym= Symbol("key1")

const js_user ={
    0:"ai",
    1:"bi",
    // sym : "value",
    [sym] : "value1",
    "location":"vizag",
    "isactive" : false
}
// console.log(js_user["location"]);
// console.log(js_user.location); // not possible

// console.log(typeof js_user[sym]);
// console.log(typeof sym);

// console.log(js_user[sym]);

//Freeze 

// js_user["email"]="sid"
// console.log(js_user["email"])

// Object.freeze(js_user) // Used for object

// js_user["email"]="kari"

// console.log(js_user["email"])


js_user.greeting=function(){
    console.log("Hello world!");
    
}
// console.log(js_user.greeting);
// console.log((js_user.greeting()));

js_user.greeting2=function(){
    // console.log(js_user["location"])
    console.log(`hi ${this.location}`);
    
}

console.log(js_user.greeting2);
console.log(js_user.greeting2());










