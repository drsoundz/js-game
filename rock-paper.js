// initialize all your values
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

// select all the necessary elements
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    resultDiv.textContent = `Computer has chosen`;
}

function getHumanChoice(){
    const userInput = prompt("Enter your choice: Rock, Paper or Scissors").trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(userInput)){
        humanChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);
        resultDiv.textContent = `You chose: ${humanChoice}`;
    } else {
        alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        getHumanChoice();
    }
}

function playRound() {
    if (!humanChoice || !computerChoice) {
        resultDiv.textContent = "Please select both choices first!";
        return;
    }
    let roundResult = "";
    if (humanChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    resultDiv.textContent = roundResult;
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

btn1.addEventListener("click", getComputerChoice);
btn2.addEventListener("click", getHumanChoice);
btn3.addEventListener("click", playRound);