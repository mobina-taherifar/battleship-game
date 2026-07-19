export function createShip(length){
    let hits = 0;
    return{
        length,
        hit(){
            hits++;
        },
        isSunk(){
            return hits >= length;
        }
    }
}