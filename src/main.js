import { renderBoard } from "./UI/renderBoard.js";
import { createGameController } from "./game/GameController.js";
import { setupShips } from "./game/setupShips.js";


const playerBoardElement = document.querySelector("#player-board");
const computerBoardElement = document.querySelector("#computer-board");
const messageElement = document.querySelector("#game-message");
const newGameButton = document.querySelector("#newgame-btn");

let game;

function startGame(){
    game = createGameController("Mobina");

    setupShips(game.playerOne);
    setupShips(game.playerTwo);

    render();
    computerBoardElement.style.pointerEvents = "auto";

    updateMessage({
        playerAttack: null,
        computerAttack: null,
        winner: null
    });
}

function render(){
    renderBoard(
        playerBoardElement,
        game.playerOne.board,
        true
    );

    renderBoard(
        computerBoardElement,
        game.playerTwo.board,
        false,
        handleAttack
    );
}

function handleAttack(position){
    const result = game.playTurn(position);
    updateMessage(result);
    render();

    if(result.winner){
        computerBoardElement.style.pointerEvents = "none";
    }
}

function updateMessage(result){
    if(result.winner){
        if(result.winner === game.playerOne){
            messageElement.textContent = "You win!";
        }
        else{
            messageElement.textContent = "You lost:(";
        }
        return;
    }

    let message = "";

    if(result.playerAttack){
        message +=
        `You attacked ${result.playerAttack.position}: ${result.playerAttack.result}`;
    }

    if(result.computerAttack){
        message +=
        ` | Computer attacked ${result.computerAttack.position}: ${result.computerAttack.result}`;
    }

    messageElement.textContent = message;
}

newGameButton.addEventListener("click", startGame);

startGame();