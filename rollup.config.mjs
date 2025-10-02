import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // Exclure les peer dependencies du bundle
    peerDepsExternal(),
    
    // Résoudre les modules node_modules
    resolve({
      browser: true,
    }),
    
    // Convertir CommonJS en ES modules
    commonjs(),
    
    // Compiler TypeScript
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    
    // Traiter les fichiers CSS
    postcss({
      extract: "style.css",
      inject: false,
      minimize: true,
      sourceMap: true,
    }),
  ],
  external: ['react', 'react-dom'],
};