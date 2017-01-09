// Type definitions for sha1 v1.1.1
// Project: https://github.com/pvorb/node-sha1
// Definitions adapted from md5 definitions by: Bill Sourour <https://github.com/arcdev1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * js function for hashing messages with SHA1
 * 
 * @param {(string | Buffer)} message - a string or buffer to hash
 * @returns {string} the resultant SHA1 hash of the given message
 */
declare function main(message: string | Buffer, options?: Sha1Options): string | Uint8Array;
export = main;

interface Sha1Options {
  asBytes?: boolean;
  asString?: boolean;
}
