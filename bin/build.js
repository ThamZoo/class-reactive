#!/usr/bin/env node

import chalk from 'chalk';
import { build } from 'esbuild';
import rimraf from 'rimraf';
import { dtsPlugin } from 'esbuild-plugin-d.ts';
import fs from 'fs';

rimraf.sync('./dist');

build({
  entryPoints: ['./src/reactive/index.ts'],
  outdir: './dist/cjs',
  bundle: true,
  minify: true,
  target: 'es2018',
  loader: { '.ts': 'ts' },
  color: true,
  external: ['react', 'axios'],
  platform: 'browser',
  format: 'cjs',
  sourcemap: false,
  plugins: [
    dtsPlugin({
      outDir: './dist',
    }),
  ],
})
  .then(() => {
    console.log(chalk.green('Build Completed'));

    fs.writeFile('./dist/package.json', '{"type": "commonjs"}', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Package was saved!');
    });
  })
  .catch(() => process.exit(1));
