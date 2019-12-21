//Create array of words
var words = [
  "JEDI",
  "SITH",
  "FORCE",
  "YODA",
  "SKYWALKER",
  "LIGHTSABER",
  "BLASTER",
  "EMPIRE",
  "DROIDS",
  "PRINCESS"
];
//Choose word randomly
var currentWord = words[Math.floor(Math.random() * words.length)];
var underscore = [];
var wrongGuess = [];
var currentWordArray = [];
var totalWins = 0;
var guessesLeft = 10;

//testing
console.log(currentWord);

//splits individual characters of element into array
currentWordArray = currentWord.split("");

//create underscores based on length of word
function generateUnderscore() {
  for (var i = 0; i < currentWord.length; i++) {
    underscore.push("_");
  }
  return underscore;
}
//testing
console.log(generateUnderscore());

//prints underscores to screen
var showUnderscores = document.getElementById("current");
for (var j = 0; j < currentWordArray.length; j++)
  showUnderscores.textContent += "  " + underscore[j] + "  ";

//get user's guess
document.addEventListener("keypress", function(event) {
  var guess = String.fromCharCode(event.keyCode).toUpperCase();
  //if user's guess is right
  if (currentWord.indexOf(guess) > -1) {
    console.log(true);
    for (i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === guess) {
      }
    }
    for (index = 0; index < currentWord.length; index++) {
      if (currentWordArray[index] === guess) {
        underscore[index] = guess;
        current.textContent = "Current Word:  " + underscore + "  "; //works...but don't like the formatting
        console.log(currentWordArray[index]);
        console.log(underscore);
        win();
      }
    }
  } else {
    for (index = 0; index < wrongGuess.length; index++) {
      if (wrongGuess[index] === guess) {
        alert("You've already guessed that letter!");
        return;
      }
    }

    wrongGuess.push(" " + guess);
    guessesLeft--;
    lose();
    document.getElementById("remaining").textContent =
      "Number of Incorrect Guesses Remaining: " + guessesLeft;
    document.getElementById("guessed").textContent =
      "Letters Already Guessed: " + wrongGuess + " "; //appears to be displaying as the actual array?
    console.log(wrongGuess);
    console.log(guessesLeft);
  }
});

function win() {
  if (underscore.toString() === currentWordArray.toString()) {
    alert("You win!");
    totalWins++;
  }
}

function lose() {
  if (guessesLeft === 0) {
    alert("You lose!");
  }
}
