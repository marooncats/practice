/*
Random Number Selection
    - Set up random number selection

User Range Setup
    - Prompt user to enter desired range
    - Validate user input
        - If the user enters a negative number, string, or symbol- display error message.

User Guess Input
    - Prompt user to input their guess
    - Validate user input
        - If the user enters a negative number, symbol, string, or number over the user Range- display error message.
    - Compare user input to random number selection
        (see below)

Random Number Comparison
    - If the inputted number is less than, but not equal to, the random number display message tip to try a higher value.
        - So close, try a higher number.
    - If the inputted number is greater than, but not equal to, the random number display message tip to try a lower value.
    - So close, try a lower number.
    - If the inputted number is equal to the random number display congratulations message.

Wrong Number Comparison
    - If user receives a message stating they chose the wrong number, they are allowed to continue or quit the match.
        - If user quits a message displays stating their stats for the match (The right number was INSERT HERE. You tried INSERT time(s). You tried the numbers INSERT. Try again?)

Winner Message
    - You win! The number was INSERT and it took you INSERT time(s) to guess the right number. Your guesses were INSERT. Play again?
*/
let userNumTries = userGuess.length;
let userAttempts = userGuess.map(function (n) { return n; });
let randomNum = Math.floor(Math.random() * userRange) + 1;
let errorMsg = "Please enter a valid number.";

console.log(randomNum);

userRange = prompt(`Enter the desired max range you'd like to guess with...`);


function checkValidity() {
    if (userRange = 'string' || userRange < 0 || isNaN(userRange)) {
        message.innerHTML = errorMsg;
    }

    else {
        userGuess = prompt("Enter a number between 0 and " + userRange + " .");

        if (userGuess = 'string' || userRange < 0 || isNaN(userRange)) {
            message.innerHTML = errorMsg;
        }

        else if (userGuess === randomNum) {
            message.innerHTML = "Congratulations, you've won. The number was " + randomNum + "and it took you " + userNumTries + "time(s) to guess the right number. Your guesses were " + userAttempts + " . Play again?";
        }

        else if (userGuess != randomNum && userGuess > randomNum) {
            message.innerHTML = "So close! Try a lower number.";
        }

        else (userGuess != randomNum && userGuess < randomNum){
            message.innerHTML = "So close! Try a higher number.";
        }
    }

    when(userGuess != randomNum){
        message.innerHTML(userNumTries + userAttempts);
    }
}