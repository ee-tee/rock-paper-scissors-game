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

Our code will break the game into four parts:

1) Get the user's choice.
2) Get the computer's choice.
3) Compare the two choices and determine a winner.
4) Start the program and display the results.

*//* -------------------------------------------------------------------------------------
    Script
--------------------------------------------------------------------------------------- */

//Here I shall store the possible commands as variables so I do not need to keep typing "" inverted commas later in the functions.
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const bomb = "bomb";

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //Check if user enters "rock", "paper", "scissors" or "bomb" and return value if true
  if (
    userInput === rock ||
    userInput === paper ||
    userInput === scissors ||
    userInput === bomb
  ) {
    return userInput;
  } else {
    //Print error message if user enters an invalid choice
    console.log("Invalid choice! Please enter rock, paper or scissors.");
  }
}

const getComputerChoice = () => {
  //Generate a random number between 0 to 2 for computer to set its choice as "rock", "paper" or "scissors" in that order
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  //User wins using bomb cheat code
  if (userChoice === bomb) {
    return "You won!";
  }
  //Game is a tie
  else if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  //Game is not a tie
  else {
    //User chooses "rock" and computer chooses "paper"
    if (userChoice === rock) {
      if (computerChoice === paper) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    //User chooses "paper" and computer chooses "scissors"
    else if (userChoice === paper) {
      if (computerChoice === scissors) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    //User chooses "scissors" and computer chooses "rock"
    else if (userChoice === scissors) {
      if (computerChoice === rock) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
  }
}

const playGame = () => {
  //Parse in user's choice as the argument in getUserChoice()
  //rock, paper, scissors, bomb
  const userChoice = getUserChoice(rock);
  const computerChoice = getComputerChoice();
  if (userChoice === undefined) {
    //Return nothing if user enters an invalid choice, error message is called in line 50
  } else {
    //Print to console the game results
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
}

//Let's call the function and start playing the game!
playGame();

/* -------------------------------------------------------------------------------------
    The End - Hope you had fun!
--------------------------------------------------------------------------------------- */
