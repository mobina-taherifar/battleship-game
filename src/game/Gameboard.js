export function createGameBoard(){
    let ships = [];
    let shipPositions = new Map();
    let attackedPositions = new Set();
    return{
        placeShip(ship, positions){
            ships.push(ship);

            positions.forEach(position => {
                shipPositions.set(position, ship);
            });
        },

        receiveAttack(position){
            if(attackedPositions.has(position)){
                return "Already attacked";
            }

            attackedPositions.add(position);

            const ship = shipPositions.get(position);

            if(ship){
                ship.hit();
                return "Hit!";
            }else{
                return "Miss!";
            }
        },

        allShipsSunk(){
            return ships.every(ship => ship.isSunk());
        },

        hasShip(position){
            return shipPositions.has(position);
        },

        hasBeenAttacked(position){
            return attackedPositions.has(position);
        },

        isPositionAvailable(position){
            return !shipPositions.has(position);
        }
    }
}