const resultContainer = document.querySelector('#resultDiv');
const playButton = document.querySelector('#play');
const resultPanel = document.createElement('p');


let yourScore = document.createElement("h4");
let computer = document.createElement('h4');

let getHumanChoice;
let humanScore = 0;
let computerScore = 0; 

let rock = document.createElement('button');
rock.innerText = 'Rock'
rock.setAttribute('id', 'rock');
rock.addEventListener('click', () => {
    getHumanChoice = "Rock"
    let score = playRound(getComputerChoice(), getHumanChoice);
        if (score === 0){
            computerScore += 1;
            computer.innerText = `Computer: ${computerScore}`;
        } else if (score === 1) {
            humanScore += 1;
            yourScore.innerText = `${naam}: ${humanScore}`;
        }
    
})

let paper = document.createElement('button');
paper.innerText = 'Paper'
paper.setAttribute('id', 'paper');
paper.addEventListener('click', () => {
    getHumanChoice = "Paper"
    playRound(getComputerChoice(), getHumanChoice);
    let score = playRound(getComputerChoice(), getHumanChoice);
        if (score === 0){
            computerScore += 1;
            computer.innerText = `Computer: ${computerScore}`;
        } else if (score === 1) {
            humanScore += 1;
            yourScore.innerText = `${naam}: ${humanScore}`;
        }
})

let scissor = document.createElement('button');
scissor.innerText = 'Scissor'
scissor.setAttribute('id', 'scissor');
scissor.addEventListener('click', () => {
    getHumanChoice = "Scissor"
    playRound(getComputerChoice(), getHumanChoice);
    let score = playRound(getComputerChoice(), getHumanChoice);
        if (score === 0){
            computerScore += 1;
            computer.innerText = `Computer: ${computerScore}`;
        } else if (score === 1) {
            humanScore += 1;
            yourScore.innerText = `${naam}: ${humanScore}`;
        }
})

function getComputerChoice() {

    randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        return "Rock"
    } else if (randomNum === 1) {
        return "Paper"
    } 
    return "Scissor"
};

// function getHumanChoice() {
//     choiceNum = parseInt(prompt("Choose 0 for Rock, 1 for Paper, and 2 for Scissor!!", "Choose Carefully!!"));
//     if(choiceNum === 0) {
//         return "Rock"
//     } else if (choiceNum === 1) {
//         return "Paper"
//     } else if (choiceNum === 2) {
//         return "Scissor"
//     }
//     return "Invalid Input" 
// }


function playRound(getComputerChoice, getHumanChoice) {
    let winner ;
    if (getComputerChoice === "Rock" && getHumanChoice === "Scissor") {
        resultPanel.innerText = "You Lose, Rock beats Scissor";
        resultContainer.appendChild(resultPanel);
        winner = 0;
    } else if (getComputerChoice === "Rock" && getHumanChoice === "Paper") {
        // console.log( "You Win, Paper beats Rock");
        resultPanel.innerText = "You Win, Paper beats Rock";
        resultContainer.appendChild(resultPanel);
        winner = 1;
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Scissor") {
        // console.log( "You Win,Scissor beats Paper");
        resultPanel.innerText =  "You Win,Scissor beats Paper";
        resultContainer.appendChild(resultPanel);
        winner = 1;
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Rock") {
        // console.log("You Lose, Paper beats Rock");
        resultPanel.innerText = "You Lose, Paper beats Rock";
        resultContainer.appendChild(resultPanel);
        winner = 0;
    } else if (getComputerChoice === "Scissor" && getHumanChoice === "Rock") {
        // console.log( "You Win, Rock beats Scissor");
        resultPanel.innerText = "You Win, Rock beats Scissor";
        resultContainer.appendChild(resultPanel);
        winner = 1;
    } else if (getComputerChoice === "Scissor" && getHumanChoice === "Paper") {
        // console.log( "You Lose,Scissor beats Paper");
        resultPanel.innerText = "You Lose,Scissor beats Paper";
        resultContainer.appendChild(resultPanel);
        winner = 0;
    } else if (getComputerChoice === "Rock" && getHumanChoice === "Rock") {
        // console.log( "This is a Draw")
        resultPanel.innerText = "This is a Draw";
        resultContainer.appendChild(resultPanel);
    } else if (getComputerChoice === "Scissor" && getHumanChoice === "Scissor") {
        // console.log("This is a Draw")
        resultPanel.innerText = "This is a Draw";
        resultContainer.appendChild(resultPanel);
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Paper") {
        // console.log( "This is a Draw")
        resultPanel.innerText = "This is a Draw";
        resultContainer.appendChild(resultPanel);
    } else {
        return "Something Went Wrong";
    }
    return winner
} 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  

    for (let step = 0; step < 1; step++) {
        let score = playRound(getComputerChoice(), getHumanChoice);
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

// playGame()

function setCounter(name, score, comScore){
    // yourScore = document.createElement("h4");
    yourScore.innerText = `${name}: ${score}`
    // computer = document.createElement('h4');
    computer.innerText = `Computer: ${comScore}`

    let scoreHead = document.createElement('h2');
    scoreHead.innerText = "Scores:"
    resultContainer.appendChild(scoreHead);
    resultContainer.appendChild(yourScore);
    resultContainer.appendChild(computer);

    const resultHead = document.createElement("h2");
    resultHead.innerText = "Result Panel!!"
    resultContainer.appendChild(resultHead);
}

function threeButtons(){

    resultContainer.appendChild(rock);
    resultContainer.appendChild(paper);
    resultContainer.appendChild(scissor);
}

function play() {
    naam = prompt("Whats Your Name?")
    // rounds = parseInt(prompt("How many rounds do you wanna play?"))
    playButton.remove();
    threeButtons();
    setCounter(naam,humanScore, computerScore);


}

// DOM

playButton.addEventListener("click",play);
