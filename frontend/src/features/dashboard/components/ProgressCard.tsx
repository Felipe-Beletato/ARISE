import { Card } from "@presentation/components/ui/Card";

import { XpBar } from "@features/player/components/XpBar";
import { usePlayer } from "@features/player/hooks/usePlayer";


export function ProgressCard() {

    const {
        data,
        isLoading,
        error,
    } = usePlayer();


    if (isLoading) {
        return (
            <Card>
                Carregando progresso...
            </Card>
        );
    }


    if (error || !data) {
        return (
            <Card>
                Erro ao carregar progresso.
            </Card>
        );
    }


    const xpRemaining =
        data.requiredXp - data.currentXp;


    return (
        <Card>

            <div className="space-y-6">

                {/* Header */}

                <div className="flex justify-between">

                    <div>
                        <h2 className="
                            text-xl
                            font-bold
                            text-foreground
                        ">
                            Progressão
                        </h2>

                        <p className="
                            text-sm
                            text-muted
                        ">
                            Caminho do jogador
                        </p>
                    </div>


                    <div className="
                        text-right
                    ">
                        <span className="
                            text-sm
                            text-muted
                        ">
                            Level
                        </span>

                        <p className="
                            text-3xl
                            font-bold
                            text-primary
                        ">
                            {data.level}
                        </p>
                    </div>

                </div>


                {/* Barra */}

                <XpBar
                    current={data.currentXp}
                    max={data.requiredXp}
                />


                {/* Footer */}

                <div className="
                    flex
                    justify-between
                    text-sm
                    text-muted
                ">

                    <span>
                        XP Atual:
                        {" "}
                        {data.currentXp}
                    </span>


                    <span>
                        Faltam:
                        {" "}
                        {xpRemaining}
                        {" "}
                        XP
                    </span>

                </div>


            </div>

        </Card>
    );
}