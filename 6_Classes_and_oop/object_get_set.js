const user = {
    _email : "sdfhs",
    _password : "gskln",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this.value = value
    }
}

console.log(user.email);
 
// less used 