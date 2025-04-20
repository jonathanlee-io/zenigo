const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutputDir = './widget/dist';

module.exports = (env) => {
    console.log(env);

    return [{
        entry: (env.production) ? './widget/main.js' : './widget/main-dev.js',
        output: {
            filename: 'zenigo-widget.js',
            path: path.resolve(bundleOutputDir),
        },
        devServer: {
            contentBase: bundleOutputDir
        },
        plugins: [new webpack.SourceMapDevToolPlugin(), new copyWebpackPlugin([{ from: './widget/demo/' }])],
        module: {
            rules: [
                { test: /\.html$/i, use: 'html-loader' },
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                {
                    test: /\.js$/i, use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/env', {
                                'targets': {
                                    'browsers': ['chrome 74']
                                }
                            }]]
                        }
                    }
                }
            ]
        }
    }];
};
