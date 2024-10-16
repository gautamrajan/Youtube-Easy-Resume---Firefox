module.exports = {
    mode: 'production',
    entry: {
        popup: './src/popup.jsx',
        content: './src/content.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
