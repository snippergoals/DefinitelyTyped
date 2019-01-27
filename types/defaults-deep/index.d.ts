// Type definitions for defaults-deep 0.2
// Project: https://github.com/jonschlinkert/defaults-deep
// Definitions by: Kocal <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Obj {
    [k: string]: any;
}

export default function defaultDeep(obj?: Obj, ...objs: Obj[]): Obj;

// strict-export-declare-modifiers
export {};
