class Teacher {
  constructor(fname,lname,id){
    this.fname = fname;
    this.lname = lname;
    this.id = id;
  }

  getFullName = function() {
    console.log(this.fname, this.lname)
  }

  getId = function(){
    console.log(this.id)
  }

  static createId(){
    return "1234"
  }

}

const t1 = new Teacher ("Rohan", "Roy", "PE2124");

// console.log(t1.fname);
// console.log(t1.lname);
// console.log(t1.id);
// t1.getFullName();




class Director extends Teacher {
  constructor(...args){
    super(...args.slice(0,3));
    this.email = args[3];
  }

  getEmail = function(){
    console.log(this.email)
  }
}


const d1 = new Director ("Kamlesh","Sinha","DI21","dhar@gamil.com");

// d1.getFullName();
// d1.getEmail();



class VC extends Director{
  constructor(...args){
    super(...args.slice(0,4))
    this.degree = args[4]
  }

  getDegree = function(){
    console.log(this.degree)
  }
}


const vc1 = new VC ("Kriti","Sanon","S213","sanon@gmail.com","MS Computer");


vc1.getFullName();
vc1.getDegree();
vc1.getId();
vc1.getEmail();

console.log(d1 instanceof Teacher); // true

console.log(vc1 instanceof Teacher); // true

console.log(vc1 instanceof Director); // true

console.log(t1 instanceof Director); // false

console.log(Teacher.createId()); // 1234

console.log(d1.createId()); // Error - object can't access static function / variable

