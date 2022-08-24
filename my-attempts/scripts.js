// declare variables
//let userRange; // user inputted range
//let submitGuess; // submits user input for guess
let playAgain; // goes back to main screen
let quitButton; // goes to aw you quitted screen
//let userNumTries; //past #'s user tried
//let userAttempts; // total # of attempts
let errorEntry = "Oops, you didn't enter a valid number, please try again.";
let numRepeat = "You've already used this number, try again.";
let numHigher = "So Close!! Try a higher number.";
let numLower = "So Close!! Try a lower number.";

//generating range
while (true) {
    userRange = prompt(`Enter the maximum range you'd like to guess on...`);
    if (userRange > 2 && typeof userRange === 'string') {
        userRange = Math.floor(userRange);
        break;
    }
    else {
        alert(errorEntry); //invalid character - no negative #s, alpha characters, or symbols
    }
}

//generating random number rightNumber
let randomNum = Math.floor(Math.random() * userRange) + 1;


//user's guess
//range alert
document.getElementById('userRange').innerHTML = userRange;

let userGuesses = [];

//comparing userGuess to randomNum
function check() {
    //getting user's guess
    var userGuess = document.forms['inputForm']['guess'].value;

    userGuess = ParseInt(userGuess);

    //validate guess
    if (typeof ParseInt(userGuess) === 'number') {
        if (userGuess > userRange || userGuess < 0) {
            document.getElementById('result').innerHTML = errorEntry;
        }

        else {
            if (userGuesses.find((e) => e === userRange)) {
                document.getElementById('result').innerHTML = numRepeat;

            } else {
                //3. Track the Guesses
                userGuesses.push(userGuess);
                if (userGuess == randomNum) {
                    document.getElementById('result').innerHTML = `You got it! The number was ${randomNum}. It took you ${userGuesses.length} tries and your guesses were ${userGuesses.map(function (n) { return n; }).join(',')}`;
                } else if (userGuess < randomNum) {
                    document.getElementById('result').innerHTML = numHigher;
                } else {
                    document.getElementById('result').innerHTML = numLower;
                }
            }
        }
    }
    else {
        document.getElementById('result').innerHTML = 'That is not a number!';
    }
}