let userRange = get_range("Enter the range you'd like to pick between.");
let results =

    function get_range(prompt) {
        let valid_input = false;
        let userGuess, input;

        while (!valid_input) {
            input = window.prompt(prompt);

            userGuess = Number(input);

            if (userGuess != NaN && userGuess > 0) {
                valid_input = true;
            }
        }

        return userGuess;
    }



