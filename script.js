

function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let choice = getRandomInt(3); 
  if (choice === 2) {
    console.log("The computer chose Rock");
    return "rock";
  }
  else if (choice === 1) {
    console.log("The computer chose Paper");
    return "paper";
  }
  else {
    console.log("The computer chose Scissors");
    return "scissors";
  }
}

function playerSelection() {
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
rock.addEventListener("click", function() {
  console.log("You chose Rock");
  return "rock";
});
paper.addEventListener("click", function() {
  console.log("You chose Paper");
  return "paper";
}); 
scissors.addEventListener("click", function() {
  console.log("You chose Scissors");
return "scissors"; });



 }
// function playFiveRounds() {
  // for (let i = 0; i < 5; i++) {
   // playRound(playerSelection, getComputerChoice);;
 // }
// }

// playFiveRounds();



// playRound(playerSelection, getComputerChoice)

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
}); 
scissors.addEventListener("click", function() {
  playRound("scissors", getComputerChoice()); 
  });

function playRound(playerSelection, computerSelection) {
  const result = document.getElementById("result");
  const playerResult = document.getElementById("playerResult");
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
    result.innerHTML = "It's a Tie";
    playerResult.innerHTML = `You chose ${playerSelection}!`;
  }
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerResult.innerHTML = `You chose ${playerSelection}!`;
    result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
    

  }
  else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
    playerResult.innerHTML = `You chose ${playerSelection}!`;
  }
}