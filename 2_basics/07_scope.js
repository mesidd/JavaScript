// Scope 

// var has not limited scope 

// let , const - fixed scope

function one(){
    const username = "sid"
    function two(){
        const website="youtube"
        console.log(username); // sid
    }
    // console.log(website); // error
    two() // sid
}
// one()// sid -- error -- sid

console.log(add(8));

function add(num){
    return num+1
}

console.log(add(8));