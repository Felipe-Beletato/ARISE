import { useQuery } from "@tanstack/react-query";

import { PlayerService } from "@application/services/PlayerService";

export function usePlayer() {
    return useQuery({
        queryKey: ["player"],
        queryFn: PlayerService.getPlayer,
    });
}