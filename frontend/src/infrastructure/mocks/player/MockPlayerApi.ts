import { createMockPlayer } from "./playerFactory";

export class MockPlayerApi {
    static async getPlayer() {
        await new Promise((resolve) => setTimeout(resolve, 500));

        return createMockPlayer();
    }
}