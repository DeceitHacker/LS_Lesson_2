const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','lizard', 'spock'] ;

function prompt(message){
    console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}, by entering "r" for rock, "sc" for scissors, "sp" for spock, "p" for paper, and "l" for lizard.`);
let choice = readline.question();

if(choice.includes('r')){
    choice = 'rock';
} else if(choice.includes('sc')){
    choice = 'scissors';
} else if(choice.includes('sp')){
     choice = 'spock';
} else if(choice.includes('p')){
    choice = 'paper';
} else if(choice.includes('l')){
    choice = 'lizard';
}

while (!VALID_CHOICES.includes(choice)){
    prompt("That's not a valid choice");
    choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}, computer chose ${computerChoice}`);
 
choiceOutcome(choice);

 function choiceOutcome(choice){
    let yourScore = 0;
    let computerScore = 0;
    if((choice === 'rock' && computerChoice === 'scissors') || 
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'spock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'rock' && computerChoice === 'scissors')) {
        prompt('You win!');
        yourScore += 1;
    } else if((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock') ||
            (choice === 'spock' && computerChoice === 'lizard') ||
            (choice === 'scissors' &&  computerChoice === 'spock') ||
            (choice === 'lizard' && computerChoice === 'scissors') ||
            (choice === 'paper' && computerChoice === 'lizard') ||
            (choice === 'spock' && computerChoice === 'paper') ||
            (choice === 'rock' && computerChoice === 'spock') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
                prompt('Computer wins!');
                computerScore += 1;
            } else {
                prompt("It's a tie");
            }
            if(yourScore === 5){
                console.log("Congratulations, you are the winner!");
            } else {
                console.log("Sorry you lost, computer is the winner!");
            }
 }


function playAgain(){
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while(answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n".');
        answer = readline.question().toLowerCase();
    }

    if(answer[0] !== 'y'){
       break;   //Not sure what else to use besides break in order to break 
    }
}
playAgain();