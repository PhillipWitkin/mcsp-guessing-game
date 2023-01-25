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
    console.log("secret number: " + secret);
    // ask user for number, repeat guessing until correct
    // set to true when the input matches the secret number - guessOnce() returns "Correct"
    let validInput = false;
    // repeat until we get a valid integer input
    while (!validInput){
        // collect results of current guess by comparing input to secret number
        const result = guessOnce();
        // check if it equals "Correct"
        if (result === "Correct"){
            // while loop will stop iterating
            validInput = true;
        }
        // shows comparison to secret number to user
        alert(result);    
    }
}

// collects user guess of a number
// returns a string: "Lower", "Higher", "Correct", or "Invalid Input, please enter integer"
function guessOnce(){
    // get string input from user
    let numInp = prompt("Guess a number...");
    console.log("numInp = ", numInp);
    // attempt to convert to integer
    const num = parseInt(numInp);
    console.log("num = ", num, ", is type " + typeof(num));
    // if we sucessfully parsed the string to a number, compare to secret number
    if (Number.isInteger(num)){
        if (num < secret){
            return "Lower";
        } else if (num > secret){
            return "Higher";
        } else {
            return "Correct";
        }  
    } else {     // otherwise input is not a valid integer  
        return "Invalid Input, please enter an integer"
    }
    
}

let secret = getRandomIntInclusive(1,50);
init();