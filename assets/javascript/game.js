//Create array of words
var words = [
    'JEDI', 
    'SITH', 
    'FORCE', 
    'YODA', 
    'SKYWALKER',
    'LIGHTSABER',
    'BLASTER',
    'EMPIRE',
    'DROIDS',
    'PRINCESS'];
//Choose word randomly
let word = words[Math.floor(Math.random() * words.length)];
let currentWord = words[word];
let underscore = [];
let rightGuess = [];
let wrongGuess = [];


//testing
console.log(currentWord);
//create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < currentWord.length; i++){
        underscore.push('_ ');
    }
    return underscore;
}
//testing
console.log(generateUnderscore());
//get user's guess
document.addEventListener('keypress', (event) => {
    let guess = String.fromCharCode(event.keyCode);
    //if user's guess is right
    if (currentWord.indexOf(guess, 0) > -1 ) {
        console.log(true);
        //add to rightGuess array
        rightGuess.push(guess);
        console.log(rightGuess);
        //replace underscore
        underscore[currentWord.indexOf(guess, 0)] = guess;
        //check if guesses match word
        if(underscore.join('') == currentWord){
            alert('You win.');
        }


    } else {
        wrongGuess.push(guess);
        console.log(wrongGuess);
    }
});
//check if guess is right

//if right push to right array
//if wrong push to wrong array


//User presses key to start game
//computer chooses word from array
    //get word length
    //display number of letters as dashes
    //if correct guess, replace dash with letter
