module.exports = {
    modify: (config, { target }) => {
        if (target === 'node') {
            config.output.publicPath = `${process.env.PUBLIC_PATH}`
        }
        return config
    },
    options: {
        verbose: true,
    },
    modifyWebpackConfig({
                            env,
                            webpackConfig, // the created webpack config
                            webpackObject, // the imported webpack node module
                            options: {
                                razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
                                webpackOptions, // the modified options that will be used to configure webpack/ webpack loaders and plugins
                            },
                            paths, // the modified paths that will be used by Razzle.
    }) {
        if ('server' in webpackConfig.entry){
            webpackConfig.entry.function = './src/function.js'
        }
        return webpackConfig;
    },
}
