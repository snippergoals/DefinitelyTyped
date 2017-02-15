// Type definitions for Node Xmpp Client 3.1.3
// Project: https://github.com/node-xmpp/node-xmpp/tree/master/packages/node-xmpp-client/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export declare class Client {
    static Stanza: Stanza;

    constructor(options: XmppOptions);

    /**
     * Connect to Xmpp-Server
     */
    connect(): void;

    disconnect(): void;

    on(event: string, c: (err: any, r: any) => any): void;

    send(stanza: any): void;

    end(): void;
}

interface Stanza extends Element {
    new(name: string, attr: any): Stanza;
    from: string;
    to: string;
    id: string;
    type: string;
}

interface Element {
    is(name: string, xmlns: string): boolean;
    getName(): string;
    getNS(): string;
    findNS(prefix: string): string;
    getXmlns(): string;
    setAttrs(attrs: any): void;
    getAttrs(): any;

    up(): Element;
    c(name: string, attrs?: any): Element;
    cnode(child: Element): Element;
    t(text: string): Element;
    remove(el: Element, xmnls: string): Element;
    attr(attr: any, val: any): any;

    toString(): string;
    toJSON(): any;
}

interface XmppOptions {
    jid: string;
    password: string;
    host?: string;
    port?: number;
    reconnect?: boolean;
    autostart?: boolean; // if we start connecting to a given port
    register?: boolean; // register account before authentication
    legacySSL?: boolean; // connect to the legacy SSL port, requires at least the host to be specified
    credentials?: any; // Dictionary (optional) - TLS or SSL key and certificate credentials
    actAs?: string; // if admin user act on behalf of another user (just user)
    disallowTLS?: boolean; // prevent upgrading the connection to a secure one via TLS
    preferred?: string; // Preferred SASL mechanism to use
    bosh?: Bosh;
}

interface Bosh {
    url?: string
    prebind?: (error, data) => void;
}
