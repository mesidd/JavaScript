
let my_name = "sidharth "

// console.log(my_name.length);

// console.log(my_name.trueLength);

let my_fav = ["arm", "boy"]

let hero_power = {
    thor: "hammer",
    spiderman: "Sling",

    get_spider_power : function () {
        console.log(`Spider Power is ${this.spiderman}`)
    }
}

// console.log(hero_power.get_spider_power())

Object.prototype.sidd = function() {
    console.log(`Sidd is present and the object is created.`)
}

my_fav.sidd()

Array.prototype.HeyFun = function () {
    console.log("Hi array work.");    
}

// hero_power.HeyFun();
my_fav.HeyFun();