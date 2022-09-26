const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\/assets\/organizations\/.+\.(png|jp(e*)g)$/,
        use: [
          "file-loader",
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 100,
            },
          },
          {
            loader: "webpack-image-resize-loader",
            options: {
              height: 40,
            },
          },
        ],
      },
      {
        test: /\/assets\/content\/.+\.(png|jp(e*)g)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                enabled: false,
              },
              svgo: {
                enabled: false,
              },
              gifsicle: {
                enabled: false,
              },
              webp: {
                preset: "picture",
              },
            },
          },
        ],
      },
      {
        test: /\/assets\/me\.jpg$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                enabled: false,
              },
              svgo: {
                enabled: false,
              },
              gifsicle: {
                enabled: false,
              },
              webp: {
                crop: {
                  x: 0,
                  y: 0,
                  width: 2912,
                  height: 2912,
                },
                resize: {
                  width: 300,
                  height: 300,
                },
                preset: "photo",
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              dimensions: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: "assets/favicon.png",
      favicons: { background: "#000000", theme_color: "#22b391" },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: "gh-pages", to: "." }],
    }),
  ],
};
