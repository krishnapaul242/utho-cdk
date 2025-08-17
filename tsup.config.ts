import { defineConfig } from 'tsup';

// Temporary simplified config to diagnose non-zero exit; only build library.
export default defineConfig({
  entry: { index: 'src/index.ts', cli: 'src/cli.ts' },
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  dts: false, // handled by tsc separately
  minify: false,
  outDir: 'dist',
  platform: 'neutral',
  target: 'es2022',
  external: ['axios'],
  skipNodeModulesBundle: true,
  define: { 'process.env.NODE_ENV': '"production"' }
});
