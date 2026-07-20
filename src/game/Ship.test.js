import { describe, test, expect } from "vitest";
import { createShip } from "./Ship.js";

describe("Ship", () => {
    test("creates a ship with given length", () => {
        const ship = createShip(3);
        expect(ship.length).toBe(3);
    });

    test("ship is not sunk before receiving enough hits", () => {
        const ship = createShip(3);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });

    test("ship sinks after receiving enough hits", () => {
        const ship = createShip(3);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});