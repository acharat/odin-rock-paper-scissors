//GET Computer Choice -> Print the choice in console
//GET Human Choice -> Print the choice in console
//COMPUTE Score -> Logic for evaluating the winner
//KEEP score
//PLAY Game -> Total of 5 rounds


let humanScore = 0;
let computerScore = 0;
playRound();

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
    
    return computerChoice;
}

function getHumanChoice () {
    let humanInput = prompt ("Rock, Paper or Scissors?", '');
    let humanChoice = humanInput.toLowerCase();
    
    return humanChoice;
}

function playRound () {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log('Computer Choice : ' + computerChoice);
    console.log('Human Choice : ' + humanChoice);

    if (computerChoice == humanChoice) {
        humanScore = 0;
        computerScore = 0;
    } else {
            switch (computerChoice) {
                case 'rock': 
                switch (humanChoice) {
                    case 'paper': 
                        humanScore++;
                        break;
                    case 'scissors':
                        computerScore++;
                        break;
                }
                break;
                case 'paper': 
                switch (humanChoice) {
                    case 'scissors': 
                        humanScore++;
                        break;
                    case 'rock':
                        computerScore++;
                        break;
                }
                break;
                case 'scissors':
                    switch (humanChoice) {
                    case 'rock': 
                        humanScore++;
                        break;
                    case 'paper':
                        computerScore++;
                        break;
                }
                break;

            }
    }

    console.log('Human : ' + humanScore + ' ; Computer : ' + computerScore);

}