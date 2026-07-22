import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@app": path.resolve(__dirname, "./src/app"),
            "@application": path.resolve(__dirname, "./src/application"),
            "@domain": path.resolve(__dirname, "./src/domain"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
            "@presentation": path.resolve(__dirname, "./src/presentation"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@assets": path.resolve(__dirname, "./src/assets"),
        },
    },
});