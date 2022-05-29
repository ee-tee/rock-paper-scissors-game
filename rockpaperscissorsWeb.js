/* ---------------------------------------------------------------------------------------
    CodeAcademy JavaScript Project: Rock, Paper, or Scissors
--------------------------------------------------------------------------------------- *//*

LEARN JAVASCRIPT
Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there's a tie, then the game ends in a draw.

*//* -------------------------------------------------------------------------------------
    Task Overview
--------------------------------------------------------------------------------------- *//*

1) Get the player's choice.
2) Get the computer's choice.
3) Compare the two choices and determine a winner.
4) Start the program and display the results.

*//* -------------------------------------------------------------------------------------
    Script
--------------------------------------------------------------------------------------- */

/* ------ Memory Chip ------ */

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const bomb = "bomb";
let userInput = "";
let playerLevel = 0;
let computerLevel = 0;

/* ------ Game Processor ------ */

// 1) Get the player's choice from button click on the game controller for "rock", "paper", "scissors" or "bomb".

document.getElementById("rock").onclick = function() {
  userInput = rock;
  showRock("playerChoice");
  onDisplay("playerChoice");
  playGame(userInput);
}

document.getElementById("paper").onclick = function() {
  userInput = paper;
  showPaper("playerChoice");
  onDisplay("playerChoice");
  playGame(userInput);
}

document.getElementById("scissors").onclick = function() {
  userInput = scissors;
  showScissors("playerChoice");
  onDisplay("playerChoice");
  playGame(userInput);
}

document.getElementById("bomb").onclick = function() {
  userInput = bomb;
  showBomb("playerChoice");
  onDisplay("playerChoice");
  playGame(userInput);
}

/* ------ Game Processor ------ */

// 2) Get the computer's choice by generating a random number between 0 to 2 for "rock", "paper" or "scissors".

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      showRock("computerChoice");
      onDisplay("computerChoice");
      return rock;
    case 1:
      showPaper("computerChoice");
      onDisplay("computerChoice");
      return paper;
    case 2:
      showScissors("computerChoice");
      onDisplay("computerChoice");
      return scissors;
  }
}

// 3) Compare the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {

  // a) User wins using bomb cheat code.
  if (userChoice === bomb) {
    return "You won!";
  }

  // b) Game ends in a tie.
  else if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  // c) Game is not a tie;
  else {
    // Player chooses "rock" and computer chooses "paper".
    if (userChoice === rock) {
      if (computerChoice === paper) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    // Player chooses "paper" and computer chooses "scissors".
    else if (userChoice === paper) {
      if (computerChoice === scissors) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    // Player chooses "scissors" and computer chooses "rock".
    else if (userChoice === scissors) {
      if (computerChoice === rock) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
  }
}

// 4) Run the game and display the results.

const playGame = (userInput) => {
  const userChoice = userInput;
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  //Print game results to console
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(result);

  //Print game results to browser game console
    showResult("gameResult", result);
    levelUp(result);
}

function levelUp(result) {
  if (result === "You won!") {
    playerLevel += 1;
    showPlayerLevel(playerLevel);
    // document.getElementsByClassName("playerLevel")[0].innerHTML = playerLevel;
  } 
  else if (result === "The computer won!") {
    computerLevel += 1;
    showComputerLevel(computerLevel);
    // document.getElementsByClassName("computerLevel")[0].innerHTML = computerLevel;
  }
}


/* ----- Graphics Card ----- */

function onDisplay(className) {
  document.getElementsByClassName(className)[0].style.opacity = 1;
  document.getElementsByClassName(className)[1].style.opacity = 1;
}

function showRock(className) {
  document.getElementsByClassName(className)[0].src = "images/cookie-solid.svg";
  document.getElementsByClassName(className)[1].src = "images/cookie-solid.svg";
}

function showPaper(className) {
  document.getElementsByClassName(className)[0].src = "images/toilet-paper-solid.svg";
  document.getElementsByClassName(className)[1].src = "images/toilet-paper-solid.svg";
}

function showScissors(className) {
  document.getElementsByClassName(className)[0].src = "images/scissors-solid.svg";
  document.getElementsByClassName(className)[1].src = "images/scissors-solid.svg";
}

function showBomb(className) {
  document.getElementsByClassName(className)[0].src = "images/bomb-solid.svg";
  document.getElementsByClassName(className)[1].src = "images/bomb-solid.svg";
}

function showResult(className, message) {
  document.getElementsByClassName(className)[0].innerHTML = message;
  document.getElementsByClassName(className)[1].innerHTML = message;
}

function showPlayerLevel(playerLevel) {
  document.getElementsByClassName("playerLevel")[0].innerHTML = playerLevel;
  document.getElementsByClassName("playerLevel")[1].innerHTML = playerLevel;
}
  
function showComputerLevel(computerLevel) {
  document.getElementsByClassName("computerLevel")[0].innerHTML = computerLevel;
  document.getElementsByClassName("computerLevel")[1].innerHTML = computerLevel;
}

/* -------------------------------------------------------------------------------------
    The End - Hope you had fun!
--------------------------------------------------------------------------------------- */