let buttonPaper = document.querySelector("#paper");
let buttonRock = document.querySelector("#rock");
let buttonScissors = document.querySelector("#scissors");

// Player
let secondPlayer = document.querySelector("#secondPlayer");

let rock = document.querySelector("#rockLogo");
let scissors = document.querySelector("#scissorsLogo");
let paper = document.querySelector("#paperLogo");

// Computer
let computer1 = document.querySelector("#computer1");
let computer2 = document.querySelector("#computer2");
let computer3 = document.querySelector("#computer3");

// Scoreboard
let playerScoreDisplay = document.querySelector("#playerScore");
let computerScoreDisplay = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

// Initially hide all elements
rock.style.display = 'none';
scissors.style.display = 'none';
paper.style.display = 'none';
computer1.style.display = "none";
computer2.style.display = "none";
computer3.style.display = "none";

buttonPaper.addEventListener("click", function(e) {
    e.preventDefault();
    showItem(paper);
    updateScore("paper");
});

buttonRock.addEventListener("click", function(e) {
    e.preventDefault();
    showItem(rock);
    updateScore("rock");
});

buttonScissors.addEventListener("click", function(e) {
    e.preventDefault();
    showItem(scissors);
    updateScore("scissors");
});

function showItem(itemToShow) {
    // Hide all items
    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';
    computer1.style.display = "none";
    computer2.style.display = "none";
    computer3.style.display = "none";
    
    // Show the selected item
    itemToShow.style.display = "block";

    // Hide all computer elements after 3 seconds
    setTimeout(function() {
        computer1.style.display = "none";
        computer2.style.display = "none";
        computer3.style.display = "none";
    }, 3000);

    // Randomly select and display one of the computer elements
    let randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    if (randomNumber === 1) {
        computer1.style.display = "block";
    } else if (randomNumber === 2) {
        computer2.style.display = "block";
    } else {
        computer3.style.display = "block";
    }
}

function updateScore(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3 for computer's choice
    if (
        (playerChoice === "rock" && computerChoice === 3) || 
        (playerChoice === "paper" && computerChoice === 1) || 
        (playerChoice === "scissors" && computerChoice === 2)
    ) {
        // Player wins
        playerScore++;
    } else if (
        (playerChoice === "rock" && computerChoice === 2) || 
        (playerChoice === "paper" && computerChoice === 3) || 
        (playerChoice === "scissors" && computerChoice === 1)
    ) {
        // Computer wins
        computerScore++;
    }
    // Update scoreboard display
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
