#!/usr/bin/env node --experimental-json-modules --no-warnings

import { serve } from 'esbuild';
import pkg from '../package.json' assert { type: 'json' }; // -- experiment json module

serve(
  {
    port: 3000,
    servedir: './example',
  },
  {
    entryPoints: ['./example/reactive.ts'],
    outdir: './example/dist',
    minify: false,
    bundle: true,
    target: 'es2015',
    loader: { '.ts': 'ts' },
    color: true,
    color: true,
    define: { __VERSION__: JSON.stringify(pkg.version) },
    sourcemap: true,
  },
).then((result) => {
  console.log('Refresh browser for changes ...');
});
