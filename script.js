let userChoice;
let userScore = 0;
let computerScore = 0;

const pickDisplay = document.querySelector('.pick-display');
const computerPickDisplay = document.querySelector('.computer-pick-display');
const scoreDisplay = document.querySelector('.score-display');
const resultDisplay = document.querySelector('.result-display');
const winner = document.querySelector('.winner');
const displays = document.querySelector('.displays');
const playAgain = document.createElement('button');
playAgain.setAttribute('id', 'btn');
playAgain.setAttribute('class', 'again')
playAgain.textContent = 'Want to play again?'


function getComputerChoice(){
    let x = Math.random();
    let choice;

    if (x<(1/3)){ 
        choice = 'rock';
    }
    else if (x>(2/3)){
        choice = 'scissors';
    }
    else{
        choice = 'paper';
    }

    computerPickDisplay.textContent = `I pick ${choice}`;

    return choice; 
}



function playRound(user){ //the input given will be the one given by the eventlistener, which will be the user's choice
    let computer = getComputerChoice();
    if (userScore<5 && computerScore<5){
        //Here I'm going to list all the possible scenarios where the user wins
        if ((user === 'rock' && computer === 'scissors') || 
            (user === 'paper' && computer === 'rock') || 
            (user === 'scissors' && computer === 'paper')){
            resultDisplay.textContent = 'You win!!';
            userScore += 1
            
        }
        //Independantly of what is chosen, if both the user and the computer pick the same choice then it's a tie
        else if (user === computer){ 
            resultDisplay.textContent = 'We tied!';
            //In order to get a result that's not a tie I will use the function recursively
            
        }
        else{ 
            //the only remaining outcomes to address are the ones where the computer wins
            resultDisplay.textContent = 'I win :)'
            computerScore += 1;

        }}
    else{
        resultDisplay.textContent= 'the winner is already decided :$'
    }
    if(userScore === 5){ //if either one of the players get to 5, the following text will be displayed.
        winner.textContent = 'You won the game, well played!';
        displays.appendChild(playAgain);
        playAgain.addEventListener('click', () => {
            userScore = 0;
            computerScore = 0;
            scoreDisplay.textContent = `You: ${userScore} \n Me: ${computerScore}`;
        })
    }
    else if(computerScore === 5){
        winner.textContent = 'I won the game :P'; 
        displays.appendChild(playAgain);
        playAgain.addEventListener('click', () => {
            userScore = 0;
            computerScore = 0;
            scoreDisplay.textContent = `You: ${userScore} \n Me: ${computerScore}`;
        })
    }
}
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => { //eventlistener for the rock button
    userChoice = 'rock';
    pickDisplay.textContent = `You picked ${userChoice}`;
    playRound(userChoice); //each time the button is clicked, it will trigger a new round
    scoreDisplay.textContent = `You: ${userScore} \n Me: ${computerScore}`;
})
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => { //eventlistener for the paper button
    userChoice = 'paper';
    pickDisplay.textContent =`You picked ${userChoice}`;
    playRound(userChoice);
    scoreDisplay.textContent = `You: ${userScore} \n Me: ${computerScore}`;
})
const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => { //eventlistener for the scissors button
    userChoice = 'scissors';
    pickDisplay.textContent =`You picked ${userChoice}`;
    playRound(userChoice);
    scoreDisplay.textContent = `You: ${userScore} \n Me: ${computerScore}`;
})
    