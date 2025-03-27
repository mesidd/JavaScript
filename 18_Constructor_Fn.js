// function Person (fname, lname, num) {
//   this.fname = fname;
//   this.lname = lname;
//   this.num = num;

//   this.getFullName = function (){
//     console.log(this.fname, this.lname)
//   };
// }

// const p1 = new Person("Mahesh", "Roy", 1234);

// p1.getFullName();

// console.log(p1.num);


//Constructor 

class Person {
  constructor(fname, lname, num){
    this.fname = fname;
    this.lname = lname;
    this.num = num;


    this.getFullName = function(){
      console.log(this.fname , this.lname)
    }
  }

  getLname = function(){
    console.log(this.lname);
  }

  getFname = function(){
    console.log(this.fname);
  }

}

const p1 = new Person("Sid","Roy",4792);

console.log(p1.num);

p1.getFname();

p1.getLname();

p1.getFullName();
