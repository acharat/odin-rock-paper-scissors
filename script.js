// Sample code of community members: https://github.com/bombasticman/Rock-Paper-Scissors | https://bombasticman.github.io/Rock-Paper-Scissors/
// https://ico-nickk.github.io/Rock-paper-scissors-game/ | https://github.com/Ico-Nickk/Rock-paper-scissors-game.git
//https://musketbot.github.io/rock_paper_scissors/ | https://github.com/MusketBot/rock_paper_scissors
// Most liked : https://michalosman.github.io/rock-paper-scissors/ | https://github.com/michalosman/rock-paper-scissors



let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let computerChoice = '';
let round = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
rock.addEventListener('click', handleClick);
paper.addEventListener('click', handleClick);
scissors.addEventListener('click', handleClick);

const restartButton = document.getElementById("restart");
restartButton.addEventListener('click', restartGame);

const results = document.querySelector("#results");
//const scores = document.querySelector("#scores");
const finalResult = document.querySelector("#finalresult");

const playerChoiceDom = document.querySelector("#playerchoice");
const computerChoiceDom = document.querySelector("#computerchoice");
const playerScoreDom = document.querySelector("#playerscore");
const computerScoreDom = document.querySelector("#computerscore");

function getComputerChoice () {
    let choiceValue = parseInt(Math.random()*10)%3;
    computerChoice = 'rock';

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
    
    return computerChoice;
}

function handleClick(event) {
    if(humanScore >= 5 || computerScore >= 5) {
        //Do nothing
    } else {
        if (event.target.id === 'rock') {
        humanChoice = 'rock';
        } else if (event.target.id === 'paper') {
        humanChoice = 'paper';
        } else if (event.target.id === 'scissors') {
        humanChoice = 'scissors';
        }
        computerChoice = getComputerChoice();
        playRound();
    }
}

function restartGame() {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    finalResult.textContent = 'Choose your weapon!';
    //playerChoiceDom.textContent = '?';
    //computerChoiceDom.textContent = '?';
    playerChoiceDom.src = 'img/question.webp';
    computerChoiceDom.src = 'img/question.webp';
    playerScoreDom.textContent = 'Player: 0';
    computerScoreDom.textContent = 'Computer: 0';
    //scores.textContent = '? ?';
}

function playRound () {

    //playerChoiceDom.textContent = `${humanChoice}`;
    //computerChoiceDom.textContent = `${computerChoice}`;
    playerChoiceDom.src = `img/${humanChoice}.png`;
    computerChoiceDom.src = `img/${computerChoice}.png`;
    


    if (computerChoice == humanChoice) {
        // Do nothing. Don't update score. Don't do round++ either.

    } else if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
            // Ensure that user is entering the right options
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
        // In case of typos, do nothing. Don't do round++ either.

    }
    playerScoreDom.textContent = `Player: ${humanScore}`;
    computerScoreDom.textContent = `Computer: ${computerScore}`

    if(humanScore >= 5 || computerScore >= 5) {
        declareWinner();
    }

    //scores.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
}

function declareWinner () {
        
    if (humanScore > computerScore) {     
        finalResult.textContent = `You Win!`;
    }
    else {
        finalResult.textContent = `You Lose!`;
    }
}