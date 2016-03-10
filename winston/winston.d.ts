// Type definitions for winston
// Project: https://github.com/flatiron/winston
// Definitions by: bonnici <https://github.com/bonnici>, Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/winston.d.ts

/// <reference path="../node/node.d.ts" />

declare module "winston" {
  export var transports: Transports;
  export var Transport: TransportStatic;
  export var Logger: LoggerStatic;
  export var Container: ContainerStatic;
  export var loggers: ContainerInstance;
  export var defaultLogger: LoggerInstance;

  export var exitOnError: boolean;
  export var level: string;

  export var log: LogMethod;

  export var debug: LeveledLogMethod;
  export var info: LeveledLogMethod;
  export var warn: LeveledLogMethod;
  export var error: LeveledLogMethod;

  export function query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
  export function query(callback: (err: Error, results: any) => void): any;
  export function stream(options?: any): NodeJS.ReadableStream;
  export function handleExceptions(...transports: TransportInstance[]): void;
  export function unhandleExceptions(...transports: TransportInstance[]): void;
  export function add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
  export function clear(): void;
  export function remove(transport: TransportInstance): LoggerInstance;
  export function startTimer(): ProfileHandler;
  export function profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;
  export function addColors(target: any): any;
  export function setLevels(target: any): any;
  export function cli(): LoggerInstance;
  export function addRewriter(rewriter: MetadataRewriter): void;

  export interface MetadataRewriter {
    (level: string, msg: string, meta: any): any;
  }

  export interface LoggerStatic {
    new (options?: LoggerOptions): LoggerInstance;
  }

  export interface LoggerInstance extends NodeJS.EventEmitter {
    extend(target: any): LoggerInstance;

    log: LogMethod;

    debug: LeveledLogMethod;
    info: LeveledLogMethod;
    warn: LeveledLogMethod;
    error: LeveledLogMethod;

    query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
    query(callback: (err: Error, results: any) => void): any;
    stream(options?: any): NodeJS.ReadableStream;
    close(): void;
    handleExceptions(...transports: TransportInstance[]): void;
    unhandleExceptions(...transports: TransportInstance[]): void;
    add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
    addRewriter(rewriter: MetadataRewriter): void;
    clear(): void;
    remove(transport: TransportInstance): LoggerInstance;
    startTimer(): ProfileHandler;
    profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;

    setLevels(target: any): any;
    cli(): LoggerInstance;
  }

  export interface LoggerOptions {
    transports?: TransportInstance[];
    rewriters?: TransportInstance[];
    exceptionHandlers?: TransportInstance[];
    handleExceptions?: boolean;

    /**
     * @type {(boolean|(err: Error) => void)}
     */
    exitOnError?: any;

    // TODO: Need to make instances specific,
    //       and need to get options for each instance.
    //       Unfortunately, the documentation is unhelpful.
    [optionName: string]: any;
  }

  export interface TransportStatic {
    new (options?: TransportOptions): TransportInstance;
  }

  export interface TransportInstance extends TransportStatic, NodeJS.EventEmitter {
    formatQuery(query: (string|Object)): (string|Object);
    normalizeQuery(options: QueryOptions): QueryOptions;
    formatResults(results: (Object|Array<any>), options?: Object): (Object|Array<any>);
    logException(msg: string, meta: Object, callback: () => void): void;
  }

  export interface ConsoleTransportInstance extends TransportInstance {
    new (options?: ConsoleTransportOptions): ConsoleTransportInstance;
  }

  export interface DailyRotateFileTransportInstance extends TransportInstance {
    new (options?: DailyRotateFileTransportOptions): DailyRotateFileTransportInstance;
  }

  export interface FileTransportInstance extends TransportInstance {
    new (options?: FileTransportOptions): FileTransportInstance;
  }

  export interface HttpTransportInstance extends TransportInstance {
    new (options?: HttpTransportOptions): HttpTransportInstance;
  }

  export interface MemoryTransportInstance extends TransportInstance {
    new (options?: MemoryTransportOptions): MemoryTransportInstance;
  }

  export interface WebhookTransportInstance extends TransportInstance {
    new (options?: WebhookTransportOptions): WebhookTransportInstance;
  }

