var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessLetters = [];

var updateComputerGuess = function(){
computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("Impossible! You're inside my mind! Then you already know the letter I'm thinking of is " + '"' + computerGuess + '"'); 
};

updateComputerGuess();

var reset = function() {
    guesses = 9;
    guessLetters.length = 0;
    updateComputerGuess();
  };


document.onkeydown = function (event) {
    document.getElementById("music").play();
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessLetters.push(" " + userGuess);
    console.log("User Guesses: " + guessLetters)


    if (userGuess === computerGuess) {
        wins++;
        reset();
        alert("You have bested me, I release you!")
    }

    else if (guesses == 1) {
        losses++;
        reset();
        alert("Ha! You Lose!")
    }

    else if (userGuess !== computerGuess) {
        guesses--;
    }

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses + "<p>" +
        "<p>Your Guesses So Far: " + guessLetters + "<p>";

    document.querySelector("#game").innerHTML = html;
}

