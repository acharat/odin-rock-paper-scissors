//GET Computer Choice -> Print the choice in console
//GET Human Choice -> Print the choice in console
//COMPUTE Score -> Logic for evaluating the winner
//KEEP score
//PLAY Game -> Total of 5 rounds


getComputerChoice();

function getComputerChoice () {
    let choiceValue = parseInt(Math.random()*10)%3;
    let computerChoice = 'Rock';

    switch (choiceValue) {
        case 0: 
            computerChoice = 'Rock';
            break;
        case 1: 
            computerChoice = 'Paper';
            break;
        case 2: 
            computerChoice = 'Scissors';
            break;
    }
    console.log(choiceValue);
    console.log(computerChoice);
}