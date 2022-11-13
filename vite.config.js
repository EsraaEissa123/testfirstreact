import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { root } from "postcss";

export default defineConfig({
  Plugin: [react()],
  root: "src",
});
