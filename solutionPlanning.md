Here I'm going to write my analisis of what I'll need to do to complete this project.

Description:
I need to create an algorithm where the user can play rock paper and scissors against the computer.
The process is going to be the following:
    1. The player is going to select either rock, paper or scissors.
    2. The computer is going to do the same, using a randomizing function.
    3. The algorithm is going to check the election of both players and decide the winner accordingly.
    4. The algorithm is going to repeat itself in order to play a best-of-five.

Plan:
In order to make this algorithm possible I'm going to do the following:
    1. I will log the input of the user, and I will make it so that it understands the input disregarding case-sensitivity.
    2. I will create a function that selects randomly among rock, paper, of scissors.
    3. I will create a function that calls 1 and 2, and then compares them, returning the results of the round.
    4. I will create a function that calls 3 and then logs the wins and losses to make it a best-of-five.