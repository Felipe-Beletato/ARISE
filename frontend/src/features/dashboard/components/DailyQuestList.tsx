import { Card } from "@presentation/components/ui/Card";

import { QuestItem } from "./QuestItem";


interface Quest {
    id: number;
    title: string;
    category: string;
    difficulty: string;
    reward: {
        xp: number;
    };
    status: "completed" | "pending";
}


const quests: Quest[] = [
    {
        id: 1,
        title: "Treinar",
        category: "Vanguard",
        difficulty: "Média",
        reward: {
            xp: 50,
        },
        status: "completed",
    },

    {
        id: 2,
        title: "Estudar React",
        category: "Codex",
        difficulty: "Difícil",
        reward: {
            xp: 40,
        },
        status: "pending",
    },

    {
        id: 3,
        title: "Ler 10 páginas",
        category: "Codex",
        difficulty: "Fácil",
        reward: {
            xp: 20,
        },
        status: "pending",
    },
];


export function DailyQuestList() {

    return (
        <Card>

            <div className="space-y-4">

                <div>
                    <h2
                        className="
                            text-xl
                            font-bold
                            text-foreground
                        "
                    >
                        Missões do Dia
                    </h2>


                    <p
                        className="
                            text-sm
                            text-muted
                        "
                    >
                        Complete suas missões para evoluir.
                    </p>
                </div>


                <div className="space-y-3">

                    {quests.map((quest) => (
                        <QuestItem
                            key={quest.id}
                            {...quest}
                        />
                    ))}

                </div>

            </div>

        </Card>
    );
}