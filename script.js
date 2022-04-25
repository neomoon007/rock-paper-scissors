// Create a function called computerPlay that returns the computer choice
function computerPlay() {
    // Create a variable called weapons that stores the possible computer choices
    const weapons = ["Rock","Paper","Scissors"];
    // Create a variable called choice that stores the randomly selected value between ("rock","paper","scissors")
    let choice = weapons[Math.floor(Math.random() * 3)];
    // Return the variable choice
    return choice;
}; // End computerPlay function

// Add an event listener to each weapon in the html doc
// Event listener starts the round
let w_paper = document.getElementById("paper").addEventListener("click", function() { playRound("paper") });
let w_rock = document.getElementById("rock").addEventListener("click", function() { playRound("rock") });
let w_scissors = document.getElementById("scissors").addEventListener("click", function() { playRound("scissors") });

// Create a variable for the scores and round description div
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let roundDesc = document.getElementById("round-result-description");
let winner = "";

function playRound(move_made) {
    let playerChoice = move_made.charAt(0).toUpperCase() + move_made.slice(1).toLowerCase();
    let computerChoice = computerPlay();

    // Create a variable called playerWin1 that stores playerChoice === "Rock" && computerChoice === "Scissors"
    let playerWin1 = playerChoice === "Rock" && computerChoice === "Scissors";
    // Create a variable called playerWin2 that stores playerChoice === "Paper" && computerChoice === "Rock"
    let playerWin2 = playerChoice === "Paper" && computerChoice === "Rock";
    // Create a variable called playerWin3 that stores playerChoice === "Scissors" && computerChoice === "Paper"
    let playerWin3 = playerChoice === "Scissors" && computerChoice === "Paper";

    if (playerChoice === computerChoice) {
        // Tell it's a tie
        roundDesc.textContent = `It's a tie! ${playerChoice} and ${computerChoice} are equal`;

        // If the player win this round
    } else if (playerWin1 || playerWin2 || playerWin3) {
        //  Tell the player that he won on this round, and output the weapons used "You Win! $playerChoice beats $computerChoice"
        roundDesc.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        playerScore.textContent = +playerScore.textContent + 1;

        // If the player didn't win, and it isn't a tie, then the computer wins
    } else {
        //  Tell the player he lost the round and output the weapons used "You Lose! $computerChoice beats $playerChoice"
        roundDesc.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore.textContent = +computerScore.textContent + 1;
}

    if (isGameOver()) {
        winner = getWinner();

        roundDesc.textContent = "";
        alert(`It's game over! ${winner} is the winner!`);

        playerScore.textContent = "0";
        computerScore.textContent = "0";
    }
};

function getWinner() {
    let playerPoints = +playerScore.textContent;
    let computerPoints = +computerScore.textContent;

    if (playerPoints > computerPoints) {
       return "Player";
    } else if (computerPoints > playerPoints) {
       return "Computer";
    }
};

function isGameOver() {
    let numberOfRounds = +playerScore.textContent + +computerScore.textContent;
    if (numberOfRounds == 5) {
        return true;
    } else {
        return false;
    }
};
