const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("Enter your loan amount: ");
let loan = readline.question();

console.log("Enter your APR as a two digit decimal, (e.g. 5%  as 0.5): ");
let apr = readline.question();

console.log("Enter your loan duration in year(s): ");
let loanDuration = readline.question();

let monthlyInterest = apr / 12;
let loanDurationInMonths = Number(loanDuration) * 12;

let mortgage = Number(loan) * (monthlyInterest / (1 - Math.pow((1+ monthlyInterest), (loanDurationInMonths))));

console.log(`The total amount with interest is ${mortgage}`);