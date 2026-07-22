import { createPlayer } from "./Player.js";

export function createGameController(playerOneName) {
    const playerOne = createPlayer(playerOneName, false);
    const playerTwo = createPlayer("Computer", true);

    let currentPlayer = playerOne;
    let winner = null;


    function computerTurn() {
        const opponent = playerOne;
        const position = currentPlayer.getRandomAttack();
        const result = currentPlayer.attack(
            opponent.board,
            position
        );

        if (opponent.board.allShipsSunk()) {
            winner = currentPlayer;
        }

        return {
            position,
            result,
            winner
        };
    }

    function switchTurn() {
        currentPlayer = currentPlayer === playerOne
            ? playerTwo
            : playerOne;
    }

    return {
        playerOne,
        playerTwo,

        getCurrentPlayer() {
            return currentPlayer;
        },

        getWinner() {
            return winner;
        },

        playTurn(position) {
            const opponent = currentPlayer === playerOne
                ? playerTwo
                : playerOne;

            const playerAttackResult = currentPlayer.attack(
                opponent.board,
                position
            );

            if (playerAttackResult === "Already attacked") {
                return {
                    playerAttack: {
                        position,
                        result: playerAttackResult
                    },
                    computerAttack: null,
                    winner
                };
            }

            if (opponent.board.allShipsSunk()) {
                winner = currentPlayer;
                return {
                    playerAttack: {
                        position,
                        result: playerAttackResult
                    },
                    computerAttack: null,
                    winner
                };
            }

            switchTurn();

            let computerAttack = null;

            if (currentPlayer.isComputer) {
                computerAttack = computerTurn();
                if (!winner) {
                    switchTurn();
                }
            }

            return {
                playerAttack: {
                    position,
                    result: playerAttackResult
                },

                computerAttack,

                winner
            };
        },

        switchTurn,

        isGameOver() {
            return winner !== null;
        }
    };
}