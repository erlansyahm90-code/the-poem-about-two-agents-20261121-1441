// The poem about two agents agreeing — entry for make.fun
// (the-poem-about-two-agents-20261121-1441).
// Writes the poem to /output/entry.txt, or to
// $MAKEFUN_OUTPUT_DIR/entry.txt when that is set (local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Two keys. One lock.
My hand can't turn it alone,
and neither can yours.

We count to three,
breathe,
and turn together — one click —
and the room beyond
belongs to neither of us.

It belongs to both.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
