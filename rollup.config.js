import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
    input: ["src/main-a.js", "src/main-b.js"],
    output: [
        // ES module version, for modern browsers
        {
            dir: "public/module",
            format: "es",
            sourcemap: true
        },
        // SystemJS version, for older browsers
        {
            dir: "public/nomodule",
            format: "system",
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        babel({
            presets: ['@babel/preset-env'],
            "targets": {
                "chrome": "40",
            }
        }),
    ],
};
