import defaults from './rollup.defaults';

export default {
    ...defaults,
    external: ['react'],
    output: {
        exports: 'named',
        name: 'ReactLogger',
        file: 'dist/umd.react-log.js',
        format: 'umd',
        globals: {
            react: 'React',
        },
    },
};
