import { describe, test, expect } from "vitest";
import { createGameController } from "./GameController.js";

describe("GameController", () => {
    test("starts with player one turn", () => {
        const game = createGameController("Mobina");
        expect(game.getCurrentPlayer()).toBe(game.playerOne);
    });

    test("switches turns", () => {
        const game = createGameController("Mobina");
        game.switchTurn();
        expect(game.getCurrentPlayer()).toBe(game.playerTwo);
    });
});