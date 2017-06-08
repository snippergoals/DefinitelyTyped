import { Strarray } from './str-array';

export interface DiffOptions {
    version: number;
    flags: number;
    ignoreSubmodules: number;
    pathspec: Strarray;
    notifyCb: Function;
    notifyPayload: any;
    contextLines: number;
    interhunkLines: number;
    idAbbrev: number;
    maxSize: number;
    oldPrefix: string;
    newPrefix: string;
}
