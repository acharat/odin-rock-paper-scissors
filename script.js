//GET Computer Choice -> Print the choice in console
//GET Human Choice -> Print the choice in console
//COMPUTE Score -> Logic for evaluating the winner
//KEEP score
//PLAY Game -> Total of 5 rounds


let humanScore = 0;
let computerScore = 0;
playGame();

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
    console.log('Random Number : ' + choiceValue);
    
    return computerChoice;
}

function getHumanChoice () {
    let humanInput = prompt ("Rock, Paper or Scissors?", '');
    let humanChoice = humanInput.toLowerCase();
    
    return humanChoice;
}

function playRound (round) {

    console.log ('-----ROUND NO.' + round + '-----')

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log('Computer Choice : ' + computerChoice);
    console.log('Human Choice : ' + humanChoice);

    if (computerChoice == humanChoice) {

    } else if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
            round++;
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
    } else {
        
    }

    console.log('Human : ' + humanScore + ' ; Computer : ' + computerScore);
    return round;

}

function playGame () {
    

        for (round = 0 ; round < 5; ) {
            round = playRound(round);
            console.log('Round: ' + round);
        }

        if (humanScore > computerScore) {
            console.log ('Congratulations!! YOU WIN '+ humanScore + ':' + computerScore + '!!!');
        } else {
            console.log('Boo Hoo! YOU LOSE ' + humanScore + ':' + computerScore + '!!');
        }
        }
