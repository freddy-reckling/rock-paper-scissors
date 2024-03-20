function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let choice = getRandomInt(3); 
  if (choice === 2) {
    console.log("The computer chose Rock");
    return "Rock";
  }
  else if (choice === 1) {
    console.log("The computer chose Paper");
    return "Paper";
  }
  else {
    console.log("The computer chose Scissors");
    return "Scissors";
  }
}

function playerSelection() {
  let choice = prompt("Choose Rock, Paper, or Scissors");
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
  else {
    console.log("Invalid choice, please try again");
    return playerSelection();
  }
}



function playRound(playerSelection, getComputerChoice) {
  let user = playerSelection();
  let computer = getComputerChoice();
  if (user === computer) {
    console.log("its a tie");
    
  }
  else if (user === "rock" && computer === "Scissors") {
    console.log("You win! Rock beats Scissors");
    
  }
  else if (user === "rock" && computer === "Paper") {
    console.log("You lose! Paper beats Rock");
    

  }
  else if (user === "paper" && computer === "Rock") {
    console.log("You win! Paper beats Rock");
    
  }
  else if (user === "paper" && computer === "Scissors") {
    console.log("You lose! Scissors beats Paper");
   
  }
  else if (user === "scissors" && computer === "Rock") {
    console.log("You lose! Rock beats Scissors");
    
  }
  else  {
    console.log("Its a Tie");
  
  }
  
}

playRound(playerSelection, getComputerChoice);




