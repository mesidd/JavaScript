
// Math.PI = 5

// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(descriptor);

const first = {
    name : 'karim',
    roll : '34',
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(first,'roll'));
// console.log(first.name);

first.name = 'rohan'

// console.log(first.name);

Object.defineProperty(first, "name", {
    writable: false,
    enumerable: true // allows to looping
})

// console.log(Object.getOwnPropertyDescriptor(first,'name'));

first.name = "roy"
// console.log(first.name);

for (let [key,value] of Object.entries(first)) {
    console.log(`${key} : ${value}`);
}


