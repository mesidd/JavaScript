
const radius = [2,3,4,5];

// area, diameter, circumference

const area = function(radius){
  return  Math.PI * radius * radius
}

const circumference = function(radius){
  return Math.PI * 2 * radius;
}

const diameter = function(radius){
  return 2 * radius;
}

// const calculate = radius.map(logic); // use map directly

const calculate = function (radius , logic){
  let output = [];
  for( let i = 0 ; i < radius.length ; i++ ){
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(calculate(radius, area));
