var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessLetters = [];

var computerGuess = function (){
    letters[Math.floor(Math.random() * letters.length)];
};

document.onkeydown = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessLetters.push(userGuess);
    
    if (userGuess === computerGuess) {
        wins++;
        guesses = 9;
        guessLetters.length = 0;
        alert("You have bested me, I release you!")
    } 
     
    else if (guesses == 1) {
        losses++;
        guessLetters.length = 0;
        guesses = 9;
        alert("Ha! You Lose!")
    }

    else if (userGuess !== computerGuess) {
        guesses--;
    }

    // else if (userGuess !== letters.length){
    //     alert("What?! That's not a letter!");
    // }

        
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses + "<p>" +
        "<p>Your Guesses So Far: " + guessLetters + "<p>";

    document.querySelector("#game").innerHTML = html;

}

