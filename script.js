// Create a function called computerPlay that returns the computer choice
function computerPlay() {
    // Create a variable called weapons that stores the possible computer choices
    const weapons = ["Rock","Paper","Scissors"];
    // Create a variable called choice that stores the randomly selected value between ("rock","paper","scissors")
    let choice = weapons[Math.floor(Math.random() * 3)];
    // Return the variable choice
    return choice;
}; // End computerPlay function

// Create a function called playRound that receive (playerSelection, computerSelection) and returns the winner on this round
function playRound(playerSelection="Rock", computerSelection) {
    // If the player has not inputted anything, assume it's "Rock"
    if (playerSelection == null || undefined) {
        playerSelection = "Rock" 
    }; // Endif
    // Create a variable called playerChoice that stores the playerSelection with Uppercase on the first letter and lowercase on the rest
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    // Create a variable called computerChoice that stores the computerSelection with Uppercase on the first letter and lowercase on the rest
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    // Create a variable called playerWin1 that stores playerChoice === "Rock" && computerChoice === "Scissors"
    let playerWin1 = playerChoice === "Rock" && computerChoice === "Scissors";
    // Create a variable called playerWin2 that stores playerChoice === "Paper" && computerChoice === "Rock"
    let playerWin2 = playerChoice === "Paper" && computerChoice === "Rock";
    // Create a variable called playerWin3 that stores playerChoice === "Scissors" && computerChoice === "Paper"
    let playerWin3 = playerChoice === "Scissors" && computerChoice === "Paper";

    // If the player chose the same weapon as the computer
    if (playerChoice === computerChoice) {
        //  Tell the player "It's a tie!"
        console.log("It's a tie!");
        //  Tell the game function that this round no one earns a point by returning "tie"
        return "tie";

        // If the player win this round
    } else if (playerWin1 || playerWin2 || playerWin3) {
        //  Tell the player that he won on this round, and output the weapons used "You Win! $playerChoice beats $computerChoice"
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        //  Tell the game function that the player won this round by returning "player"
        return "player";

        // If the player didn't win, and it isn't a tie, then the computer wins
    } else {
        //  Tell the player he lost the round and output the weapons used "You Lose! $computerChoice beats $playerChoice"
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
        //  Tell the game function that the player lost this round by returning "computer"
        return "computer";
    }; // End the If statement
}; // End playRound function

// Create a function called game that runs the game and return the winner and the final score
function game() {
    // Create a variable called playerScore
    let playerScore = 0;
    // Create a variable called computerScore
    let computerScore = 0;
    // Create a variable called playerMove
    let playerMove = "";
    // Create a variable called roundResult 
    let roundResult = "";

    // Create a Loop that run 5 times
    for (let i = 1, rounds = 5; i <= rounds; i++) { 
        //  playerMove receive the player weapon for this round
        playerMove = prompt("Choose your weapon: Rock, Paper or Scissors");
        // roundResult receive the playRound(playerMove, computerPlay()) function returned value
        roundResult = playRound(playerMove, computerPlay());
        //  If the player win this round
        if (roundResult == "player") { 
            //     add a point to the player
            ++playerScore;
        //  If the computer win this round
        } else if (roundResult == "computer") {
        //     increment computerScore
            ++computerScore;
        }; // End if statement
    }; // End loop

    // If ( playerScore > computerScore )
    if (playerScore > computerScore) {
    //     Tell the player "You Won the game!"
       console.log("You Won the game!") 
    // Elseif ( computerScore > playerScore )
    } else if (computerScore > playerScore) {
    //     Print "You Lost the game!"
        console.log("You Lost the game!");
    // Elseif ( playerScore == computerScore )
    } else if (playerScore == computerScore) {
    //     Print "It's a tie!"
        console.log("It's a tie!");
    // Endif
    };

    // Print "You: $playerScore"
    console.log(`You: ${playerScore}`);
    // Print "Computer: $computerScore" 
    console.log(`Computer: ${computerScore}`);
}; // End game function
