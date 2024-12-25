// nested array

const code_lang = [
    {
        name: 'Python',  // .method
        file : '.py'
    },
    {
        name: 'C++',
        file : '.cpp'
    },
    {
        name: 'Javascript',
        file : '.js'
    }
]

code_lang.forEach((item) => {
    // console.log(`${item.name} - ${item.file}`)
})

// foreach doesn't return any value

value = code_lang.forEach((item)=>{
    return item
})

console.log(value) // undefined --> no return value