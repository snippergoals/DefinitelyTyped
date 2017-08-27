// Type definitions for archiver 2.0
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>, Dolan Miu <https://github.com/dolanmiu>, Crevil <https://github.com/crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as stream from 'stream';
import * as glob from 'glob';
import { ZlibOptions } from 'zlib';

declare function archiver(format: archiver.Format, options?: archiver.ArchiverOptions): archiver.Archiver;

declare namespace archiver {
    type Format = 'zip' | 'tar';

    function create(format: string, options?: ArchiverOptions): Archiver;
    function registerFormat(format: string, module: Function): void;

    interface EntryData {
        name?: string;
        prefix?: string;
        stats?: string;
    }

    interface Archiver extends stream.Transform {
        abort(): this;
        append(source: stream.Readable | Buffer | string, name?: EntryData): this;

        directory(dirpath: string, options: EntryData | string, data?: EntryData): this;

        file(filename: string, data: EntryData): this;
        glob(pattern: string, options?: glob.IOptions, data?: EntryData): this;
        finalize(): Promise<void>;

        setFormat(format: string): this;
        setModule(module: Function): this;

        pointer(): number;
        use(plugin: Function): this;

        symlink(filepath: string, target: string): this;
    }

    type ArchiverOptions = CoreOptions & TransformOptions & ZipOptions & TarOptions;

    interface CoreOptions {
        statConcurrency?: number;
    }

    interface TransformOptions {
        allowHalfOpen?: boolean;
        readableObjectMode?: boolean;
        writeableObjectMode?: boolean;
        decodeStrings?: boolean;
        encoding?: string;
        highWaterMark?: number;
        objectmode?: boolean;
    }

    interface ZipOptions {
        comment?: string;
        forceLocalTime?: boolean;
        forceZip64?: boolean;
        store?: boolean;
        zlib?: ZlibOptions;
    }

    interface TarOptions {
        gzip?: boolean;
        gzipOptions?: ZlibOptions;
    }
}

export = archiver;
