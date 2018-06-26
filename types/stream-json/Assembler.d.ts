import { EventEmitter } from 'events';
import { Readable } from 'stream';

export = Assembler;

interface Token {
    name: string;
    value?: string;
}

declare class Assembler extends EventEmitter {
    constructor();

    connectTo(stream: Readable): this;
    consume(chunk: Token): this;
    dropToLevel(level: number): this;

    current: any;
    key: string | null;
    stack: Array<number | string | null>;
    readonly done: boolean;

    readonly depth: number;
    readonly path: string;

    // events
    addListener(event: 'done', listener: (asm: Assembler) => void): this;
    on(event: 'done', listener: (asm: Assembler) => void): this;
    once(event: 'done', listener: (asm: Assembler) => void): this;
    prependListener(event: 'done', listener: (asm: Assembler) => void): this;
    prependOnceListener(event: 'done', listener: (asm: Assembler) => void): this;
    removeListener(event: 'done', listener: (asm: Assembler) => void): this;
}

declare namespace Assembler {
    function connectTo(stream: Readable): Assembler;
}
