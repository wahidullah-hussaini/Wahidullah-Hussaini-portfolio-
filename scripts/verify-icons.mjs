// Checks that every icon imported from "react-icons/..." in src/ really exists
// in the version of react-icons installed on YOUR computer.
//
// Run it after `npm install`:   npm run verify:icons
// If it prints MISSING, swap that icon for a valid one (or tell me the name).

import { readdirSync, readFileSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
// fileURLToPath handles Windows drive letters and folders with spaces correctly.
const root = fileURLToPath(new URL("../src", import.meta.url));

function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? listFiles(full) : [full];
  });
}

const importPattern = /import\s*\{([^}]+)\}\s*from\s*["'](react-icons\/[a-z0-9]+)["']/g;
const wanted = new Map(); // "react-icons/lu" -> Map(iconName -> [files])

for (const file of listFiles(root).filter((f) => /\.(jsx?|tsx?)$/.test(f))) {
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(importPattern)) {
    const [, names, pack] = match;
    if (!wanted.has(pack)) wanted.set(pack, new Map());
    for (const raw of names.split(",")) {
      const name = raw.trim().split(/\s+as\s+/)[0];
      if (!name) continue;
      const files = wanted.get(pack).get(name) ?? [];
      files.push(relative(root, file));
      wanted.get(pack).set(name, files);
    }
  }
}

let missing = 0;
let total = 0;

for (const [pack, icons] of wanted) {
  let exportsObject;
  try {
    exportsObject = require(pack);
  } catch {
    console.error(`Cannot load "${pack}". Did you run npm install?`);
    process.exit(1);
  }
  for (const [name, files] of icons) {
    total += 1;
    if (name in exportsObject) {
      console.log(`OK       ${pack}  ${name}`);
    } else {
      missing += 1;
      console.log(`MISSING  ${pack}  ${name}   (used in: ${files.join(", ")})`);
    }
  }
}

console.log(`\n${total - missing} of ${total} icon imports are valid.`);
process.exit(missing > 0 ? 1 : 0);
