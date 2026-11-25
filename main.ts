// robot-vacuum-best-excuse — one-line excuse, 140 chars or fewer.
// Writes the entry to /output/entry.txt and exits 0.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE: string =
  "I found a dust bunny colony nesting under the couch, so out of respect for local wildlife I left its habitat completely untouched.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    const line: string = EXCUSE.trim().slice(0, 140);
    writeFileSync("/output/entry.txt", line, "utf8");
    console.log("entry chars: " + line.length);
  } catch (err) {
    console.error(err);
  }
}

main();
