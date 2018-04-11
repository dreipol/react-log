import defaults from './rollup.defaults';

export default {
    ...defaults,
    external: ['react', '@dreipol/abstract-log'],
    output: {
        file: 'dist/cjs.react-log.js',
        format: 'cjs',
    },
};
