//declaration of Max Number
let N;

//1. Prompt for Max Number
while (true) {
    N = prompt('Enter max number?');
    if (N > 2 && typeof N === 'string') {
        N = Math.round(N);
        break;
    } else {
        alert('Invalid entry!');
    }
}

//initially generating and storing a random integer between 1 and N
let randomNum = Math.floor(Math.random() * N) + 1;

//appedning user given max number to the span object with id = "maxNum"
document.getElementById('maxNum').innerHTML = N;

//guesses array
let guesses = [];

//this method will check the user guess with randomNum
function check() {
    //fetching user's guess
    var num = document.forms['inputForm']['guess'].value;

    num = parseInt(num);

    //2. Validate the Guess
    //Note: this never been to else since we used type text for input in html form
    if (typeof parseInt(num) === 'number') {
        //if number out of range i.e, not in 1-N
        if (num > N || num < 0) {
            document.getElementById('result').innerHTML =
                'That number is not in range, try again.';
        } else {
            //4. Prevent Duplicate Guesses using find method
            if (guesses.find((e) => e === num)) {
                document.getElementById('result').innerHTML =
                    'You already used this number. Try with other number!';
            } else {
                //3. Track the Guesses
                guesses.push(num);
                if (num == randomNum) {
                    //comparing num with randomNum and displaying appropriate message on paragraph object with id = "result"
                    //When the user wins the game by guessing correctly, add the number of guesses and the list of guesses to the victory message
                    //using template literals of javascript
                    document.getElementById(
                        'result'
                    ).innerHTML = `You got it! It took you ${guesses.length
                    } tries and your guesses were ${guesses
                        .map(function (n) {
                            return n;
                        })
                        .join(',')}
                `;
                } else if (num < randomNum) {
                    document.getElementById('result').innerHTML =
                        'No, try a higher number.';
                } else {
                    document.getElementById('result').innerHTML =
                        'No, try a lower number.';
                }
            }
        }
    } else {
        document.getElementById('result').innerHTML = 'That is not a number!';
    }
}