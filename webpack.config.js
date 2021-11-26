var Path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Webpack konfiguracia
module.exports = (env, options) => {
    return {
        entry : { app : './resources/app.js' },
        devtool : false,
        mode : 'development',
        module : {
            rules : [
                {
                    test : /\.js$/,
                    exclude : /node_modules/,
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env'],
                    },
                },
                {
                    test : /\.css$/,
                    use : [
                        { loader : MiniCssExtractPlugin.loader },
                        { loader : 'css-loader', options : { url : false, sourceMap : false } },
                        { loader : 'postcss-loader', options : { sourceMap : false } },
                    ],
                },
            ],
        },
        output : {
            path : Path.resolve(__dirname, 'public'),
            filename : '[name].js',
        },
        plugins : [
            new MiniCssExtractPlugin({ filename : '[name].css' }),
        ],
        stats : {
            assets : false,
            modules : false,
            entrypoints : false,
            hash : false,
            version : false,
            builtAt : false,
            colors : true,
        },
    };
};
