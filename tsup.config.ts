import { defineConfig } from 'tsup';

export default defineConfig([
  // Library bundle (browser + node usage)
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs', 'iife'],
    globalName: 'UthoCdk',
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    minify: false,
    outDir: 'dist',
    platform: 'neutral',
    target: 'es2022',
    define: { 'process.env.NODE_ENV': '"production"' }
  },
  // CLI bundle (node only)
  {
    entry: { cli: 'src/cli.ts' },
    format: ['cjs'],
    sourcemap: true,
    dts: false,
    clean: false,
    minify: false,
    outDir: 'dist',
    platform: 'node',
    target: 'es2022',
    esbuildOptions(options) {
      options.banner = {
        js: '#!/usr/bin/env node' + '\n' + (options.banner?.js || '')
      };
    }
  }
]);
