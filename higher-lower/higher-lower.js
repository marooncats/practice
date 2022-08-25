var maxnum = parseInt(prompt("What the maximum number should be? "));
document.getElementById("heading").innerHTML = "Guess a number between 1 and " + maxnum;
let num = Math.floor(Math.random() * maxnum) + 1;
console.log(num);
var guesses = []


function do_guess() {
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");
    if (isNaN(guess)) {
        message.innerHTML = "That is not a number!";

    }
    if (guess < 1 || guess > maxnum) {
        message.innerHTML = "That number is not in range, try again.";

    } else if (guesses.find((e) => e === num)) {
        message.innerHTML = "You already used this number. Try again.";

    } else if (guess < num) {
        message.innerHTML = "No, try a higher number.";
        guesses.push(guess);

    } else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        guesses.push(guess);

    } else if (guesses.find((e) => e === num)) {
        message.innerHTML = "You already used this number. Try again.";

    } else {
        guesses.push(guess);
        message.innerHTML = "You got it!";
        message.innerHTML += "It took you " + guesses.length + " tries and your guesses were " + guesses.join(", ");
    }
}