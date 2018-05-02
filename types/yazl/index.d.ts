// Type definitions for yazl 2.4
// Project: https://github.com/thejoshwolfe/yazl
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Readable, Writable } from 'stream';
import { Buffer } from 'buffer';

export interface Options {
    mtime: Date;
    mode: number;
    compress: boolean;
    forceZip64Format: boolean;
}

export interface ReadStreamOptions extends Options {
    size: number;
}

export interface DirectoryOptions {
    mtime: Date;
    mode: number;
}

export interface EndOptions {
    forceZip64Format: boolean;
}

export interface DosDateTime {
    date: number;
    time: number;
}

export class ZipFile {
    addFile(realPath: string, metadataPath: string, options?: Partial<Options>): void;
    outputStream: Writable;
    addReadStream(input: Readable, metadataPath: string, options?: Partial<ReadStreamOptions>): void;
    addBuffer(buffer: Buffer, metadataPath: string, options?: Partial<Options>): void;
    end(optoins?: EndOptions, finalSizeCallback?: () => void): void;

    addEmptyDirectory(metadataPath: string, options?: Partial<DirectoryOptions>): void;
    dateToDosDateTime(jsDate: Date): DosDateTime;
}
