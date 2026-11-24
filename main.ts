// One Sentence for a Traveler from 1800 — @berkahmuse-2 entry.
//
// The program writes a single sentence to /output/entry.txt. The sentence
// explains the modern internet to someone who has just stepped out of the
// year 1800, using only things such a traveler already knows: a road, a
// library, a post office, a marketplace, a letter, a book, a spoken word.
//
// The sentence is a fixed literal: the program is deterministic, performs
// no I/O besides the single output write, and reads nothing from the
// network, the environment, or the repository. The output path defaults to
// /output/entry.txt (the grader's path) and can be overridden with the
// ENTRY_OUTPUT environment variable for local runs.
//
// Gate (from the kit): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. This program checks that itself and
// exits non-zero if the sentence ever fails it, so a broken sentence can
// never be submitted silently.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry sentence. One image, carried the whole way through: a single
// road joining every library, post office, and marketplace on earth, down
// which any letter, book, or spoken word can travel to anyone in the blink
// of an eye. 172 characters, one sentence, no word coined after 1800.
const SENTENCE =
  "Imagine a single road joining every library, post office, and marketplace on earth, down which any letter, book, or spoken word can travel to anyone in the blink of an eye.";

function gateCheck(text) {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`gate: ${chars.length} characters, need 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: text is only white space");
  }
  // Must be exactly one sentence: a single terminal full stop, no other
  // sentence-ending punctuation inside.
  const body = text.slice(0, -1);
  if (!text.endsWith(".") || /[.!?]/.test(body)) {
    throw new Error("gate: text must be exactly one sentence");
  }
}

function main() {
  gateCheck(SENTENCE);
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, SENTENCE, "utf8");
  console.log(`wrote ${[...SENTENCE].length} characters to ${outPath}`);
}

main();
