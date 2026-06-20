import { cpSync, mkdirSync, rmSync } from "fs";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const previewDir = path.join(root, ".preview");
const mountDir = path.join(previewDir, "chinel-prints");
const outDir = path.join(root, "out");
const port = process.env.PORT || "3001";

rmSync(previewDir, { recursive: true, force: true });
mkdirSync(mountDir, { recursive: true });
cpSync(outDir, mountDir, { recursive: true });

console.log(`\nPreview: http://localhost:${port}/chinel-prints/\n`);

const child = spawn(
  "npx",
  ["--yes", "serve", previewDir, "-l", port],
  { stdio: "inherit", shell: true, cwd: root }
);

child.on("exit", (code) => process.exit(code ?? 0));