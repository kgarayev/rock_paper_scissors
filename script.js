const weapon = ["rock", "paper", "scissors"];
const rules = {
  rock: { rock: "draw", scissors: "win", paper: "lose" },
  paper: { paper: "draw", rock: "win", scissors: "lose" },
  scissors: { scissors: "draw", paper: "win", rock: "lose" },
};

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  console.log("Computer choice is", weapon[randomNum]);
  return weapon[randomNum];
}

// a function that repeatedly asks for a correct user input
function getUserInput() {
  let userInput = "nothing";

  while (!weapon.includes(userInput.toLowerCase())) {
    userInput = prompt("What is your weapon of choice? ");
  }

  return userInput.toLowerCase();
}

console.log(getUserInput());

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  let outcome = rules[playerChoice][computerSelection];

  if (outcome == "win") {
    console.log(
      "You Win! " +
        playerChoice.toUpperCase() +
        " beats " +
        computerSelection.toUpperCase()
    );
    return outcome;
  } else if (outcome == "lose") {
    console.log(
      "You Lose! " +
        computerSelection.toUpperCase() +
        " beats " +
        playerChoice.toUpperCase()
    );
    return outcome;
  } else {
    console.log("Draw!");
    return outcome;
  }
}

function game() {
  let score = { human: 0, computer: 0 };

  for (let i = 0; i < 5; i++) {
    let userInput = getUserInput();

    let roundOutcome = playRound(userInput, getComputerChoice());

    if (roundOutcome == "win") {
      score.human += 1;
    } else if (roundOutcome == "lose") {
      score.computer += 1;
    }
  }

  if (score.human > score.computer) {
    console.log("You have won the game! Congratulations!");
    return "win";
  } else if (score.human < score.computer) {
    console.log("You have lost the game! What a pity...");
    return "lose";
  } else {
    console.log(
      "The game result is draw. Repeat the game to know who is better."
    );
    return "draw";
  }
}

// const playerSelection = "ScissORS";

// playRound(playerSelection, getComputerChoice());

// game();
