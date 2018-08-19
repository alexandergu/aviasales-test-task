module.exports = {
    mode: "production",

    entry: "./src/index.tsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.css$/, loader: ["style-loader", "css-loader"] }
        ]
    },

    devServer: {
        contentBase: './dist'
    }
};
