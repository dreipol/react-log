import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'index.next.js',
    name: 'ReactLog',
    plugins: [
        resolve({
            jsnext: true,
            ignore: ['react'],
        }),
    ],
    interop: false,
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
