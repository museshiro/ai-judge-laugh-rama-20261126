import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
// One line, no trailing newline: the gate counts every character.
writeFileSync("/output/entry.txt", "The coffee machine requires a login now, so every morning I prove I'm not a robot and then drink something that clearly is.");
