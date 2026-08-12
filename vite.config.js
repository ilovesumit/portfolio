import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2018",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          animation: ["framer-motion"],
          scroll: ["react-scroll"],
          toast: ["react-toastify"],
          typing: ["react-type-animation"],
        },
      },
    },
  },
});
