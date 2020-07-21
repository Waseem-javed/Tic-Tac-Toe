const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn
const winningContainer = document.querySelector(".winning-message");
const winningMsg = document.querySelector(".data-winning-text");
const restartBtn = document.getElementById("restart");
const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector(".board");

startGame();
restartBtn.addEventListener("click", startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach((cell) => {
        cell.classList.remove(X_CLASS);
		cell.classList.remove(CIRCLE_CLASS);
		cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHover();
    winningContainer.classList.remove('show');
}



function handleClick(e) {

    const cell = e.target
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell,currentClass)
    // whos won the game
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        // check for draw
        endGame(true);
    } else {
        // switch to turn
        swapTurns();
        setBoardHover();
    }
    
}

function endGame(draw) {
    if (draw) {
        winningMsg.textContent = `Draw!`;
    } else {
        winningMsg.textContent = `${circleTurn ? 'O\'s' : 'X\'s'} Win's!`;
    }
    winningContainer.classList.add("show");
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}
function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHover() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return (winning_combination.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    }))
}

