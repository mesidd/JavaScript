class User {
    constructor(email, password) {

        this.email = email
        this.password = password
    }

    get password() {
        // return this._password.toUpperCase() // Maximum call stack size exceeds
        return `${this._password}.kone`
    }

    set password(value) {
        this._password = value 
    } 

    get email() {
        return this._email.toUpperCase(); // _email -> private property
    }
    set email(value) {
        this._email = value
    }

}

const ram = new User("ram@gmail.com" , "abc1")

console.log(ram.password)
console.log(ram.email)
