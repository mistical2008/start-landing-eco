import { defineConfig } from 'vite';
// import critical from 'rollup-plugin-critical';
// import { ViteAliases } from 'vite-aliases';
import ViteCompression from 'vite-plugin-compression';
import Legacy from '@vitejs/plugin-legacy';
import ViteFonts from 'vite-plugin-fonts';
import { fontsConfig } from './config/fonts.js';
// import { inputDir, outputDir } from './config/paths';

// const isDev = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        plugins: [
            // ViteFonts({}),
            ViteFonts(fontsConfig.webfonts.download),
            // critical({
            //     criticalUrl: './_site/',
            //     criticalBase: './',
            //     criticalPages: [{ uri: '', template: 'index' }],
            // }),
            // ViteAliases({ dir: '.' }),
            Legacy(),
            ViteCompression(), // gzip compression
            ViteCompression({ algorithm: 'brotliCompress' }), // brotli compression
        ],
        build: {
            // outDir: outputDir,
            sourcemap: true,
            // manifest: true,
            // rollupOptions: {
            //     input: [`${inputDir}/scripts/index.js`],
            //     output: { file: 'scripts/index.js', format: 'esm' },
            // },
        },
    };
});
