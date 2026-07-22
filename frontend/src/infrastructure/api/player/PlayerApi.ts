import { apiClient } from "@infrastructure/api/apiClient";

export class PlayerApi {
    static async getPlayer() {
        const response = await apiClient.get("/player");

        return response.data;
    }
}