// Type definitions for loglevel 1.4.0
// Project: https://github.com/pimterry/loglevel
// Definitions by: Stefan Profanter <https://github.com/Pro/>, Florian Wagner <https://github.com/flqw/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Log levels
 */
declare const enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    SILENT = 5
}

interface Log {

    /**
     * Output trace message to console.
     * This will also include a full stack trace
     *
     * @param msg any data to log to the console
     */
    trace(...msg : any[]):void;

    /**
     * Output debug message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    debug(...msg : any[]):void;

    /**
     * Output info message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    info(...msg : any[]):void;

    /**
     * Output warn message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    warn(...msg : any[]):void;

    /**
     * Output error message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    error(...msg : any[]):void;


    /**
     * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
     * or log.error("something") will output messages, but log.info("something") will not.
     *
     * @param level 0=trace to 5=silent
     * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling
     *     back to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
     *     false as the optional 'persist' second argument, persistence will be skipped.
     */
    setLevel(level : LogLevel, persist? : boolean):void;


    /**
     * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
     * or log.error("something") will output messages, but log.info("something") will not.
     *
     * @param level as a string, like 'error' (case-insensitive)
     * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling
     *     back to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
     *     false as the optional 'persist' second argument, persistence will be skipped.
     */
    setLevel(level : string, persist? : boolean):void;


    /**
     * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
     * or log.error("something") will output messages, but log.info("something") will not.
     *
     * @param level as the value from the enum
     * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling
     *     back to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
     *     false as the optional 'persist' second argument, persistence will be skipped.
     */
    setLevel(level : LogLevel, persist? : boolean):void;

    /**
     * If you're using another JavaScript library that exposes a 'log' global, you can run into conflicts with loglevel.
     * Similarly to jQuery, you can solve this by putting loglevel into no-conflict mode immediately after it is loaded
     * onto the page. This resets to 'log' global to its value before loglevel was loaded (typically undefined), and
     * returns the loglevel object, which you can then bind to another name yourself.
     */
    noConflict():any;

    /**
     * Returns the current logging level, as a value from the enum.
     * It's very unlikely you'll need to use this for normal application logging; it's provided partly to help plugin
     * development, and partly to let you optimize logging code as below, where debug data is only generated if the
     * level is set such that it'll actually be logged. This probably doesn't affect you, unless you've run profiling
     * on your code and you have hard numbers telling you that your log data generation is a real performance problem.
     */
    getLevel():LogLevel;

    /**
     * This sets the current log level only if one has not been persisted and can’t be loaded. This is useful when
     * initializing scripts; if a developer or user has previously called setLevel(), this won’t alter their settings.
     * For example, your application might set the log level to error in a production environment, but when debugging
     * an issue, you might call setLevel("trace") on the console to see all the logs. If that error setting was set
     * using setDefaultLevel(), it will still say as trace on subsequent page loads and refreshes instead of resetting
     * to error.
     *
     * The level argument takes is the same values that you might pass to setLevel(). Levels set using
     * setDefaultLevel() never persist to subsequent page loads.
     *
     * @param level as the value from the enum
     */
    setDefaultLevel(level : LogLevel):void;

    /**
     * This gets you a new logger object that works exactly like the root log object, but can have its level and
     * logging methods set independently. All loggers must have a name (which is a non-empty string). Calling
     * getLogger() multiple times with the same name will return an identical logger object.
     * In large applications, it can be incredibly useful to turn logging on and off for particular modules as you are
     * working with them. Using the getLogger() method lets you create a separate logger for each part of your
     * application with its own logging level. Likewise, for small, independent modules, using a named logger instead
     * of the default root logger allows developers using your module to selectively turn on deep, trace-level logging
     * when trying to debug problems, while logging only errors or silencing logging altogether under normal
     * circumstances.
     * @param name The name of the produced logger
     */
    getLogger(name : String):Log;

}

declare var log : Log;

declare module "loglevel" {
    export = log;
}
