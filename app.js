/**
 * Returns a random integer in the range [min, max], inclusive of min and max
 *
 * @param {min} min The lowest possible integer returned
 * @param {max} max The highest possible integer returned
 * @return {number} A random number between min and max (inclusive)
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// entry point - where main logic starts
function init(){
    console.log("app.js started");
    let playerHistory = {}
    let playAgain = true;
    while(playAgain){
        const nameInp = prompt("Try guessing the number I picked! What is your name before we start?");
        const history = playRound(nameInp);
        // check if playerHistory has current name as a key, if not add it
        if (playerHistory.hasOwnProperty(nameInp)){
            // get previous guess history for that player
            prevHistory = playerHistory[nameInp];
            // TODO - check if user's current history is better than previous history
            // TODO - update history for that user 
            // TODO - tell user how many many fewer guesses they got this round than the previos
        } 
        
        // ask user if they want to playh again - answer must be yes or no
        let input = prompt("Would you like to reapeat the game?");
        // TODO - validate input (make sure that it is either "yes" or "no", case insensitive)
        playAgain = (input.toLowerCase() === 'yes') ? true : false;
        // if (input.toLowerCase() === 'yes'){
        //     playAgain = true;
        // } else {
        //     playAgain = false;
        // }
                    
    }
    alert("Goodbye!");
}

function playRound(name){
    let secret = getRandomIntInclusive(1,50);
    console.log("secret number: " + secret);
    // ask user for number, repeat guessing until correct
    // set to true when the input matches the secret number - guessOnce() returns "Correct"
    let validInput = false;
    let guessesHistory = [];
    // repeat until we get a valid integer input
    while (!validInput){
        // collect results of current guess by comparing input to secret number
        const result = guessOnce(secret);
        // push guess number to array
        if (!isNaN(result[1])){
            guessesHistory.push(result[1]);
        }
        console.log("guessesHistory= " + guessesHistory); 
        // check if it equals "Correct"
        if (result[0] === "Correct"){
            // while loop will stop iterating
            validInput = true;
            // show number of guesses it took
            alert("Correct! Your previous guesses were " + guessesHistory + ", but you finally got it.");
            return guessesHistory; // will stop function immediately
            // break; // stops loop, goes to end of loop block
        } 
        // else if (result[0] === "Invalid"){
        //     alert("Sorry " + name + ", that input was " + result[0])
        // }

        // shows comparison to secret number to user - uses returned string from guessOnce
        alert("Sorry " + name + ", that input was " + result[0] + ", please guess again");        
    }
}

// collects user guess of a number
// returns a string: "Lower", "Higher", "Correct", or "Invalid Input, please enter integer"
function guessOnce(secretNum){
    // get string input from user
    let numInp = prompt("Guess a number...");
    console.log("numInp = ", numInp);
    // attempt to convert to integer
    const num = parseInt(numInp);
    console.log("num = ", num, ", is type " + typeof(num));
    // if we sucessfully parsed the string to a number, compare to secret number
    if (Number.isInteger(num)){
        if (num < secretNum){
            return ["Lower", num];
        } else if (num > secretNum){
            return ["Higher", num];
        } else {
            return ["Correct", num];
        }  
    } else {     // otherwise input is not a valid integer  
        return ["Invalid", num];
    }
}

init();