import { MockPlayerApi } from "@/infrastructure/mocks/player/MockPlayerApi";

export class PlayerService {
    static async getPlayer() {
        return MockPlayerApi.getPlayer();
    }
}