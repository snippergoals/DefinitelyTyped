// Type definitions for gulp-postcss 8.0
// Project: https://www.npmjs.com/package/gulp-postcss
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>
import Vinyl = require('vinyl');

declare function GulpPostCss(plugins?: string[], options?: GulpPostCss.Options): NodeJS.ReadWriteStream;
declare function GulpPostCss(callback?: (file: Vinyl) => { plugins?: string[], options?: GulpPostCss.Options }):
    NodeJS.ReadWriteStream;

declare namespace GulpPostCss {
    interface Options {
        parser?: any;
    }
}

export = GulpPostCss;
// ddd
