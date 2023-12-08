console.log("app.js started");

const minGuess = 1;
const maxGuess = 10;


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// parse string input to a number, NaN or null
function parseInput(string){
    if (string === ""){
        return NaN;
    } else if (string === null){
        return null;
    } else {
        return Number(string)
    }
}

// prompt message and return integer, repeats until valid int is input
function promptForInt(message){
    let guess = prompt(message);
    let guessNum = parseInput(guess);
    while ( !Number.isInteger(guessNum)){
        guessNum = parseInput(prompt("Please enter a valid integer"));
    }
    // guessNum must now be an integer
    return guessNum;
}

function play(){
    const name = prompt("What is your name?");
    // create a random number called 'numTarget'
    const numTarget = getRandomIntInclusive(minGuess, maxGuess);
    // convert string to int, ask for another number if not a valid integer
    let guess = promptForInt(`Hi ${name}, guess a number between ${minGuess} and ${maxGuess}`);
    
    console.log(`User guessed ${guess}`);
    console.log("The number was ", numTarget);
    // hold each guess in a guesses array
    let guesses = [guess];
    
    // repeat until user guesses correctly
    while (guess !== numTarget) {
        if (guess < numTarget){
            guess = promptForInt(`Sorry ${name}, guess Higher`);
        } else if (guess > numTarget){
            guess = promptForInt(`Sorry ${name}, guess Lower`)
        }
        guesses.push(guess);
    }
    // alert correct when loop exits
    const guestHistoryStr = guesses.join(); // convert guesses array to string
    alert(`That's Correct ${name}! It only took you ${guesses.length} guesses, which were: ${guestHistoryStr} `);
}

play();




