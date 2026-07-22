interface MomentumStatusProps {
    label: string;
    value: number;
    description: string;
}


export function MomentumStatus({
    label,
    value,
    description,
}: MomentumStatusProps) {

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

                <span
                    className="
                        text-sm
                        text-muted
                    "
                >
                    {label}
                </span>


                <span
                    className="
                        font-bold
                        text-primary
                    "
                >
                    {value}%
                </span>

            </div>


            <div
                className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-surface-hover
                "
            >

                <div
                    className="
                        h-full
                        rounded-full
                        bg-primary
                    "
                    style={{
                        width: `${value}%`,
                    }}
                />

            </div>


            <p
                className="
                    text-sm
                    text-muted
                "
            >
                {description}
            </p>

        </div>
    );
}