  export interface WinstonModuleTrasportInstance extends TransportInstance {
    new (options?: WinstonModuleTransportOptions): WinstonModuleTrasportInstance;
  }

  export interface ContainerStatic {
    new (options: LoggerOptions): ContainerInstance;
  }

  export interface ContainerInstance extends ContainerStatic {
    get(id: string, options?: LoggerOptions): LoggerInstance;
    add(id: string, options: LoggerOptions): LoggerInstance;
    has(id: string): boolean;
    close(id: string): void;
    options: LoggerOptions;
    loggers: any;
    default: LoggerOptions;
  }

  export interface Transports {
    File: FileTransportInstance;
    Console: ConsoleTransportInstance;
    Loggly: WinstonModuleTrasportInstance;
    DailyRotateFile: DailyRotateFileTransportInstance;
    Http: HttpTransportInstance;
    Memory: MemoryTransportInstance;
    Webhook: WebhookTransportInstance;
  }

  export interface TransportOptions {
    level?: string;
    silent?: boolean;
    raw?: boolean;
    name?: string;
    formatter?: Function;
    handleExceptions?: boolean;
    exceptionsLevel?: string;
    humanReadableUnhandledException?: boolean;
  }

  export interface GenericTextTransportOptions {
    json?: boolean;
    colorize?: boolean;
    colors?: any;
    prettyPrint?: boolean;
    timestamp?: (Function|boolean);
    showLevel?: boolean;
    label?: string;
    depth?: number;
    stringify?: Function;
  }

  export interface GenericNetworkTransportOptions {
    host?: string;
    port?: number;
    auth?: {
      username: string;
      password: string;
    };
    path?: string;
  }

  export interface ConsoleTransportOptions extends TransportOptions, GenericTextTransportOptions {
    logstash?: boolean;
    debugStdout?: boolean;
  }

  export interface DailyRotateFileTransportOptions extends TransportOptions, GenericTextTransportOptions {
    logstash?: boolean;
    maxsize?: number;
    maxFiles?: number;
    eol?: string;
    maxRetries?: number;
    datePattern?: string;
    filename?: string;
    dirname?: string;
    options?: {
      flags?: string;
      highWaterMark?: number;
    };
    stream?: NodeJS.WritableStream;
  }

  export interface FileTransportOptions extends TransportOptions, GenericTextTransportOptions {
    logstash?: boolean;
    maxsize?: number;
    rotationFormat?: boolean;
    zippedArchive?: boolean;
    maxFiles?: number;
    eol?: string;
    tailable?: boolean;
    maxRetries?: number;
    filename?: string;
    dirname?: string;
    options?: {
      flags?: string;
      highWaterMark?: number;
    };
    stream?: NodeJS.WritableStream;
  }

  export interface HttpTransportOptions extends TransportOptions, GenericNetworkTransportOptions {
    ssl?: boolean;
  }

  export interface MemoryTransportOptions extends TransportOptions, GenericTextTransportOptions {
  }

  export interface WebhookTransportOptions extends TransportOptions, GenericNetworkTransportOptions {
    method?: string;
    ssl?: {
      key?: any;
      cert?: any;
      ca: any;
    };
  }

  export interface WinstonModuleTransportOptions extends TransportOptions {
    [optionName: string]: any;
  }

  export interface QueryOptions {
    rows?: number;
    limit?: number;
    start?: number;
    from?: Date;
    until?: Date;
    /**
     * 'asc' or 'desc'
     */
    order?: string;
    fields: any;
  }

  export interface ProfileHandler {
    logger: LoggerInstance;
    start: Date;
    done: (msg: string) => LoggerInstance;
  }

  interface LogMethod {
    (level: string, msg: string, callback: LogCallback): LoggerInstance;
    (level: string, msg: string, meta: any, callback: LogCallback): LoggerInstance;
    (level: string, msg: string, ... meta: any[]): LoggerInstance;
  }

  interface LeveledLogMethod {
    (msg: string, callback: LogCallback): LoggerInstance;
    (msg: string, meta: any, callback: LogCallback): LoggerInstance;
    (msg: string, ... meta: any[]): LoggerInstance;
  }

  interface LogCallback {
    (error?: any, level?: string, msg?: string, meta?:any): void;
  }
}
