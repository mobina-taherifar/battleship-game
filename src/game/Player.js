import { createGameBoard } from "./Gameboard.js"

export function createPlayer(name, isComputer){
    const board = createGameBoard()
    return{
        name,
        board,
        isComputer,
    }
    
}