console.log("app.js started");

const minGuess = 1;
const maxGuess = 10;


// create a random number called 'target'
const numTarget = getRandomIntInclusive(minGuess, maxGuess);

// guessOnce();


// prompt user for a number, return a string representing if the number is greater, less or equal to a target
// function guessOnce(){
    // use prompt to get user input
    // let input = prompt("Guess a number between " + maxGuess + " and " + maxGuess);
    let input = prompt(`Guess a number between ${minGuess} maxGuess and ${maxGuess}`);
    console.log(`The user guessed: ${input}`);
    // compare user guess to target
    let inputNum = parseInt(input); // convert from string to integer
    console.log("input as number: ", inputNum);
    // inform user if guess is >, <, or = to target
    if (inputNum < numTarget){
        alert("Lower");
    } else if (inputNum > numTarget){
        alert("Greater");
    } else { // they are equal
        alert("Correct!");
    }
// }

console.log("The number was ", numTarget);



function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min); // The maximum is inclusive and the minimum is inclusive
}