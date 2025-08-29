//GET Computer Choice -> Print the choice in console
//GET Human Choice -> Print the choice in console
//COMPUTE Score -> Logic for evaluating the winner
//KEEP score
//PLAY Game -> Total of 5 rounds


getComputerChoice();
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choiceValue = parseInt(Math.random()*10)%3;
    let computerChoice = 'rock';

    switch (choiceValue) {
        case 0: 
            computerChoice = 'rock';
            break;
        case 1: 
            computerChoice = 'paper';
            break;
        case 2: 
            computerChoice = 'scissors';
            break;
    }
    console.log(choiceValue);
    console.log(computerChoice);
}

function getHumanChoice () {
    let humanInput = prompt ("Rock, Paper or Scissors?", '');
    let humanChoice = humanInput.toLowerCase();
    console.log(humanChoice);
}