function getComputerChoice() {

    randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        return "Rock"
    } else if (randomNum === 1) {
        return "Paper"
    } 
    return "Scissor"
};

function getHumanChoice() {
    choiceNum = parseInt(prompt("Choose 0 for Rock, 1 for Paper, and 2 for Scissor!!", "Choose Carefully!!"));
    if(choiceNum === 0) {
        return "Rock"
    } else if (choiceNum === 1) {
        return "Paper"
    } else if (choiceNum === 2) {
        return "Scissor"
    }
    return "Invalid Input" 
}


function playRound(getComputerChoice, getHumanChoice) {
    let winner ;
    if (getComputerChoice === "Rock" && getHumanChoice === "Scissor") {
        console.log( "You Lose, Rock beats Scissor");
        winner = 0;
    } else if (getComputerChoice === "Rock" && getHumanChoice === "Paper") {
        console.log( "You Win, Paper beats Rock");
        winner = 1;
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Scissor") {
        console.log( "You Win,Scissor beats Paper");
        winner = 1;
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Rock") {
        console.log("You Lose, Paper beats Rock");
        winner = 0;
    } else if (getComputerChoice === "Scissor" && getHumanChoice === "Rock") {
        console.log( "You Lose, Rock beats Scissor");
        winner = 0;
    } else if (getComputerChoice === "Scissor" && getHumanChoice === "Paper") {
        console.log( "You Lose,Scissor beats Paper");
        winner = 0;
    } else if (getComputerChoice === "Rock" && getHumanChoice === "Rock") {
        console.log( "This is a Draw")
    } else if (getComputerChoice === "Scissor" && getHumanChoice === "Scissor") {
        console.log("This is a Draw")
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Paper") {
        console.log( "This is a Draw")
    } else {
        return "Something Went Wrong";
    }
    return winner
} 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  

    for (let step = 0; step < 5; step++) {
        let score = playRound(getComputerChoice(), getHumanChoice());
        if (score === 0){
            computerScore += 1;
        } else if (score === 1) {
            humanScore += 1;
        }
      } 
    
    let finalWinner;
    if (humanScore > computerScore){
        console.log("Congrats , You Win !!!")
    } else if (humanScore < computerScore){
        console.log("Better Luck next time")
    } else {
        console.log("This is a Draw!!")
    }
}

playGame()