import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'index.next.js',
    name: 'ReactLog',
    plugins: [
        resolve({
            jsnext: true,
            ignore: ['react'],
        }),
        // ignore the coverage of riot external modules like riot-tmpl
        {
            transform(code) {
                return {
                    code: code.replace(/(export (const presets|function createLogger))/g, function(m) {
                        return ['/* istanbul ignore next */', m].join('\n');
                    }),
                };
            },
        },
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
