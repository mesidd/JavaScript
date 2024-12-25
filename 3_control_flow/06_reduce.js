// reduce function

const mylist = [1,2,3]

const mytotal = mylist.reduce(function(acc,curvalue) {
    return acc + curvalue
},2)

// console.log(mytotal);


const multiple = mylist.reduce( (acc,num) => num * acc ,5) 
// console.log(multiple);


const ShoppingCart = [
    {
        itemName : "DS",
        price : 500
    },
    {
        itemName : "Python",
        price : 1000
    },
    {
        itemName : "C++",
        price : 900
    }
]

const sumofprice = ShoppingCart.reduce( (acc,curr) => acc + curr.price , 0)
console.log(sumofprice)