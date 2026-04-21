#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: preflight-uxe-senior.mjs <plan-or-output-file>');
  process.exit(2);
}

const p = path.resolve(process.cwd(), inputPath);
const text = fs.readFileSync(p, 'utf8');

function hit(needle) {
  return text.toLowerCase().includes(needle.toLowerCase());
}

const checks = [
  {
    name: 'No real secrets (best-effort)',
    ok: !hit('apikey') && !hit('api_key') && !hit('token') && !hit('secret')
  },
  {
    name: 'Mentions ARIA/role and keyboard support intent',
    ok: hit('aria') || hit('role=') || hit('aria-')
  },
  {
    name: 'Token-based theming (no hardcoded hex color best-effort)',
    ok: !text.match(/#[0-9a-fA-F]{3,8}/) // hex literals
  },
  {
    name: 'A11y verification (axe/aria/keyboard checks intent)',
    ok: hit('axe') || hit('a11y') || hit('accessibility test') || hit('keyboard')
  },
  {
    name: 'Storybook intent when stories are requested (best-effort)',
    ok: !hit('storybook') || hit('story')
  }
];

const failed = checks.filter(c => !c.ok);

if (failed.length) {
  console.error('Preflight failed:');
  for (const f of failed) console.error('- ' + f.name);
  process.exit(1);
}

console.log('Preflight passed.');