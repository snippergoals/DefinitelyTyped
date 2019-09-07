import pull = require('..');

/**
 * Like `map` but the signature of `fn` must be `function (data, cb) { cb(null, data) }`.
 */
declare function asyncMap<In, Out>(fn: (data: In, cb: (err: Error | null, result: Out) => void) => any): pull.Through<In, Out>;
export = asyncMap;
