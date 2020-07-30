let path = require("path")

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    publicPath: "./",
    assetsDir: "static",
    outputDir: 'dist',
    /* devServer: {
        proxy: {
            "/api": {
                target: "https://wap.woapi.net/", // 配置目标的地址
                ws: true,
                secure: false,
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    "^/api": "/" // rewrite path
                }
            }
        }, // 配置多个代理
        before(app) {
            app.get("/experiencejson", (req, res) => {
                res.json(experience);
            });
        }
    }, */
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require("postcss-px2rem")({
                    remUnit: 37.5, //设计稿的 十分之一
                    "exclude": /node_modules/i
                })]
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    }
}