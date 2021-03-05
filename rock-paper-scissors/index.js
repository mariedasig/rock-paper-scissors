let userChosen;
let computerChosen;
var result = results();
const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const randomNumber = Math.round(Math.random()* (3)); //generates the random number for rock, paper, or scissors
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll('.choices'); //querySelectorAll is to select multiple elements

//get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChosen = e.target.id;
    generatedComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
}))

//get a random computer choice

function generatedComputerChoice() {
    if (randomNumber === 1) {
        return computerChosen = 'rock'
    } else if (randomNumber === 2) {
        return computerChosen = 'paper'
    } else if (randomNumber ===3) {
        return computerChosen = 'scissors'
    }
};


//get results
function results() {
    if (userChosen === computerChosen) {
        return result = 'It is a tie!';
    } else if (userChosen === 'rock' && computerChosen === 'paper') {
        return result = 'You lose!';
    } else if (userChosen === 'rock' && computerChosen === 'scissors') {
        return result = 'You win!';
    } else if (userChosen === 'paper' && computerChosen === 'rock') {
        return result = 'You win!';
    } else if (userChosen === 'paper' && computerChosen === 'scissors') {
        return result = 'You lose!';
    } else if (userChosen === 'scissors' && computerChosen === 'rock') {
        return result = 'You lose!';
    } else if (userChosen === 'scissors' && computerChosen === 'paper') {
        return result = 'You win!';
    }
};