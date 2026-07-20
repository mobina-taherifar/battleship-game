import { describe, test, expect } from "vitest";
import { createPlayer } from "./Player.js";

describe("Player", () => {
    test("creates a player with name and type", () => {
        const player = createPlayer("Mobina", false);
        expect(player.name).toBe("Mobina");
        expect(player.isComputer).toBe(false);
    });

    test("player has a gameboard", () => {
        const player = createPlayer("Mobina", false);
        expect(player.board).toBeDefined();
    });

    test("creates computer player", () => {
        const computer = createPlayer("Computer", true);
        expect(computer.isComputer).toBe(true);
    });
});