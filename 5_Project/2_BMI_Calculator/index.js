// calculate = document.querySelector('.content').querySelector('button')

const form = document.querySelector('form');

// store empty value at start
// const height_value = parseInt(document.querySelector('#height').value)

// const weight_value = parseInt(document.querySelector('#weight').value)


form.addEventListener('submit',function(e) {
  e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight= parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');

if(height === '' || height < 0 || isNaN(height)){
  result.innerHTML = `Please give a valid data!`;
}
else if(weight === '' || weight < 0 || isNaN(weight)){
  result.innerHTML = `Please give a valid data! `;
}
else {
  const bmi = ((weight*10000) / (height*height)).toFixed(2);

  const category = function(value=bmi) {
    if(value < 18.6) return "Under Weight"
    else if ( value > 24.9) return "Overweight"
    else return "Normal"
  }

  result.innerHTML = `<span>BMI : ${bmi}</span><br />
  <span>[ ${category()} ]` 
  }

});

