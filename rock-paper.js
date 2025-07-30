 let humanScore = 0;
 let computerScore = 0;
// create function to get computer choice (getComputerChoice)
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// create function to get human choice (getHumanChoice)
function getHumanChoice() {
    const userInput = prompt("Enter your choice: Rock, Paper or Scissors").trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(userInput)){
        return userInput.charAt(0).toUpperCase() + userInput.slice(1);
    } else {
        alert("Invalid input. Please enter Rock,Paper, or Scissors.");
        return getHumanChoice();
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// create function for game round(playRound) that takes the human and computer choices as arguments(humanChoice, computerChoice)
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
// output the outcome of playRound e.g You Lose, Paper beats Rock.
// increment human or computer score based on round winner
    if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "paper")){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// create logic for game to be completed after 5 rounds (new game round function should be within the newGame function
function newGame(){
// create variables for human and computer score and intialise to 0
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        alert(`round ${round} of 5`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        alert(result + `\nScore - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        alert("🎉 You win the game!");
    } else if (computerScore > humanScore) {
        alert ("💻 computer wins the game!");
    } else {
        alert("🤝 The game is a tie");
    }
}

newGame();
