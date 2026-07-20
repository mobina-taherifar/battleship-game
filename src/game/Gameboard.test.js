import { describe, test, expect } from "vitest";
import { createGameBoard } from "./Gameboard.js";
import { createShip } from "./Ship.js";

describe("Gameboard", () => {
    test("places a ship and receives attacks", () => {
        const board = createGameBoard();
        const ship = createShip(2);
        board.placeShip(ship, ["A1", "A2"]);
        board.receiveAttack("A1");
        board.receiveAttack("A2");
        expect(ship.isSunk()).toBe(true);
    });
    
    test("returns miss when attacking an empty position", () => {
        const board = createGameBoard();
        const result = board.receiveAttack("B5");
        expect(result).toBe("Miss!");
    });

    test("does not allow attacking the same position twice", () => {
        const board = createGameBoard();
        board.receiveAttack("B5");
        const result = board.receiveAttack("B5");
        expect(result).toBe("Already attacked");
});
});