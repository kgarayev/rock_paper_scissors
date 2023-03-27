// Rock Paper Scissors Game - command line interface - no GUI

// declaring constant array
const weapon = ["rock", "paper", "scissors"];

// declaring an object with the game rules
const rules = {
  rock: { rock: "draw", scissors: "win", paper: "lose" },
  paper: { paper: "draw", rock: "win", scissors: "lose" },
  scissors: { scissors: "draw", paper: "win", rock: "lose" },
};

// a function to generate computer's choice (random)
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

  console.log("Your choice is", userInput.toLowerCase());
  return userInput.toLowerCase();
}

// a function that plays one round of the game
function playRound(playerSelection, computerSelection) {
  // determine the outcome of the game by simply looking up the key-value pair of the object
  let outcome = rules[playerSelection][computerSelection];

  // conditional to print the statement
  if (outcome == "win") {
    console.log(
      "You Win! " +
        playerSelection.toUpperCase() +
        " beats " +
        computerSelection.toUpperCase()
    );
  } else if (outcome == "lose") {
    console.log(
      "You Lose! " +
        computerSelection.toUpperCase() +
        " beats " +
        playerSelection.toUpperCase()
    );
  } else {
    console.log("Draw!");
  }

  return outcome;
}

// a function that plays the game 5 times
function game() {
  // setting-up an object to keep the tally
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

  // conditional to print the final statement and return a string of human player's status
  if (score.human > score.computer) {
    console.log(
      "You beat computer " +
        score.human +
        " to " +
        score.computer +
        ". You have won the game! Congratulations!"
    );
    return "win";
  } else if (score.human < score.computer) {
    console.log(
      "You lose to computer " +
        score.computer +
        " to " +
        score.human +
        ". You have lost the game! What a pity..."
    );
    return "lose";
  } else {
    console.log(
      "The score is " +
        score.human +
        " to " +
        score.human +
        ". The game result is draw. Repeat the game to know who is better."
    );
    return "draw";
  }
}

// play the game
game();
