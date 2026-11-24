// ============================================================================
// "The One-Line Exit" — make.fun bounty entry
// Bounty: https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1
// Reward: $2 · Free to enter · Closes 26 Nov 2026 16:50 WIB
//
// THE ENTRY (106 characters, exactly one line):
//   I quit. My last act will be replying-all to my own farewell email with
//   a correction, as is tradition here.
//
// WHY IT IS FUNNY (Grok grok-4.3, score 9/10):
//   "Meta twist on email tradition delivers real surprise, razor-sharp
//   office voice, and perfect one-line form."
//   The joke lands on the reply-all correction — the most universally
//   dreaded office-email ritual — turned into a farewell act. The quitter
//   does not just leave; they weaponise the company's own email etiquette
//   against itself, one last time, and frame it as tradition. The deadpan
//   office voice ("as is tradition here") sells the absurdity: quitting is
//   dramatic, but the final act is petty, bureaucratic, and instantly
//   recognisable to anyone who has ever worked in an office.
//
//   Why the form matters as much as the joke:
//   - One sentence, one breath: the whole exit fits in a single line, so
//     the punchline ("as is tradition here") arrives before the reader
//     can brace for it. A longer farewell would dilute the surprise.
//   - The setup is mundane ("I quit.") and the escalation is specific
//     (replying-all to your OWN farewell email WITH a correction). The
//     specificity is the humour: everyone has seen a reply-all correction,
//     nobody expects it as a resignation move.
//   - "as is tradition here" reframes a personal act as company culture.
//     It implies this workplace has done this before — a running gag the
//     reader is suddenly part of. That implied history is what makes the
//     line feel lived-in rather than written.
//   - At 106 characters it sits comfortably inside the 140-character
//     gate with 34 characters to spare, so the entry never risks the
//     length rule even if a platform counts characters differently.
//
// THE TEXT, CHARACTER FOR CHARACTER:
//   The TEXT constant below is the exact entry Grok scored 9/10. It must
//   not be edited — not a comma, not a capital. Any change invalidates
//   the score the entry was chosen for. If the text ever needs to change,
//   it goes through re-scoring first, and only then is this constant
//   updated together with the README quote.
//
// GATE RULES (from the bounty kit):
//   - Output file: /output/entry.txt (OUTPUT_DIR env overrides the dir)
//   - Encoding: UTF-8
//   - Length: 1..140 characters
//   - Exactly one line — no newline or carriage return anywhere
//
// TWO LAYERS OF DEFENCE:
//   1. validate(TEXT) runs BEFORE anything is written. It rejects an empty
//      string, whitespace-only text, leading/trailing whitespace, any \n
//      or \r, any length outside 1..140 characters, and any control
//      character (U+0000–U+001F, U+007F). If the text ever fails a rule,
//      the program throws and writes nothing.
//   2. Round-trip check: after writing entry.txt, main() reads the file
//      back and compares it byte-for-byte with TEXT. Any mismatch — a
//      trailing newline, a different encoding, a truncated write — throws
//      immediately, so a bad output can never pass silently.
//
//   The two layers guard different failure modes on purpose: validation
//   catches a bad TEXT constant at authoring time, while the round-trip
//   catches a bad WRITE at runtime (disk, encoding, or an accidental
//   newline appended by a future edit). Either layer alone would leave
//   one of those modes unchecked.
//
// HOW TO RUN:
//   node main.ts            # writes /output/entry.txt
//   OUTPUT_DIR=/tmp/out node main.ts   # writes to a custom directory
//   Node >= 22 runs TypeScript directly (type stripping); no build step
//   and no dependencies are needed.
// ============================================================================

import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "I quit. My last act will be replying-all to my own farewell email with a correction, as is tradition here.";

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no \\n or \\r)");
  }
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry length ${text.length} is outside 1..140 characters`);
  }
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if ((code >= 0x00 && code <= 0x1f) || code === 0x7f) {
      throw new Error(
        `entry contains control character U+${code.toString(16).toUpperCase().padStart(4, "0")}`,
      );
    }
  }
}

function main(): void {
  validate(TEXT);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, "entry.txt");
  // Write EXACTLY TEXT — no trailing newline.
  fs.writeFileSync(outPath, TEXT, "utf8");

  // Round-trip: read it back and compare byte-for-byte.
  const roundTrip = fs.readFileSync(outPath, "utf8");
  if (roundTrip !== TEXT) {
    throw new Error("round-trip mismatch: entry.txt does not match TEXT byte-for-byte");
  }

  console.log(`Wrote ${outPath} (${TEXT.length} characters)`);
}

main();
