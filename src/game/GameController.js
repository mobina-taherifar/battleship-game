import { createPlayer } from "./Player.js";

export function createGameController(playerOneName){
    const playerOne = createPlayer(playerOneName, false);
    const playerTwo = createPlayer("Computer", true);
    let currentPlayer = playerOne;
    let winner = null;
    return{
        playerOne,
        playerTwo,

        getCurrentPlayer(){
            return currentPlayer;
        },

        getWinner(){
            return winner;
        },

        playTurn(position){
            const opponent = currentPlayer === playerOne ? playerTwo : playerOne;
            const result = opponent.board.receiveAttack(position);

            if(opponent.board.allShipsSunk()){
                winner = currentPlayer;
                return result;
            }
            switchTurn();

            return result;
        },

        switchTurn(){
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        },

        isGameOver(){
            return winner !== null;
        }
    }
}