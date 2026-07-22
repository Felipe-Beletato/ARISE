import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../../presentation/pages/Dashboard/DashboardPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
        </Routes>
    );
}