import { createShip } from "./Ship.js";

export function setupShips(player){
    const carrier = createShip(5);
    const destroyer = createShip(3);
    const submarine = createShip(3);

    player.board.placeShip(
        carrier,
        generateShipPosition(5, player.board)
    );

    player.board.placeShip(
        destroyer,
        generateShipPosition(3, player.board)
    );

    player.board.placeShip(
        submarine,
        generateShipPosition(3, player.board)
    );

}

function getRandomDirection(){
    return Math.random() < 0.5
        ? "horizontal"
        : "vertical";
}

function generateShipPosition(length, board){
    let positions;

    do {
        positions = createPositions(length);

    } while(
        positions.some(
            position => !board.isPositionAvailable(position)
        )
    );

    return positions;
}

function createPositions(length){
    const rows = "ABCDEFGHIJ";
    const direction = getRandomDirection();
    const positions = [];

    if(direction === "horizontal"){
        const row = rows[
            Math.floor(Math.random() * rows.length)
        ];

        const startColumn = Math.floor(
            Math.random() * (10 - length + 1)
        ) + 1;

        for(let i = 0; i < length; i++){
            positions.push(
                `${row}${startColumn + i}`
            );
        }

    }else{
        const column = Math.floor(
            Math.random() * 10
        ) + 1;

        const startRow = Math.floor(
            Math.random() * (10 - length + 1)
        );

        for(let i = 0; i < length; i++){
            positions.push(
                `${rows[startRow + i]}${column}`
            );
        }

    }

    return positions;
}