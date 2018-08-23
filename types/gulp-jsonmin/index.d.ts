// Type definitions for gulp-jsonmin 1.1
// Project: https://github.com/englercj/gulp-jsonmin
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

declare function GulpJsonmin(options?: GulpJsonmin.Options): Transform;

declare namespace GulpJsonmin {
    interface Options {
        verbose?: boolean;
    }
}

export = GulpJsonmin;
