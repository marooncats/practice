/*
prompt user to enter range
    verify input

generate random number
prompt user to enter guess
    verify input
        no strings or nums less than zero or over range 

log guess in array
    store num in array to share at end what user guessed as well as prevent duplicates

compare to random num
    compare to num, show diff message depending on results
        if guess is lower than num display tip to guess higher
        if guess is higher than num display tip to guess lower
        if guess is equal to num display win and show score

use find(), push(), and .length 
*/

let userRange = get_Range("Enter the range in which you'd like to guess...");
document.getElementById("heading").innerHTML = "Guess a number between 1 and " + userRange;

let randomNum = Math.floor(Math.random() * userRange + 1);

//console.log(randomNum)
var userGuesses = [];
var userAttempts = 0;

function do_guess() {
    let userGuess = document.getElementById("guess").value;
    let message = document.getElementById("message");

    if (isNaN(userGuess)) {
        message.innerHTML = "That is not a valid number!";
    }

    else if (userGuess < 1 || userGuess > userRange) {
        message.innerHTML = "That number is not within range.";
    }

    else if (userGuess < randomNum) {
        message.innerHTML = "No, try a higher number.";
        userGuesses.push(userGuess);
        userAttempts += 1;
    }

    else if (userGuess > randomNum) {
        message.innerHTML = "No, try a lower number.";
        userGuesses.push(userGuess);
        userAttempts += 1;
    }

    else {
        userGuesses.push(userGuess);
        message.innerHTML = "You got it!";
        userAttempts += 1;
        message.innerHTML += "It took you " + userAttempts.length + " tries and your guesses were " + userGuesses.join(", ");
    }

}