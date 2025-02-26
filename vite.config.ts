import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base:
      mode === "development" ? "/" : "https://sputnyq.github.io/wicked-chili/",

    plugins: [react()],
  };
});
