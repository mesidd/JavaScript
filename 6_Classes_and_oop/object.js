function multiply_by_5(num){
    return num * 5
}

multiply_by_5.power = 2

console.log(multiply_by_5(5))
console.log(multiply_by_5.power)
console.log(multiply_by_5.prototype);


function create_user(username, score ) {
    this.username  = username
    this.score = score
}

create_user.prototype.increment = function() {
    return ++this.score
}

create_user.prototype.print_me = function() {
    console.log(`Score is ${this.score}`)
}

const chai = new create_user("chai", 25)
const tea = new create_user("chai", 250)

console.log(chai.increment());
tea.print_me();


// new keyword initiates the creation of a new JS object

// prototype is linked   
