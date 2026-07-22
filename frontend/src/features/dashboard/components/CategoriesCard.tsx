import { Card } from "@presentation/components/ui/Card";

import { CategoryProgress } from "./CategoryProgress";


const categories = [
    {
        name: "Vanguard",
        level: 5,
        currentXp: 350,
        maxXp: 500,
    },

    {
        name: "Codex",
        level: 3,
        currentXp: 180,
        maxXp: 300,
    },

    {
        name: "Soul",
        level: 4,
        currentXp: 240,
        maxXp: 400,
    },

    {
        name: "Treasury",
        level: 2,
        currentXp: 90,
        maxXp: 200,
    },

    {
        name: "Creation",
        level: 6,
        currentXp: 420,
        maxXp: 700,
    },
];


export function CategoriesCard() {

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
                        Categorias
                    </h2>

                    <p
                        className="
                            text-sm
                            text-muted
                        "
                    >
                        Desenvolvimento dos seus atributos.
                    </p>
                </div>


                <div className="space-y-3">

                    {categories.map((category) => (
                        <CategoryProgress
                            key={category.name}
                            {...category}
                        />
                    ))}

                </div>

            </div>

        </Card>
    );
}