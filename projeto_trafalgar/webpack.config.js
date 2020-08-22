//Configuração webpack

//incluindo plugins com metodo es6
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    //entry: entrada arquivo no qual vai estar o script js
    //output: saida com nome e destino no qual vai ser criado o script minificado
    entry: {
        app: './src/js/main.js',
    },
    output: {
        filename: 'app.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    //instanciando plugins usados para minificar ou manipular o html e o css
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'app.[chunkhash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.SourceMapDevToolPlugin({})
    ],
    //Modulos com regras para conversão de arquivos de estulização especificos para css
    module: {
        rules: [
            {   //regex com quais tipo de arquivos a ser convertido
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {   //regex com regra para converter css in line do js
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {   //regex com regra para converter arquivo js(es6) em js(es5)
                //para navegadores antigos com utilização do plugin babel
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    devtool: 'source-map'
}
