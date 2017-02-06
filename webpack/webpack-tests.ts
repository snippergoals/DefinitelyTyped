
import * as webpack from 'webpack';

let configuration: webpack.Configuration;
let rule: webpack.Rule;
let plugin: webpack.Plugin;
declare const __dirname: string;

//
// https://webpack.github.io/docs/using-loaders.html
//

configuration = {
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            // => "jade" loader is used for ".jade" files

            { test: /\.css$/, loader: "style!css" },
            // => "style" and "css" loader is used for ".css" files
            // Alternative syntax:
            { test: /\.css$/, loaders: ["style", "css"] },
        ]
    }
};

rule = { test: /\.png$/, loader: "url-loader?mimetype=image/png" };

rule = {
    test: /\.png$/,
    loader: "url-loader",
    query: { mimetype: "image/png" }
};

//
// https://webpack.github.io/docs/using-plugins.html
//

configuration = {
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"])
    ]
};

//
// http://webpack.github.io/docs/tutorials/getting-started/
//

configuration = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

//
// https://webpack.github.io/docs/code-splitting.html
//

configuration = {
    entry: {
        app: "./app.js",
        vendor: ["jquery", "underscore"],
    },
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};

configuration =  {
    entry: { a: "./a", b: "./b" },
    output: { filename: "[name].js" },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
};

//
// https://webpack.github.io/docs/stylesheets.html
//

configuration = {
    // ...
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

//
// https://webpack.github.io/docs/optimization.html
//

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    },
    output: {
        filename: "[name].entry.chunk.js"
    }
};

let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    },
    output: {
        filename: "[name].entry.chunk.js"
    },
    plugins: [
        new CommonsChunkPlugin("commons.chunk.js")
    ]
};

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
    ]
};
// <script>s required:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        commons: "./entry-for-the-commons-chunk"
    },
    plugins: [
        new CommonsChunkPlugin("commons", "commons.js")
    ]
};

//
// https://webpack.github.io/docs/long-term-caching.html
//

configuration = {
    output: {
        path: path.join(__dirname, "assets", "[hash]"),
        publicPath: "assets/[hash]/",
        filename: "output.[hash].bundle.js",
        chunkFilename: "[id].[hash].bundle.js"
    }
};

configuration = { output: { chunkFilename: "[chunkhash].bundle.js" } };

//
// https://webpack.github.io/docs/configuration.html
//

configuration = {
    entry: [
        "./entry1",
        "./entry2"
    ]
};

configuration = {
    devtool: "inline-source-map"
};

configuration = {
    devtool: false
};

configuration = {
    resolve: {
        root: __dirname
    }
};

rule = {
    test: /\.jsx$/,
    include: [
        path.resolve(__dirname, "app/src"),
        path.resolve(__dirname, "app/test")
    ],
    exclude: [
        path.resolve(__dirname, "node_modules")
    ],
    loader: "babel-loader"
};

declare var require: any;
declare var path: any;
configuration = {
    plugins: [
        /** @todo `this` should be typed as webpack.compiler.Compiler (which should be webpack.Compiler), not webpack.Webpack */
        function(this: any) {
            this.plugin("done", function(stats: any) {
                require("fs").writeFileSync(
                    path.join(__dirname, "...", "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        }
    ]
};

//
// https://webpack.github.io/docs/list-of-plugins.html
//

let resourceRegExp: any;
let newResource: any;
let contextRegExp: any;
let newContentResource: any;
let newContentRecursive: any;
let newContentRegExp: any;
let requestRegExp: any;
let options: any;
let definitions: any;
let paths: any;
let preferEntry = true;
let context: any;
let request: any;
let types: any;
let banner: any;
let plugins: webpack.Plugin[] = [];

plugin = new webpack.NormalModuleReplacementPlugin(resourceRegExp, newResource);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource,
    newContentRecursive,
    newContentRegExp);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource,
    newContentRecursive);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource);
plugin = new webpack.ContextReplacementPlugin(resourceRegExp);
plugin = new webpack.IgnorePlugin(requestRegExp);
plugin = new webpack.IgnorePlugin(requestRegExp, contextRegExp);

plugin = new webpack.PrefetchPlugin(context, request);
plugin = new webpack.PrefetchPlugin(request);
plugin = new webpack.ResolverPlugin(plugins, types);
plugin = new webpack.ResolverPlugin(plugins);
plugin = new webpack.ResolverPlugin([
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
], ["normal", "loader"]);
plugin = new webpack.ResolverPlugin([
    new webpack.ResolverPlugin.FileAppendPlugin(['/dist/compiled-moduled.js'])
]);
plugin = new webpack.BannerPlugin(banner, options);
plugin = new webpack.optimize.DedupePlugin();
plugin = new webpack.optimize.LimitChunkCountPlugin(options);
plugin = new webpack.optimize.MinChunkSizePlugin(options);
plugin = new webpack.optimize.OccurrenceOrderPlugin(preferEntry);
plugin = new webpack.optimize.OccurrenceOrderPlugin(preferEntry);
plugin = new webpack.optimize.UglifyJsPlugin(options);
plugin = new webpack.optimize.UglifyJsPlugin();
plugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
plugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    comments: true,
    beautify: true,
    test: 'foo',
    exclude: /node_modules/,
    include: 'test'
});
plugin = new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$super', '$', 'exports', 'require']
    }
});
plugin = new webpack.optimize.UglifyJsPlugin({
    comments: function(astNode: any, comment: any) {
        return false;
    }
});
plugin = new webpack.optimize.CommonsChunkPlugin(options);
plugin = new CommonsChunkPlugin({
    name: "commons",
    // (the commons chunk name)

    filename: "commons.js",
    // (the filename of the commons chunk)

    // minChunks: 3,
    // (Modules must be shared between 3 entries)

    // chunks: ["pageA", "pageB"],
    // (Only use these entries)
});
plugin = new CommonsChunkPlugin({
    // names: ["app", "subPageA"]
    // (choose the chunks, or omit for all chunks)

    children: true,
    // (select all children of chosen chunks)

    // minChunks: 3,
    // (3 children must share the module before it's moved)
});
plugin = new CommonsChunkPlugin({
    // names: ["app", "subPageA"]
    // (choose the chunks, or omit for all chunks)

    children: true,
    // (use all children of the chunk)

    async: true,
    // (create an async commons chunk)

    // minChunks: 3,
    // (3 children must share the module before it's separated)
});
plugin = new webpack.optimize.AggressiveMergingPlugin(options);
plugin = new webpack.DefinePlugin(definitions);
plugin = new webpack.DefinePlugin({
    VERSION: JSON.stringify("5fa3b9"),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: "1+1",
    "typeof window": JSON.stringify("object")
});
plugin = new webpack.ProvidePlugin(definitions);
plugin = new webpack.ProvidePlugin({
    $: "jquery"
});
plugin = new webpack.SourceMapDevToolPlugin({
    //// asset matching
    test: /\.js$/,
    //include: Condition | Condition[],
    exclude: [
        /node_modules/
    ],
    //
    //// file and reference
    filename: null, // | string
    //append: false | string,
    //// sources naming
    //moduleFilenameTemplate: string,
    //fallbackModuleFilenameTemplate: string,
    //
    //// quality/performance
    module: true,
    columns: true,
    lineToLine: false // | { test?: Condition | Condition[], ... }
});
plugin = new webpack.EvalSourceMapDevToolPlugin(false);
plugin = new webpack.HotModuleReplacementPlugin();
plugin = new webpack.ExtendedAPIPlugin();
plugin = new webpack.NoErrorsPlugin();
plugin = new webpack.NoEmitOnErrorsPlugin();
plugin = new webpack.WatchIgnorePlugin(paths);
plugin = new webpack.LoaderOptionsPlugin({
    debug: true
});

