import { Card } from "@presentation/components/ui/Card";

import { MomentumStatus } from "./MomentumStatus";


const momentum = {
    value: 72,
    status: "Consistente",
    description:
        "Você mantém uma evolução estável.",
};


export function MomentumCard() {

    return (
        <Card>

            <div className="space-y-5">

                <div>
                    <h2
                        className="
                            text-xl
                            font-bold
                            text-foreground
                        "
                    >
                        Momentum
                    </h2>

                    <p
                        className="
                            text-sm
                            text-muted
                        "
                    >
                        Sua consistência atual.
                    </p>
                </div>


                <MomentumStatus
                    label={momentum.status}
                    value={momentum.value}
                    description={momentum.description}
                />

            </div>

        </Card>
    );
}