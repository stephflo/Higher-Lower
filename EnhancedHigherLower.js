let valid_input = false;
var maxnum, input;

while(!valid_input){  
    input = window.prompt("Enter a number to start the game");

    maxnum = Math.round(Number(input));

    if(maxnum != NaN && maxnum > 0){ 
        valid_input = true;
    }
}


let num = Math.floor(Math.random() * maxnum) + 1; 


console.log(num);

var totalGuesses = [] 

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    console.log(guess);

    if(guess == num) {
        totalGuesses.push(guess);
        var totalGuessesSpaces = totalGuesses.join(', '); 
        message.innerHTML = "You got it! It took you " + totalGuesses.length + " guesses and your guesses were: " + totalGuessesSpaces;
    }
    else if (guess <=0 || guess > maxnum)  { 
        message.innerHTML = "The number is not in range!";
    }
    else if (guess !== Number(guess)) { 
        message.innerHTML = "That is not a number!";
    }
    else if (totalGuesses.includes(guess)) { 
        message.innerHTML = "This number was already guessed.";
    }
    else if (guess > num) {
        totalGuesses.push(guess);
        message.innerHTML = "No, try a lower number.";
    }
    else {
        totalGuesses.push(guess);
        message.innerHTML = "No, try a higher number.";
    }
}