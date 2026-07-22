import type { Player } from "@domain/player";

export function createMockPlayer(): Player {
    return {
        id: crypto.randomUUID(),
        nickname: "Tony",
        level: 12,
        currentXp: 780,
        requiredXp: 1200,
        momentum: 85,
        title: "Caçador Iniciante",
    };
}