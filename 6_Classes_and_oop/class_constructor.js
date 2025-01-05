// function set_username(username) {
//     this.username = username
// }

// function create_user(username, email, password) {
//     set_username.call(this, username)
//     this.email = email
//     this.password = password
// }

// const student = new create_user("roy", "roy@gmail.com", "asg8h9")
// console.log(student.email);

//es6

// class User {
//      constructor(username, email, password) {
//          this.username = username 
//          this.email = email
//          this.password = password
//         }

//         encrypt() {
//             return `${this.password}abc`
//         }
// }

// const per1 = new User("ram","disf","ghsfk133")
// console.log(per1.encrypt())

function car(model,modelname) {
    this.model = model
    this.modelname = modelname
}

car.prototype.details = function() {
    return `${this.model} - ${this.modelname}`
}

const c1 = new car('audi', 'a8')

console.log(c1.details());
