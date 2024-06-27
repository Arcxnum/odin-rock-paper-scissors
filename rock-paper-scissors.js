
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
    let humanChoice = prompt("Enter a choice from rock, paper, or scissors: ").toLowerCase();

    switch(humanChoice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You won! Rock beats Scissors.");
            humanScore++;
        }
    
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You won! Paper beats Rock.");
            humanScore++;
        }
    
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You won! scissors beats paper.");
            humanScore++
        }
    
    
        else if (computerChoice == "rock" && humanChoice == "scissors") {
            console.log("You lost! Rock beats Scissors.");
            computerScore++;
        }
        
        else if (computerChoice == "paper" && humanChoice == "rock") {
            console.log("You lost! Paper beats Rock.");
            computerScore++;
        }
        
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log("You lost! Scissors beats Paper.");
            computerScore++;
        }
    
        else if (humanChoice == computerChoice) {
            console.log("You tied!");
        }
    
    }

    for (let i = 1; i <= 5; i++) {
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }

    if (humanScore > computerScore) {
        console.log("The player wins!");
    }

    else if (computerScore > humanScore) {
        console.log("The computer wins!");
    }

    else {
        console.log("It was a tie!")
    }
}
playGame();