//
// http://webpack.github.io/docs/node.js-api.html
//

// returns a Compiler instance
webpack({
    // configuration
}, function(err, stats) {
    // ...
});

// returns a Compiler instance
var compiler = webpack({
    // configuration
});

compiler.run(function(err, stats) {
    // ...
});
// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    // ...
});
// or
compiler.watch({ // watch options:
    ignored: 'foo/**/*'
}, function(err, stats) {
    // ...
});
// or
compiler.watch({ // watch options:
    ignored: /node_modules/
}, function(err, stats) {
    // ...
});

declare function handleFatalError(err: Error): void;
declare function handleSoftErrors(errs: string[]): void;
declare function handleWarnings(errs: string[]): void;
declare function successfullyCompiled(): void;

webpack({
    // configuration
}, function(err, stats) {
    if(err)
        return handleFatalError(err);
    var jsonStats = stats.toJson();
    var jsonStatsWithAllOptions = stats.toJson({
        assets: true,
        assetsSort: "field",
        cached: true,
        children: true,
        chunks: true,
        chunkModules: true,
        chunkOrigins: true,
        chunksSort: "field",
        context: "../src/",
        errors: true,
        errorDetails: true,
        hash: true,
        modules: true,
        modulesSort: "field",
        publicPath: true,
        reasons: true,
        source: true,
        timings: true,
        version: true,
        warnings: true
    });
    if(jsonStats.errors.length > 0)
        return handleSoftErrors(jsonStats.errors);
    if(jsonStats.warnings.length > 0)
        handleWarnings(jsonStats.warnings);
    successfullyCompiled();
});

declare var fs: any;

compiler = webpack({ });
compiler.outputFileSystem = fs;
compiler.run(function(err, stats) {
    // ...
    var fileContent = fs.readFileSync("...");
});

//
// https://github.com/webpack/webpack/blob/master/test/configCases/rule-set/simple/webpack.config.js
//

rule = {
    test: {
        or: [
            require.resolve("./a"),
            require.resolve("./c"),
        ]
    },
    loader: "./loader",
    options: "third"
}

configuration = {
    module: {
        rules: [
            { oneOf: [
                {
                    test: {
                        and: [
                            /a.\.js$/,
                            /b\.js$/
                        ]
                    },
                    loader: "./loader?first"
                },
                {
                    test: [
                        require.resolve("./a"),
                        require.resolve("./c"),
                    ],
                    issuer: require.resolve("./b"),
                    use: [
                        "./loader?second-1",
                        {
                            loader: "./loader",
                            options: "second-2"
                        },
                        {
                            loader: "./loader",
                            options: {
                                get: function() { return "second-3"; }
                            }
                        }
                    ]
                },
                {
                    test: {
                        or: [
                            require.resolve("./a"),
                            require.resolve("./c"),
                        ]
                    },
                    loader: "./loader",
                    options: "third"
                }
            ]}
        ]
    }
}

const resolve: webpack.Resolve = {
    cachePredicate: 'boo' // why does this test _not_ fail!?
}

const performance: webpack.PerformanceOptions = {
    hints: 'error',
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,
    assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
    },
};

configuration = {
    performance,
};

function loader(this: webpack.loader.LoaderContext, source: string, sourcemap: string): void {
    this.cacheable();

    this.async();

    this.addDependency('');

    this.resolve('context', 'request', ( err: Error, result: string) => {});

    this.emitError('wraning');

    this.callback(null, source);
}

module loader {
    export const raw: boolean = true;
    export const pitch = (remainingRequest: string, precedingRequest: string, data: any) => {};
}
const loaderRef: webpack.loader.Loader = loader;
console.log(loaderRef.raw === true);
