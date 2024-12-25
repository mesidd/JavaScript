// JavaScript Execution Content

// {} -> Global Execution 

/*
    1. Global Execution Content
    2. Function Execution Conetent
    3. Eval Execution Content


    Memory Creation Phase 
    Execution Phase

    let val1 = 10
    let val2 = 5
    function addNum(num1, num2) {
    let total = num1 + num2 
    return total
    }
    let result1 = addNum(val1,val2)
    let result2 = addNum (10,2)

    How this is executed ?

    1. Global Execution (this) 
    2. Memory Phase  
        val1 - undefined
        val2 - undefined
        addNum - definiton
        result - undefined --> after addNum(35line) - 15
        result2 - undefined
    3. Execution Phase 
        val1 - 10
        val2 - 5 
        addNum -> new variable environment + Execution thread
            memory phase
                val1 - undefined
                val2 - undefined
                total - undefined
            execution context
                num1 = 10
                num2 = 5
                total = 15
                total returned to global execution context
            deleted (new variable environment + Execution thread)
        addNum --> nve + thread
            memory phase
            same ....

    # Call Stack: LIFO

    open inspect 
    go source
    snippet
    create file.js
    pull up tab if down 
    see stack
    write code in file 
    save it
    pointout break
    click run on stack side
    then run on source
    watch the stack line

        


            */