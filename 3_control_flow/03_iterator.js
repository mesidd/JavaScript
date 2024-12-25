
// Array specific loops :

const numbers =[1,2,3,4,5]

for (const num in numbers){ // index of array
    // console.log(num)
}

for (const num of numbers){ // value of array
    // console.log(num)
}

// Maps --> Unique values

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('FR',"France")
// map.set('IN',"Indonesia") // store only unique key value

// console.log(map);

for (const [key,value] of map) {
    // console.log(`Key : ${key} - Value : ${value}`)
}

for (const key of map.keys()) {
    // console.log(key)
}

for (const value of map.values()) {
    // console.log(value)
}

// for (const key in map) --> Not Working 

// Object --> not iterable in this manner

const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myobj) {
        // console.log(`key : ${key} - value : ${myobj[key]}`)
    }

// Callback Function has no name

const coding = ['js','java','cpp','python','ruby']

coding.forEach( function (item) {
    // console.log(item)
})

coding.forEach((item)=> {
    // console.log(item)
})


// Function call in foreach

function print(name){
    console.log(name)
}

// coding.forEach(print) // give reference

// coding.forEach(print()) // don't execute

coding.forEach((item,index,arr)=>{ // index & array also accessible
    console.log(item, index,arr)
})