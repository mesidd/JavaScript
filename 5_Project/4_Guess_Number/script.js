const form = document.querySelector('form');
const prev_guess = document.getElementById('prev_guess');
const rem_guess = document.getElementById('rem_guess');
const submit = document.getElementById('submit');

const user_input = document.getElementById('user_value');
const result_message = document.getElementById('res');
const button = document.getElementById('button');


let user_value = null;
let count = 0;
let random_number;

function getRandomInt() {
  return Math.floor((Math.random()*98)+2)
}

function displayMessage(message) {
  user_input.disabled = true;
  submit.disabled = true;
  button.style.display ='inline';
  result_message.innerHTML = `${message}`; 
}

form.addEventListener('submit',function(e) {
e.preventDefault();

if (count >= 10) return;

count += 1;

random_number = getRandomInt();
  
user_value = parseInt(document.querySelector('#user_value').value);

if(random_number === user_value){
displayMessage("Congratulations! You won the game.");
} 
else {
prev_guess.innerHTML = user_value ;
rem_guess.innerHTML = (10 - count);
}

form.reset();

if(count == 2) {
displayMessage("Alas! You lost the game.");
user_input.style.display = 'none';
submit.style.display = 'none';
}
});

function restart_game() {
  user_input.disabled = false;
  submit.disabled = false;
  user_input.style.display = 'inline';
  submit.style.display = 'inline';
  button.style.display = 'none';
  count = 0;
  prev_guess.innerHTML = 'Null';
  rem_guess.innerHTML = 10;
  result_message.innerHTML = '';
  random_number = getRandomInt();
}