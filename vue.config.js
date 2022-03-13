module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Пивнев Игорь Олегович",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  publicPath: "/portfolio/",
  productionSourceMap: false,
}