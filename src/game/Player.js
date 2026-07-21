import { createGameBoard } from "./Gameboard.js"

export function createPlayer(name, isComputer){
    const board = createGameBoard()
    let computerAttacks = new Set()
    return{
        name,
        board,
        isComputer,

        attack(opponentBoard, position){
            return opponentBoard.receiveAttack(position);
        },

        getRandomAttack(){
            const rows = "ABCDEFGHIJ";
            let position;

            do {
                const randomRow = rows[Math.floor(Math.random() * rows.length)];
                const randomColumn = Math.floor(Math.random() * 10) + 1;
                position = `${randomRow}${randomColumn}`;

            } while(computerAttacks.has(position));

            computerAttacks.add(position);

            return position;
        }
    }
    
}