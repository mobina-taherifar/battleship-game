import { createPlayer } from "./Player.js";

export function createGameController(playerOneName){
    const playerOne = createPlayer(playerOneName, false);
    const playerTwo = createPlayer("Computer", true);

    let currentPlayer = playerOne;
    let winner = null;


    function computerTurn(){
        const opponent = currentPlayer === playerOne 
            ? playerTwo 
            : playerOne;

        const position = currentPlayer.getRandomAttack();

        const result = currentPlayer.attack(
            opponent.board,
            position
        );

        console.log("Computer attacks:", position, result);

        if(opponent.board.allShipsSunk()){
            winner = currentPlayer;
            return result;
        }

        switchTurn();

        return result;
    }

    function switchTurn(){
        currentPlayer = currentPlayer === playerOne 
            ? playerTwo 
            : playerOne;
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
                return result;
            }

            if(opponent.board.allShipsSunk()){
                winner = currentPlayer;
                return result;
            }

            switchTurn();

            if(currentPlayer.isComputer){
                computerTurn();
            }

            return result;
        },

        computerTurn,
        switchTurn,
        isGameOver(){
            return winner !== null;
        }
    }
}