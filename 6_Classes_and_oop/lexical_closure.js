function makeFunc() {
    
    const name = "Work_Office";

    function displayName() {
        console.log(name);
    }
    return displayName(); // here displayName() takes name also  
}

const obj = makeFunc();
obj;