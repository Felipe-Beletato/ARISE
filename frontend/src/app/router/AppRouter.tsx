import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardPage } from "@presentation/pages/Dashboard/DashboardPage";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
}