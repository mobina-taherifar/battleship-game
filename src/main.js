import { renderBoard } from "./UI/renderBoard.js";
import { createGameController } from "./game/GameController.js";
import { setupShips } from "./game/setupShips.js";

const playerBoardElement = document.querySelector("#player-board");
const computerBoardElement = document.querySelector("#computer-board");

let game;
let playerGameboard;
let computerGameboard;

function render() {
    renderBoard(
        playerBoardElement,
        playerGameboard,
        true
    );

    renderBoard(
        computerBoardElement,
        computerGameboard,
        false,
        handleAttack
    );
}

function handleAttack(position) {
    game.playTurn(position);
    render();
}

function startGame() {
    game = createGameController("Mobina");

    playerGameboard = game.playerOne.board;
    computerGameboard = game.playerTwo.board;

    setupShips(game.playerOne);
    setupShips(game.playerTwo);

    render();
}

startGame();