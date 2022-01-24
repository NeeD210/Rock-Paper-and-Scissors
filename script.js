/* Now I'm going to create a function that logs the input of the user, disregarding case sensitivity*/

function userChoice(){
    let choice = prompt('What are you going to pick? Rock, paper or scissors?');
    choice = choice.toLowerCase(); //making the input lowercase (or uppercase) is the easiest way to disregard case sensitivity when using a string.

    if (choice != 'rock' && choice!= 'paper' && choice != 'scissors'){
        console.log('The answer you typed is invalid, try again');
        choice = userChoice(); //Here I use recursiveness to make sure that a valid answer is recieved, it seemed much easier than using loops
    }

    console.log(`You picked ${choice}`);

    return choice; //This variable is going to contain the election of the user
}

/* Next, I'm going to create a function that makes the computer choose randomly*/

function computerChoice(){
    let x = Math.random();
    let choice;
    if (x<(1/3)){      //Here I'm deviding all the possible values for the function Math.random() into three, in order to get an even distribution among the options
        choice = 'rock';
    }
    else if (x>(2/3)){
        choice = 'scissors';
    }
    else{
        choice = 'paper';
    }

    console.log(`I pick ${choice}`);

    return choice; //This variable is going to contain the electio of the computer
}


//Now, I'm going to create a function that calls both functions and compares the results in order to get the answer of the round

function round(){
    let user = userChoice();
    let computer = computerChoice();
    let score = 0;

    //Here I'm going to list all the possible scenarios where the user wins
    if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')){
        console.log('You win!!')
        score = 1
    }
    else if (user === computer){ //Independantly of what is chosen, if both the user and the computer pick the same choice then it's a tie
        console.log('We tied! Let\'s try again!');
        score = round(); //Here I use the properties of recursiveness in order to get a result that's not a tie
    }
    else{ //the only remaining outcomes to address are the ones where the computer wins
        console.log('I win :)')

    }
    return score; //This variable is going to contain the result of the round
}


// Now I'm going to build a game function that helps me keep track of the score
function game(){
    let userScore = 0;
    let computerScore = 0;

    while (computerScore <3 && userScore<3){ //When either of the conditionals turns false is because someone won
        console.log(`The score goes:\n You:${userScore} \n Me: ${computerScore}`);
        let score = round();
        if(score === 1){ //here score works like a beacon, it will be 1 only when the user wins, and if it's not 1, then it means that it's because the computer won since the round function doesn't allow ties
            userScore++;
        }
        else{
            computerScore++;
        }

    }
    switch (computerScore){
        case 3: console.log('I win the game! :P'); //if the computer scored 3 points, then it means it won
        break;
        default: console.log('You win the game, well played!'); //the only other scenario possible is that the user wins, that's why no conditionals are needed
        break;
    }

}


let x = game();


