import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'index.next.js',
    name: 'ReactLog',
    plugins: [
        resolve({
            jsnext: true,
        }),
    ],
    interop: false,
};
