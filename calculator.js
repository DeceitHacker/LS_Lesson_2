const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');


console.log('Welcome to Calculator!');


function prompt(message){
    console.log(`=> ${message}`);
}

function invalidNumber(number){
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang='en') {
    return MESSAGES[lang][message];
  }
  
  prompt(messages('welcome', LANGUAGE));

while(true){

console.log("What's the first number?");
let number1 = readline.question();
if(invalidNumber(number1)){
    console.log("Enter a valid number");
    break;
}
console.log("What's the second number?");
let number2 = readline.question();
if(invalidNumber(number2)){
    console.log("Enter a valid number");
    break;
}

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 represents division
  output = Number(number1) / Number(number2);
} 
console.log(`The result is: ${output}`);

    prompt('Would you like to perform another operation? (y/n)');

    let answer = readline.question();

   if(answer[0].toLowerCase() !== 'y') break;
}

