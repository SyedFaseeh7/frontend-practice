let userScore = 0; // Variable to store the user's score
let compScore = 0; // Variable to store the computer's score

// Select all the choices (rock, paper, scissors) from the HTML
const choiceButtons = document.querySelectorAll(".choice");

// Select the message and score display elements from the HTML
const msg = document.querySelector("#msg-display");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

// Add a click event listener to each choice (rock, paper, scissors)
choiceButtons.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get the 'id' of the clicked element (e.g., "rock", "paper", or "scissors")
        const userSelection = choice.getAttribute("id");

        // Call the handleGame function with the user's selection as an argument
        handleGame(userSelection);
    });
});

const handleGame = (userSelection) => {
    // Generate the computer's choice by calling genCompChoice
    // This function randomly picks one of the three options
    const computerSelection = getComputerChoice();

    // Check if the user's choice matches the computer's choice
    if (userSelection=== computerSelection) {
        // If both choices are the same, call drawGame to display a draw message
        drawGame();
    } else {
        // Variable to keep track of whether the user won
        let isUserWin = true;

        // Decide the winner based on the rules of the game
        if (userSelection === "rock") {
            // Rock loses to Paper, wins against Scissors
            isUserWin = computerSelection === "paper" ? false : true;
        } else if (userSelection === "paper") {
            // Paper loses to Scissors, wins against Rock
            isUserWin = computerSelection === "scissors" ? false : true;
        } else {
            // Scissors loses to Rock, wins against Paper
            isUserWin = computerSelection === "rock" ? false : true;
        }

        // Call displayWinner to display the result
        // Pass isUserWin (true/false), userSelection, and compSelection as arguments
        displayWinner(isUserWin, userSelection, computerSelection);
    }
};

const displayWinner = (isUserWin,userSelection,computerSelection) => {
    // If the user wins
    if (isUserWin) {
        userScore++; // Increase the user's score by 1
        userScoreDisplay.innerText = userScore; // Update the user's score in the HTML
        msg.innerText = `You Win! Your ${userSelection} beats ${computerSelection}.`; // Show a win message
        msg.style.backgroundColor = "green"; // Change the background to green
    } else {
        // If the user loses
        compScore++; // Increase the computer's score by 1
        compScoreDisplay.innerText = compScore; // Update the computer's score in the HTML
        msg.innerText = `You Lost! ${computerSelection} beats your ${userSelection}.`; // Show a lose message
        msg.style.backgroundColor = "red"; // Change the background to red
    }
};

function getComputerChoice() {
    // Define an array with all possible choices for the computer
    const options = ["rock", "paper", "scissors"];

    // Generate a random index (0, 1, or 2) using Math.random() and Math.floor()
    const randomIdx = Math.floor(Math.random() * 3);

    // Use the random index to pick one option from the array
    // Return that option (e.g., "rock", "paper", or "scissors")
    return options[randomIdx];
}
//Game Draw Condition
const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor =" #023047";
};