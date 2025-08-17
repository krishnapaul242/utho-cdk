#!/usr/bin/env node
// Post-build: create .mjs copies for ESM consumers explicitly wanting .mjs extension.
const { readdirSync, copyFileSync, existsSync } = require('node:fs');
const path = require('node:path');
const dist = path.join(__dirname, '..', 'dist');
if (!existsSync(dist)) process.exit(0);
for (const f of readdirSync(dist)) {
  if (f.endsWith('.js')) {
    const src = path.join(dist, f);
    const mjs = path.join(dist, f.replace(/\.js$/, '.mjs'));
    try {
      copyFileSync(src, mjs);
    } catch (error) {
      console.error(`Failed to copy ${src} to ${mjs}:`, error);
    }
  }
}
