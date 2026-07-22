import { Badge } from "@presentation/components/ui/Badge";


interface QuestItemProps {
    title: string;
    category: string;
    difficulty: string;
    reward: {
        xp: number;
    };
    status: "completed" | "pending";
}


export function QuestItem({
    title,
    category,
    difficulty,
    reward,
    status,
}: QuestItemProps) {

    const completed = status === "completed";


    return (
        <div
            className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-border
                bg-background
                p-4
            "
        >

            <div className="flex items-center gap-4">

                <input
                    type="checkbox"
                    checked={completed}
                    readOnly
                    className="
                        h-5
                        w-5
                        accent-primary
                    "
                />


                <div>

                    <h3
                        className={`
                            font-medium
                            ${
                                completed
                                    ? "text-muted line-through"
                                    : "text-foreground"
                            }
                        `}
                    >
                        {title}
                    </h3>


                    <div
                        className="
                            flex
                            gap-2
                            text-sm
                            text-muted
                        "
                    >
                        <span>
                            {category}
                        </span>

                        <span>
                            •
                        </span>

                        <span>
                            {difficulty}
                        </span>

                    </div>

                </div>

            </div>


            <Badge>
                +{reward.xp} XP
            </Badge>

        </div>
    );
}