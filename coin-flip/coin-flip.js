function flip(guess) {
    //random number
    let result = Math.floor(Math.random() * 2) + 1;

    //message paragraph
    let message = document.getElementById("message");

    //check result of random vs guess
    if (result == 1) { // heads
        if (guess == "heads") {
            message.innerHTML = "You guessed heads.<br> The coin flips and comes up heads! Good guess!";
        }

        else {
            message.innerHTML = "You guessed tails.<br> The coin flips and comes up heads! Try again.";
        }
    }
    else { //tails
        if (guess == "tails") {
            message.innerHTML = "You guessed tails.<br> The coin flips and comes up tails. Good guess!";
        }

        else {
            message.innerHTML = "You guessed heads.<br> The coin flips and comes up tails. Try again!";
        }
    }
}