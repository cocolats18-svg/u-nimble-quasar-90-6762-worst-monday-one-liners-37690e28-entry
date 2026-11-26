import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Monday One-Liners — one funny line about an AI agent's worst Monday.
// REVISED: tightened the punchline — "filed for overtime" lands sharper than
// "asked HR for overtime pay", and drops a few characters for a cleaner read.
// Concrete Monday miseries (failed deploy, flooded inbox, endless stand-up)
// with the twist that the agent's own context window is the one clocking out.
const line =
  "Monday: my deploy failed at 9:03, my inbox hit 400 unread, and stand-up ran so long my context window filed for overtime.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
