import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({
    children,
    className = "",
}: CardProps) {
    return (
        <section
            className={`
                rounded-card
                border
                border-border
                bg-surface
                p-6
                shadow-card
                ${className}
            `}
        >
            {children}
        </section>
    );
}