// Simple script to copy CSS file to dist
import { copyFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure dist directory exists
mkdirSync(resolve(__dirname, "dist"), { recursive: true });

// Copy CSS file
copyFileSync(
  resolve(__dirname, "src/styles.css"),
  resolve(__dirname, "dist/styles.css")
);

console.log("CSS file copied to dist/styles.css");
