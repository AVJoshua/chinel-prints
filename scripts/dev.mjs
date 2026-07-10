import { spawn, execSync } from "child_process";
import { existsSync, rmSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const port = process.env.PORT || "3001";
const clean = process.argv.includes("--clean") || process.env.CLEAN === "1";

process.chdir(root);

try {
  execSync(`fuser -k ${port}/tcp 2>/dev/null`, { stdio: "ignore" });
} catch {
  // Port was already free
}

if (clean || !existsSync(path.join(root, ".next"))) {
  rmSync(path.join(root, ".next"), { recursive: true, force: true });
  console.log("Cleared .next cache");
}

console.log(`\nStarting dev server at http://localhost:${port}/`);
console.log("If assets 404, hard refresh: Ctrl+Shift+R\n");

const child = spawn("npx", ["next", "dev", "--port", port], {
  stdio: "inherit",
  shell: true,
  cwd: root,
});

child.on("exit", (code) => process.exit(code ?? 0));