
const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter( (num) => num > 4 ) // return value

const value = myNum.filter( (num) => { // braces mandatory to give return manually
    num > 4
    return num // if scope is created
} ) 

// console.log(value) 

// Books

const books = [
    {
        name: "To Kill a Mockingbird",
        publish: 1960,
        edition: "1st Edition",
        category: "Fiction"
    },
    {
        name: "1984",
        publish: 1949,
        edition: "2nd Edition",
        category: "Dystopian"
    },
    {
        name: "The Great Gatsby",
        publish: 1925,
        edition: "Revised Edition",
        category: "Classic"
    },
    {
        name: "Moby-Dick",
        publish: 1851,
        edition: "Illustrated Edition",
        category: "Adventure"
    },
    {
        name: "The Catcher in the Rye",
        publish: 1951,
        edition: "50th Anniversary Edition",
        category: "Literature"
    }
];


let listofbook = books.filter( (item) => item.publish > 1950)
// console.log(listofbook);

listofbook = books.filter( (item) => item.category==="Literature" && item.publish > 1900)
console.log(listofbook);


// More Applications


const MyNum = [1,2,3,4,5,6,7,8,9,10] 

// MyNum - it's an array so it is pointing the address which is constant
// so value can be modified 

// newlist = myNum.map( (num) => num + 10 )

// console.log(newlist)

newNum = myNum.map( (num) => num + 5 ).filter( (num) => num%2==0 )

console.log(newNum)