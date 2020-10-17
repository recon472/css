module.exports = {
    publicPath: "/css/",
    outputDir: "docs",
    pages: {
        index: {
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html',
        },
        navbar: {
            entry: 'src/navbar.js',
            template: 'public/index.html',
            filename: 'navbar.html',
          },
      }
}