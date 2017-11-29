// Type definitions for parse-ms 1.0
// Project: https://github.com/sindresorhus/parse-ms#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function parseMs(ms: number): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
