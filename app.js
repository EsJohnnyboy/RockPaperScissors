function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors: ");
    return choice.toLowerCase(); // Convert to lowercase so "ROCK" works too
}

// Use let instead of const so we can change the scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // First, let's see what each player chose
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    // Check if it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 'tie';
    }
    
    // Check who wins
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        // Human wins
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        return 'human';
    } else {
        // Computer wins
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        return 'computer';
    }
}

function playGame() {
    console.log("=== ROCK PAPER SCISSORS GAME ===");
    console.log("Playing 5 rounds...");
    console.log(""); // Empty line for spacing
    
    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`--- ROUND ${round} ---`);
        
        // Get choices for this round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        // Play the round
        playRound(humanChoice, computerChoice);
        
        console.log(""); // Empty line between rounds
    }
    
    // Show final results
    console.log("=== FINAL RESULTS ===");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 YOU WIN THE GAME! 🎉");
    } else if (computerScore > humanScore) {
        console.log("😔 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();