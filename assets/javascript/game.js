//Psychic-Game JS//  
    
//define variables to hold text information to pass to the html DOM//

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guess-left-text");
var guessSoFarText = document.getElementById("guess-so-far-text");
var psychicText = document.getElementById("psychic-text");

//an array for letters of the alphabet (every potential computer guess)//

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//define the variables to count the wins, losses, guesses left, and guesses so far//

var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessSoFar = 0;

//onkeyup function to detect when a key is pressed//

document.onkeyup = function(event) {

    //the key that is pressed is stored in userGuess//

    var userGuess = event.key;

    //define variable to generate a random index from the letters array//

    var compGuess = letters[Math.floor(Math.random() * letters.length) + 1];

    //if statement to determine if the user guesses the correct letter, and update the wins/losses count, guesses count, and guesses so far//
    //alerts if you guess correctly//

    if (guessLeft > 1) {
        if (userGuess === compGuess) {
            wins++;
            guessSoFar++;
            guessLeft = 10;
            alert("You win!!");
        }
        else {
            guessSoFar++;
            guessLeft = guessLeft - 1;
        }
    }
    else {
        losses++;
        guessLeft = 10;
    }

    //a little flair here//
    //if statement to determine the amout of psychic-ness//

    if (losses === 0 && wins === 0) {
        var psychic = "Let's find out how psychic you are...";
    }
    else if (losses === 0 && wins > 0) {
        var psychic = "Wow! You're 100% psychic!!";
    }
    else if (losses > wins) {
        var psychic = ("You're not very psychic at all...");
    }
    else if (losses < wins) {
        var psychic = ("You're very psychic!");
    }
    else {
        var psychic = ("You're sort of psychic.");
    }

    //defining the text content of the global variables to be passed to the html DOM//

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses left: " + guessLeft;
    guessSoFarText.textContent = "Your guesses so far: " + guessSoFar;
    psychicText.textContent = psychic;
}