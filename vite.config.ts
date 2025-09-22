import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary =
    process.env.BUILD_TARGET === "library" || mode === "library";

  if (isLibrary) {
    // Library build configuration
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "ChatMe",
          fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
          formats: ["es", "cjs"],
        },
        rollupOptions: {
          external: [
            "react",
            "react-dom",
            "react/jsx-runtime",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "class-variance-authority",
            "clsx",
            "lucide-react",
            "tailwind-merge",
            "uuid",
            "zod",
          ],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "react/jsx-runtime",
            },
          },
        },
        sourcemap: true,
        minify: false,
        cssCodeSplit: false,
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    };
  }

  // Development/demo build configuration
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 5174,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
    },
  };
});
