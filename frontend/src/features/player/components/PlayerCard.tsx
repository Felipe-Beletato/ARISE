import { Card } from "@presentation/components/ui/Card";
import { Badge } from "@presentation/components/ui/Badge";

import { usePlayer } from "../hooks/usePlayer";

export function PlayerCard() {
    const { data, isLoading, error } = usePlayer();

    if (isLoading) {
        return (
            <Card>
                Carregando jogador...
            </Card>
        );
    }

    if (error || !data) {
        return (
            <Card>
                Erro ao carregar jogador.
            </Card>
        );
    }

    return (
        <Card>

            <div className="flex flex-col gap-6">

                {/* Identidade */}
                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-background
                            text-xl
                            font-bold
                            text-primary
                        "
                    >
                        {data.nickname.charAt(0)}
                    </div>


                    <div>
                        <h2 className="
                            text-xl
                            font-bold
                            text-foreground
                        ">
                            {data.nickname}
                        </h2>

                        <p className="
                            text-sm
                            text-muted
                        ">
                            {data.title}
                        </p>
                    </div>

                </div>


                {/* Status */}
                <div className="flex flex-wrap gap-2">

                    <Badge>
                        Level {data.level}
                    </Badge>


                    <Badge variant="success">
                        Ativo
                    </Badge>

                </div>

            </div>

        </Card>
    );
}