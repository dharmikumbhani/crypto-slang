module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({ 
        test: /\.(gif|png|jpe?g|svg|xml|mp3)?$/i,
        use: "file-loader"
      })
      return config
    },
}
// https://stackoverflow.com/questions/38252453/serving-mp3-files-using-the-webpack-file-loader
// https://nextjs.org/docs/api-reference/next.config.js/introduction