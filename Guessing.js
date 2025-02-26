let enter = document.getElementById("Enter");
let guess = document.getElementById("guess"); 
let quit = document.getElementById("Quit");
let playAgain = document.getElementById("PlayAgain");
let message = document.getElementById("message");

let randomNumber=null; // Declare globally
let maxNumber;
let guessInput = document.getElementById("guess");

// Event listener for Enter button
enter.addEventListener("click", function() {
    maxNumber = parseInt(document.getElementById("number").value);
    
    if (!isNaN(maxNumber) && maxNumber > 0) {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        message.innerText = "Random number generated! Try to guess it.";
        message.style.color="black";
    } else {
        message.innerText = "Please enter a valid maximum number.";
        message.style.color="red";
        randomNumber=null; //Reset the random number to null if there is invalid input
    }
});

// Clears message when user types a new guess
guessInput.addEventListener("input", function() {
    message.innerText = ""; // Clears message when typing starts
});

// Event listener for Guess button
document.getElementById("Guess").addEventListener("click", function() {
    if (randomNumber === null) {
        message.innerText = "Please enter a valid maximum number first!";
        message.style.color = "red";
        return; // Stop execution if no valid max number
    }
    let userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess)) {
        message.innerText = "Please enter a valid number.";
        message.style.color="red";
    } else if (userGuess < randomNumber) {
        message.innerText = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.innerText = "Too high! Try again.";
    } else {
        message.innerHTML = "Congratulations! You guessed the correct number. &#127881 &#127882";
        message.style.color="blue";
        playAgain.disabled = false;
    }
});

// Event listener for Play Again button
playAgain.addEventListener("click", function() {
    document.getElementById("number").value = "";
    document.getElementById("guess").value = "";
    randomNumber = null;
    message.innerText = "Game reset. Enter a new maximum number to play again.";
    message.style.color="black";
    playAgain.disabled = true;
});

quit.addEventListener("click",function(){
    message.innerHTML = "Thanks for playing! &#128522";
    message.style.color="green";
    setTimeout(() => window.close(), 1000);
})