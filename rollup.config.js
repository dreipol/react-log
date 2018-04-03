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
            name: 'ReactLogger',
            file: 'react-log.js',
            format: 'umd',
        },
    ],
};
