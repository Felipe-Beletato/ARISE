export function DashboardHeader() {
    return (
        <header className="flex items-center justify-between rounded-xl border border-border bg-surface p-4">
            <h1 className="text-2xl font-bold text-foreground">
                ARISE
            </h1>

            <button className="rounded-lg bg-primary px-4 py-2 text-foreground">
                Configurações
            </button>
        </header>
    );
}