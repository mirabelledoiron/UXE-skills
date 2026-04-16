#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: validate-uxe-senior-token-usage.mjs <directory>');
  process.exit(2);
}

const root = path.resolve(process.cwd(), dir);

function walk(d) {
  const entries = fs.readdirSync(d, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const fp = path.join(d, e.name);
    if (e.isDirectory()) files = files.concat(walk(fp));
    else files.push(fp);
  }
  return files;
}

const files = walk(root).filter(f => /\.(ts|tsx|js|jsx|css|scss|json|md)$/.test(f));

let hexHits = 0;
let tokenHits = 0;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  if (text.match(/#[0-9a-fA-F]{3,8}/)) hexHits++;
  if (text.match(/\b(token|tokens|--[a-zA-Z0-9_-]+|theme\.|colors\.)\b/)) tokenHits++;
}

if (hexHits > 0) {
  console.error(`Found ${hexHits} file(s) containing hex color literals. Token-only theming required.`);
  process.exit(1);
}

if (tokenHits === 0) {
  console.warn('No obvious token references detected (heuristic). Ensure styling uses design tokens via CSS variables/Tailwind config.');
}

console.log('Token usage validation passed.');