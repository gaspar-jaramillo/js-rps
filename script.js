function getComputerChoice() {
    let rand = Math.random() * 30;
    let choice;

    if (rand < 10) {
        choice = "rock";
    } else if (rand < 20) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper scisors", "rock");
    choice = choice.toLowerCase();
    return choice;
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let score = "score: " + humanScore + " - " + computerScore;

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log("you chose " + humanChoice);
        console.log("the computer chose " + computerChoice);
        console.log("you win!");
        humanScore = humanScore + 1
        console.log(score)

    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log("you chose " + humanChoice);
        console.log("the computer chose " + computerChoice);
        console.log("you lose");
        computerScore = computerScore + 1;
        console.log(score);

    } else {
        console.log("you chose " + humanChoice);
        console.log("the computer chose " + computerChoice);
        console.log("Tie");
        console.log(score);

    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

}


playGame()