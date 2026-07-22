import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function MainLayout({ children }: Props) {
    return (
        <main>
            {children}
        </main>
    );
}