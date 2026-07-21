import { renderBoard } from "./UI/renderBoard.js";
import { createGameController } from "./game/GameController.js";

const playerBoardElement = document.querySelector("#player-board");
const computerBoardElement = document.querySelector("#computer-board");

const game = createGameController("Mobina");

const playerGameboard = game.playerOne.board;
const computerGameboard = game.playerTwo.board;


function handleAttack(position){
    const result = game.playTurn(position);

    console.log(result);

    renderBoard(
        computerBoardElement,
        computerGameboard,
        false,
        handleAttack
    );
}


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