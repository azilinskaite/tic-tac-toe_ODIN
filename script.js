//Declare all variables
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
//Options for winning
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
//Player's symbols will be placed in array according to index of a cell
let options = ["", "", "", "", "", "", "", "", ""];
//Default player
let currentPlayer = "X";
let running = false;

initializeGame();

//Setup before game starts
function initializeGame() {
  //invoke cellClicked function when cell is clicked
  cells.forEach(cell => cell.addEventListener("click", cellClicked)); 
  //invoke restartGame function when button is clicked
  restartBtn.addEventListener("click", restartGame);
  //display message
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  //get cell index from attribute in html. this refers to cell that's clicked. we get a number
  const cellIndex = this.getAttribute("cellIndex");
  //if cell is not empty or if the game is not running, do nothing
  if(options[cellIndex] != "" || !running) {
    return;
  }
  //otherwise invoke updateCell function
  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  //updating placeholder array with player's value
  options[index] = currentPlayer;
  //updating the cell visually with player's value
  cell.textContent = currentPlayer;
}

function changePlayer() {
  //check if current player is X, if true change it O, otherwise X
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  //update display message
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;
  for(let i = 0; i< winConditions.length; i++) {
    //iterates through winConditions array, checking all 9 scenarios 
    const condition = winConditions[i];
    //selects 3 indexes/elements inside each of 9 scenarios
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    //if one of cells is still empty, game continues
    if(cellA == "" || cellB == "" || cellC == ""){
      continue;
    }
    //if all 3 elements are the same, we have a winner
    if(cellA == cellB && cellB == cellC) {
      roundWon = true;
      //game ends
      break;
    }
  }
  //if we have a winner:
  if(roundWon){
    //update status text
    statusText.textContent = `${currentPlayer} wins!`;
    //game ends
    running = false;
  }
  //if no cells are empty (and there's no winner)
  else if(!options.includes("")) {
    //update status text
    statusText.textContent = `It's a draw!`;
    //game ends
    running = false;
  }
  else {
    //if none of the above are relevant, player changes, game continues
    changePlayer();
  }
}

function restartGame() {
  //reset, back to default player
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
}

// If drawing board in JS only:
// function gameboard() {
//     const rows = 3;
//     const columns = 3;
//     const board = [];
//     for (let i = 0; i < rows; i++) {
//       board[i] = [];
//       for (let j = 0; j < columns; j++) {
//         board[i].push(Cell());
//       }
//     }
//     const getBoard = () => board;
// }

//add event listener to each cell
//find which id cell was clicked
//change value of the cell

// const player1 = prompt("Name of player 1:");
// Player1 = X
// const player2 = prompt("Name of player 2:");
// Player2 = O

// Find cell by index and append value


// store players in objects
// store occupied cells into array
// object to control the flow of the game

// Define board
// Define 2 players
// Move 1 - player 1, position?
// Add position to array
// Refresh board state
// Move 2 - player 2, position?
// Check if position is free, if so
// Add position to array
// Refresh board state
// Move 3 - player 3, position?
// Check if position is free, if so
// Add position to array
// Refresh board state
// ...continue until win/lose