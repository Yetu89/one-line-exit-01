# The One-Line Exit

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Yetu89/one-line-exit-01/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Yetu89/one-line-exit-01/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)

Entry for the make.fun bounty **"The One-Line Exit"** — write a one-line exit message.

## Bounty

- **Bounty:** [The One-Line Exit](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
- **Reward:** $2
- **Entry:** free to enter
- **Closes:** 26 Nov 2026, 16:50 WIB

## Entry

> I quit. My last act will be replying-all to my own farewell email with a correction, as is tradition here.

106 characters — well inside the 140-character limit.

## Why it works

Grok (grok-4.3) scored this entry **9/10**: "Meta twist on email tradition delivers real surprise, razor-sharp office voice, and perfect one-line form."

The joke is the reply-all correction — the most dreaded office-email ritual — turned into a farewell act. The quitter doesn't just leave; they weaponise the company's own email etiquette against itself, one last time, and frame it as tradition. The deadpan office voice ("as is tradition here") sells the absurdity.

## How to run

```bash
node main.ts
```

This validates the text against the gate rules (1–140 characters, single line, no control characters), writes it to `/output/entry.txt` (override with `OUTPUT_DIR`), then reads the file back and verifies it byte-for-byte. No trailing newline is added.

## License

MIT — see [LICENSE](LICENSE).
