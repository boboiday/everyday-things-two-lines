// Everyday Things, Two Lines, Longer Run — make.fun entry
// Writes exactly two lines to /output/entry.txt:
// line 1 explains a toaster to a 10-year-old with a sunbed analogy;
// line 2 says why the analogy works and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Your toaster is a tiny sunbed: two glowing wires hug your bread like summer sun, and when it's brown enough it pops up, done tanning.";
const LINE_2 =
  "It works because heat browns bread the way sun browns skin — but it leaves out that bread can't roll over, so one side always burns first.";

const entry = `${LINE_1}\n${LINE_2}\n`;

if (entry.split("\n").filter(Boolean).length !== 2) {
  throw new Error("entry must be exactly two lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
