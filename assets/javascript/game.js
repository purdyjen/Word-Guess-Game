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
var currentWord = words[Math.floor(Math.random() * words.length)];
var underscore = [];
var wrongGuess = [];

//testing
console.log(currentWord);
//create underscores based on length of word
function generateUnderscore() {
    for(var i = 0; i < currentWord.length; i++){
        underscore.push('_');
    }
    return underscore;
}
//testing
console.log(generateUnderscore());
//get user's guess
document.addEventListener('keypress', (event) => {
    var guess = String.fromCharCode(event.keyCode).toUpperCase();
    //if user's guess is right
    if (currentWord.indexOf(guess) > -1 ) {
        console.log(true);
        for (i=0;i<currentWord.length;i++) {
            if (currentWord[i] === guess) {
            console.log(i);
            }
        }
          
        while (index = 0; index < currentWord.length; index++){
            if ([index] <= guess){
                underscore[currentWord.indexOf(guess)] = guess;
            }
            // break;
        }
        //replace underscore
    //     underscore[currentWord.indexOf(guess)] = guess;
    //     if (1 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 1)] = guess;
    // }
    //     if (2 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 2)] = guess;
    // }
    //     if (3 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 3)] = guess;
    // }
    //     if (4 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 4)] = guess;
    // }
    //     if (5 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 5)] = guess;
    // }
    //     if (6 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 6)] = guess;
    // }
    //     if (7 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 7)] = guess;
    // }
    //     if (8 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 8)] = guess;
    // }
    //     if (9 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 9)] = guess;
    // }
    //     if (10 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 10)] = guess;
    // }
    //     if (11 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 11)] = guess;
    // }
    //     if (12 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 12)] = guess;
    // }
    //     if (13 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 13)] = guess;
    // }
    //     if (14 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 14)] = guess;
    // }
    //     if (15 < currentWord.length) {
    //     underscore[currentWord.indexOf(guess, 15)] = guess;
    // }
        //testing
        console.log(underscore); //how to replace more than one instance??
       
    } else {
        wrongGuess.push(guess);
        console.log(wrongGuess);
    }
});

