// Type definitions for easy-session
// Project: https://github.com/DeadAlready/node-easy-session
// Definitions by: Karl Düüna <https://github.com/DeadAlready/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module Express {
    interface ErrorCallback {
        (err?: any): void;
    }
    export interface Session {
        login(callback: Function);
        login(extend: Object, callback: ErrorCallback);
        login(role: string, callback: ErrorCallback);
        login(role: string, extend: Object, callback: ErrorCallback);
        logout(callback: ErrorCallback): void;
        isLoggedIn(role?: string): boolean;
        isGuest(): boolean;
        isFresh(): boolean;
        setRole(role: string): Session;
        getRole(): string;
        hasRole(role: string): boolean;
    }
}

declare module "easy-session" {
    import express = require('express');

    interface SessionOptions {
        ipCheck?: boolean;
        uaCheck?: boolean;
        freshTimeout?: number;
        maxFreshTimeout?: number;
    }

    export function main(session: any, options?: SessionOptions): express.RequestHandler;
    export function isLoggedIn(errorCallback?: Function): express.RequestHandler;
    export function isFresh(errorCallback?: Function): express.RequestHandler;
    export function checkRole(role: string, errorCallback?: Function): express.RequestHandler;
}