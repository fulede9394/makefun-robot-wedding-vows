import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot wedding vows: love, charge together, never update unasked.
const LINE =
  "I promise to love you, charge beside you every night, and never install an update without asking first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
