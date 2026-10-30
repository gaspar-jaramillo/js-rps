function getComputerChoice(){
    let rand = Math.random() * 30
    let choice

    if (rand < 10) {
        choice = "rock"
    }  else if (rand < 20) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return choice
}

function getHumanChoice () {
    let choice = prompt("Rock, paper scisors", "rock" )
    choice = choice.toLowerCase()
    return choice
}





let humanScore = 0
let computerScore = 0




function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice ==="rock" || humanChoice === "scissors" && computerChoice ==="paper") {
        console.log("you chose " + humanChoice)
        console.log("the computer chose " + computerChoice)
        console.log("you win!")
        console.log("score" + humanScore + " - " + computerScore)


    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice ==="scissors" || humanChoice === "scissors" && computerChoice ==="rock") {
        console.log("you chose " + humanChoice)
        console.log("the computer chose " + computerChoice)
        console.log("you lose")
        console.log("score" + humanScore + " - " + computerScore)


    } else {
        console.log("you chose " + humanChoice)
        console.log("the computer chose " + computerChoice)
        console.log("Tie")
        console.log("score" + humanScore + " - " + computerScore)


    }
    }
    



playRound(getHumanChoice(), getComputerChoice())


function playGame (){
    

}