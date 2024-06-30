
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function getHumanChoice() {
    return new Promise((resolve) => {
      const btnRock = document.querySelector("#btnRock");
      const btnPaper = document.querySelector("#btnPaper");
      const btnScissors = document.querySelector("#btnScissors");
  
      btnRock.addEventListener("click", () => resolve("rock"));
      btnPaper.addEventListener("click", () => resolve("paper"));
      btnScissors.addEventListener("click", () => resolve("scissors"));
    });
  }
  

async function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {

        let resultDiv = document.createElement("div");

        if (humanChoice == "rock" && computerChoice == "scissors") {
            resultDiv.textContent = "You won! Rock beats Scissors.";
            humanScore++;
        }
    
        else if (humanChoice == "paper" && computerChoice == "rock") {
            resultDiv.textContent = "You won! Paper beats Rock.";
            humanScore++;
        }
    
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            resultDiv.textContent = "You won! Scissors beats Paper.";
            humanScore++
        }
    
    
        else if (computerChoice == "rock" && humanChoice == "scissors") {
            resultDiv.textContent = "You lost! Rock beats Scissors.";
            computerScore++;
        }
        
        else if (computerChoice == "paper" && humanChoice == "rock") {
            resultDiv.textContent = "You lost! Paper beats Rock.";
            computerScore++;
        }
        
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            resultDiv.textContent = "You lost! Scissors beats Paper.";
            computerScore++;
        }
    
        else if (humanChoice == computerChoice) {
            resultDiv.textContent = "You tied!";
        }

        document.getElementById("result-container").appendChild(resultDiv);
    
    }

    for (let i = 1; i <= 5; i++) {
        let humanChoice = await getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanChoice, computerSelection);
    }

    let winH3 = document.createElement("h3");
    
    if (humanScore > computerScore) {
        winH3.textContent = `The player wins ${humanScore}-${computerScore}!`;
    }

    else if (computerScore > humanScore) {
        winH3.textContent = `The computer wins ${computerScore}-${humanScore}!`;
    }

    else {
        winH3.textContent = `It was a tie! The score is ${computerScore}-${humanScore}.`;
    }

    document.getElementById("result-container").appendChild(winH3);
}

playGame();