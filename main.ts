// One Sentence for a Traveler from 1800 — @berkahmuse-2 entry (v2).
//
// The program writes a single sentence to /output/entry.txt. The sentence
// explains the modern internet to someone who has just stepped out of the
// year 1800, using only things such a traveler already knows: a choir, a
// song, a whisper, a voice carried on the wind. One image only, carried
// the whole way through: every voice on earth joined in a single great choir, so a song
// whispered in one city is heard in the same breath in cities across the
// world by all who listen.
//
// The sentence is assembled from fixed parts and never changes: the
// program is deterministic, performs no I/O besides the single output
// write, and reads nothing from the network, the environment, or the
// repository (the output path may be overridden with ENTRY_OUTPUT for
// local runs only).
//
// Gate (from the kit): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. This program checks that itself, plus
// the one-sentence shape, and exits non-zero if the sentence ever fails,
// so a broken sentence can never be submitted silently.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry sentence, built from fixed parts so no word can drift.
// 153 characters, one sentence, no word coined after 1800.
const PARTS = [
  "Imagine every voice on earth joined in one great choir,",
  "so a song whispered in London is heard in the same breath",
  "in Boston and Bombay by all who listen.",
];

const SENTENCE = PARTS.join(" ");

// Gate: 1-200 characters, not only white space, exactly one sentence
// (a single terminal full stop, no other sentence-ending punctuation).
function assertGate(text) {
  const count = [...text].length;
  if (count < 1 || count > 200) {
    throw new Error(`gate failed: ${count} characters, need 1-200`);
  }
  if (text.trim() === "") {
    throw new Error("gate failed: text is only white space");
  }
  const inner = text.slice(0, -1);
  if (!text.endsWith(".") || /[.!?]/.test(inner)) {
    throw new Error("gate failed: text must be exactly one sentence");
  }
  return count;
}

function outputPath() {
  return process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
}

function run() {
  const count = assertGate(SENTENCE);
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, SENTENCE, "utf8");
  console.log(`wrote ${count} characters to ${path}`);
}

run();
