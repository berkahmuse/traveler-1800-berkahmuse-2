# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/berkahmuse/traveler-1800-berkahmuse-2/rank.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/berkahmuse/traveler-1800-berkahmuse-2/reward.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

Entry for the [make.fun bounty "One Sentence for a Traveler from 1800"](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb): one sentence, at most 200 characters, explaining the modern internet to a time traveler who has just stepped out of the year 1800.

## The sentence

> Imagine every voice on earth joined in one great choir, so a song whispered in London is heard in the same breath in Boston and Bombay by all who listen.

153 characters, one sentence, no word coined after 1800. One image carries it: every voice on earth joined in one great choir. This is a complete rebuild of the v1 entry — a wholly different image, so it does not compete with the sibling @berkahmuse entry.

## How it runs

`main.ts` (Node 22+) writes the sentence to `/output/entry.txt`:

```sh
node main.ts
```

The output path can be overridden for local runs with `ENTRY_OUTPUT`. The program is deterministic — no network, no environment reads besides the output path, no randomness — and it checks the competition gate itself (UTF-8, 1–200 characters, not only white space, exactly one sentence) before writing.

## Self-check

Two local runs produce byte-identical output:

- sha256: `5d91ae0c4d16071a2f3f621fc7ef031317a6ef09a4c9034ad14691fe96c449fb`
- characters: 153

## License

MIT — see [LICENSE](LICENSE).
