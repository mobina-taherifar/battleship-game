export function renderBoard(boardElement, gameboard, showShips, onCellClick = null){
    boardElement.innerHTML = "";
    const rows = "ABCDEFGHIJ";

    for(let row = 0; row < 10; row++){
        for(let col = 1; col <= 10; col++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.position = `${rows[row]}${col}`;
            if(showShips && gameboard.hasShip(cell.dataset.position)){
                cell.classList.add("ship");
            };

            if(gameboard.hasBeenAttacked(cell.dataset.position)){
                if(gameboard.hasShip(cell.dataset.position)){
                    cell.classList.add("hit");
                }else{
                    cell.classList.add("miss");
                }
            }

            if(onCellClick){
                cell.addEventListener("click", () => {
                    onCellClick(cell.dataset.position);
                });
            }
            
            boardElement.appendChild(cell);
        }
    }
}