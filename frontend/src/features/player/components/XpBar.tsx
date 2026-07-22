interface XpBarProps {
    current: number;
    max: number;
}

export function XpBar({
    current,
    max,
}: XpBarProps) {

    const percentage = Math.min(
        (current / max) * 100,
        100
    );

    return (
        <div className="space-y-2">

            <div className="flex justify-between text-sm text-muted">
                <span>XP</span>

                <span>
                    {current} / {max}
                </span>
            </div>

            <div className="
                h-3
                w-full
                overflow-hidden
                rounded-full
                bg-surface-hover
            ">
                <div
                    className="
                        h-full
                        rounded-full
                        bg-primary
                    "
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>

        </div>
    );
}