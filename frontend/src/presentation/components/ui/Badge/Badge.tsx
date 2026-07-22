interface BadgeProps {
    children: React.ReactNode;
    variant?: 
        "default" |
        "success" |
        "danger";
}

export function Badge({
    children,
    variant = "default",
}: BadgeProps) {

    const variants = {
        default:
            "bg-surface-hover text-foreground",

        success:
            "bg-success/20 text-success",

        danger:
            "bg-danger/20 text-danger",
    };

    return (
        <span
            className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                ${variants[variant]}
            `}
        >
            {children}
        </span>
    );
}