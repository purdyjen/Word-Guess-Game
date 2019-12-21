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
    underscore.push(" _ ");
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
        console.log(currentWordArray);
        win();
      }
    }
  } else {
    //if an incorrect letter has already been guessed
    for (index = 0; index < wrongGuess.length; index++) {
      if (wrongGuess[index] === guess) {
        alert("You've already guessed that letter!");
        return;
      }
    }
    //if incorrect letter is guessed, reduces number of remaining guesses by one
    wrongGuess.push(guess);
    guessesLeft--;
    lose();
    // console.log(wrongGuess);
    // console.log(guessesLeft);
    document.getElementById("remaining").textContent =
      "Number of Incorrect Guesses Remaining: " + guessesLeft;
    document.getElementById("guessed").textContent =
      "Letters Already Guessed: " + wrongGuess + " ";
  }
});

function win() {
  if (underscore.toString() === currentWordArray.toString()) {
    alert("You win!");
    totalWins++;
    document.getElementById("total-wins").textContent = "Wins: " + totalWins;
  }
}

function lose() {
  if (guessesLeft === 0) {
    alert("You lose!");
  }
}

//play again button
// reset current word, guesses remaining, and letters guessed
document.getElementById('play-again').addEventListener("click", 
function newGame() {
    // console.log("This is the reset function.")    
      currentWord = words[Math.floor(Math.random() * words.length)];
      underscore = [];
      wrongGuess = [];
      currentWordArray = [];
      guessesLeft = 10;
       // document.getElementById("total-wins").textContent =
      // "Wins: " + totalWins;
    });

