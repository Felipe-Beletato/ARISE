import { XpBar } from "@features/player/components/XpBar";


interface CategoryProgressProps {
    name: string;
    level: number;
    currentXp: number;
    maxXp: number;
}


export function CategoryProgress({
    name,
    level,
    currentXp,
    maxXp,
}: CategoryProgressProps) {

    return (
        <div
            className="
                space-y-3
                rounded-lg
                border
                border-border
                bg-background
                p-4
            "
        >

            <div className="
                flex
                items-center
                justify-between
            ">

                <div>
                    <h3
                        className="
                            font-medium
                            text-foreground
                        "
                    >
                        {name}
                    </h3>

                    <p
                        className="
                            text-sm
                            text-muted
                        "
                    >
                        Level {level}
                    </p>
                </div>


            </div>


            <XpBar
                current={currentXp}
                max={maxXp}
            />

        </div>
    );
}