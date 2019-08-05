// Type definitions for compression 1.0
// Project: https://github.com/expressjs/compression
// Definitions by: Santi Albo <https://github.com/santialbo>
//                 Rob van der Burgt <https://github.com/rburgt>
//                 Neil Bryson Cargamento <https://github.com/neilbryson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as express from 'express';

/**
 * Returns the compression middleware using the given `options`. The middleware will attempt to compress response bodies
 * for all request that traverse through the middleware, based on the given `options`.
 *
 * This middleware will never compress responses that include a `Cache-Control` header with the `no-transform` directive,
 * as compressing will transform the body.
 *
 * @see {@link https://github.com/expressjs/compression#compressionoptions|`compression([options]) documentation`}
 */
declare function e(options?: e.CompressionOptions): express.RequestHandler;

declare namespace e {
    /**
     * The default `filter` function. This is used to construct a custom filter function that is an extension of the default function.
     *
     * ```js
     * var compression = require('compression')
     * var express = require('express')
     *
     * var app = express()
     * app.use(compression({ filter: shouldCompress }))
     *
     * function shouldCompress (req, res) {
     *   if (req.headers['x-no-compression']) {
     *     // don't compress responses with this request header
     *     return false
     *   }
     *
     *   // fallback to standard filter function
     *   return compression.filter(req, res)
     * }
     * ```
     *
     * @see {@link https://github.com/expressjs/compression#filter-1|`.filter` documentation}
     */
    export function filter(req: express.Request, res: express.Response): boolean;

    interface CompressionFilter {
        (req: express.Request, res: express.Response): boolean;
    }

    interface CompressionOptions {
        /**
         * @default zlib.Z_DEFAULT_CHUNK or 16384
         * @see {@link http://nodejs.org/api/zlib.html#zlib_memory_usage_tuning| Node.js documentation}
         * @see {@link https://github.com/expressjs/compression#chunksize|chunkSize documentation}
         */
        chunkSize?: number;

        /**
         * The level of zlib compression to apply to responses. A higher level will result in better compression, but
         * will take longer to complete. A lower level will result in less compression, but will be much faster.
         *
         * This is an integer in the range of `0` (no compression) to `9` (maximum compression). The special value `-1`
         * can be used to mean the "default compression level", which is a default compromise between speed and
         * compression (currently equivalent to level 6).
         *
         * - `-1` Default compression level (also `zlib.Z_DEFAULT_COMPRESSION`).
         * - `0` No compression (also `zlib.Z_NO_COMPRESSION`).
         * - `1` Fastest compression (also `zlib.Z_BEST_SPEED`).
         * - `2`
         * - `3`
         * - `4`
         * - `5`
         * - `6` (currently what `zlib.Z_DEFAULT_COMPRESSION` points to).
         * - `7`
         * - `8`
         * - `9` Best compression (also `zlib.Z_BEST_COMPRESSION`).
         *
         * **Note** in the list above, `zlib` is from `zlib = require('zlib')`.
         *
         * @default zlib.DEFAULT_COMPRESSION or -1
         * @see {@link https://github.com/expressjs/compression#level|`level` documentation}
         */
        level?: number;

        /**
         * This specifies how much memory should be allocated for the internal compression state and is an integer in
         * the range of `1` (minimum level) and `9` (maximum level).
         *
         * @default zlib.DEFAULT_MEMLEVEL or 8
         * @see {@link http://nodejs.org/api/zlib.html#zlib_memory_usage_tuning|Node.js documentation}
         * @see {@link https://github.com/expressjs/compression#memlevel|`memLevel` documentation}
         */
        memLevel?: number;

        /**
         * This is used to tune the compression algorithm. This value only affects the compression ratio, not the
         * correctness of the compressed output, even if it is not set appropriately.
         *
         * - `zlib.Z_DEFAULT_STRATEGY` Use for normal data.
         * - `zlib.Z_FILTERED` Use for data produced by a filter (or predictor). Filtered data consists mostly of small
         *   values with a somewhat random distribution. In this case, the compression algorithm is tuned to compress
         *   them better. The effect is to force more Huffman coding and less string matching; it is somewhat intermediate
         *   between `zlib.Z_DEFAULT_STRATEGY` and `zlib.Z_HUFFMAN_ONLY`.
         * - `zlib.Z_FIXED` Use to prevent the use of dynamic Huffman codes, allowing for a simpler decoder for special applications.
         * - `zlib.Z_HUFFMAN_ONLY` Use to force Huffman encoding only (no string match).
         * - `zlib.Z_RLE` Use to limit match distances to one (run-length encoding). This is designed to be almost as
         *    fast as `zlib.Z_HUFFMAN_ONLY`, but give better compression for PNG image data.
         *
         * **Note** in the list above, `zlib` is from `zlib = require('zlib')`.
         */
        strategy?: number;

        /**
         * The byte threshold for the response body size before compression is considered for the response, defaults to
         * 1kb. This is a number of bytes or any string accepted by the bytes module.
         *
         * **Note** this is only an advisory setting; if the response size cannot be determined at the time the response
         * headers are written, then it is assumed the response is *over* the threshold. To guarantee the response size
         * can be determined, be sure set a `Content-Length` response header.
         *
         * @see {@link https://www.npmjs.com/package/bytes|`bytes` module}
         * @see {@link https://github.com/expressjs/compression#threshold|`threshold` documentation}
         */
        threshold?: number | string;

        /**
         * @default zlib.Z_DEFAULT_WINDOWBITS or 15.
         * @see {@link http://nodejs.org/api/zlib.html#zlib_memory_usage_tuning|Node.js documentation}
         */
        windowBits?: number;

        /**
         * A function to decide if the response should be considered for compression. This function is called as
         * `filter(req, res)` and is expected to return `true` to consider the response for compression, or `false` to
         * not compress the response.
         *
         * The default filter function uses the `compressible` module to determine if `res.getHeader('Content-Type')`
         * is compressible.
         *
         * @see {@link https://github.com/expressjs/compression#filter|`filter` documentation}
         * @see {@link https://www.npmjs.com/package/compressible|compressible module}
         */
        filter?: CompressionFilter;

        /**
         * @default zlib.Z_NO_FLUSH
         * @see {@link https://nodejs.org/api/zlib.html#zlib_class_options|Zlib class options}
         */
        flush?: number;

        /**
         * @default zlib.Z_FINISH
         * @see {@link https://nodejs.org/api/zlib.html#zlib_class_options|Zlib class options}
         */
        finishFlush?: number;
    }
}

export = e;
