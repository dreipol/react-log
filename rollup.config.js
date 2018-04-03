import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.next.js',
    name: 'ReactLog',
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        resolve({
            jsnext: true,
        }),
    ],
    external: ['react'],
    output: [
        {
            exports: 'named',
            name: 'ReactLogger',
            file: 'dist/umd.react-log.js',
            format: 'umd',
            globals: {
                react: 'React',
            },
        },
        {
            exports: 'named',
            name: 'ReactLogger',
            file: 'dist/cjs.react-log.js',
            format: 'cjs',
        },
    ],
};
