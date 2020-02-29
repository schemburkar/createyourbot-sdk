module.exports = env => {

    const production = env && env.production;
    const outName = production && '[name].js' || '[name].dev.js';
    return [{
        entry: { 'core': './src/client.ts' },
        output: {
            filename: '[name].js',
            path: __dirname + '/dist',
            libraryTarget: 'umd',
            library: 'createyourbot-core',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
    }];
};