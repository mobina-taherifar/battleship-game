import { createPlayer } from "./Player.js";

export function createGameController(playerOneName){
    const playerOne = createPlayer(playerOneName, false);
    const playerTwo = createPlayer("Computer", true);
    let currentPlayer = playerOne;
    let winner = null;
    function computerTurn(){
        const opponent = playerOne;
        const position = currentPlayer.getRandomAttack();
        const result = currentPlayer.attack(
            opponent.board,
            position
        );

        if(opponent.board.allShipsSunk()){
            winner = currentPlayer;
            return {
                position,
                result,
                winner
            };
        }

        switchTurn();

        return {
            position,
            result,
            winner
        };
    }

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
            const opponent = currentPlayer === playerOne 
                ? playerTwo 
                : playerOne;

            const result = currentPlayer.attack(
                opponent.board,
                position
            );

            if(result === "Already attacked"){
                return {
                    result
                };
            }

            if(opponent.board.allShipsSunk()){
                winner = currentPlayer;

                return {
                    result,
                    winner
                };
            }

            switchTurn();

            if(currentPlayer.isComputer){
                return computerTurn();
            }
            return {
                result
            };
        },

        switchTurn(){
            currentPlayer = currentPlayer === playerOne
                ? playerTwo
                : playerOne;
        },

        isGameOver(){
            return winner !== null;
        }
    };
}