// Type definitions for watch
// Project: https://github.com/mikeal/watch
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/watch.d.ts

/// <reference types="node" />


import fs = require("fs");
import events = require("events");

export interface Monitor extends events.EventEmitter {
    // event: created
    // event: removed
    // event: changed

    // export function onCreated(callback, function(f, stat: fs.Stats) { });
    // export function onChanged(callback, function(f, curr: fs.Stats, prev: fs.Stats) { });
    // export function onRemoved(callback, function(f, stat: fs.Stats) { });
}

export interface Options {
    persistent?: boolean;
    ignoreDotFiles?: boolean;
    filter?: any;
    interval?: number;
}

export declare function watchTree(root: string, callback: (f: any, curr: fs.Stats, prev: fs.Stats) => void): void;
export declare function watchTree(root: string, options: Options, callback: (f: any, curr: fs.Stats, prev: fs.Stats) => void): void;
export declare function unwatchTree(root: string): void;
export declare function createMonitor(root: string, callback: (monitor: Monitor) => void): void;
export declare function createMonitor(root: string, options: Options, callback: (monitor: Monitor) => void): void;
