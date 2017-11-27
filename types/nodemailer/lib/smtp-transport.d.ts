/// <reference types="node" />

import { EventEmitter } from 'events';
import * as stream from 'stream';

import { Transport, TransportOptions } from '..';
import * as shared from './shared';

import Mail = require('./mailer');
import MailMessage = require('./mailer/mail-message');
import MimeNode = require('./mime-node');
import SMTPConnection = require('./smtp-connection');
import XOAuth2 = require('./xoauth2');

declare namespace SMTPTransport {
    interface AuthenticationTypeLogin {
        type: 'LOGIN';
        user: string;
        credentials: SMTPConnection.Credentials;
        method: string | false;
    }

    interface AuthenticationTypeOAuth2 {
        type: 'OAUTH2';
        user: string;
        oauth2: XOAuth2;
        method: 'XOAUTH2';
    }

    type AuthenticationType = AuthenticationTypeLogin | AuthenticationTypeOAuth2;

    interface MailOptions extends Mail.Options {
        auth?: SMTPConnection.AuthenticationType;
        dsn?: SMTPConnection.DSNOptions;
    }

    interface Options extends MailOptions, TransportOptions, SMTPConnection.Options {
        service?: string;
        getSocket?(options: Options, callback: (err: Error | null, socketOptions: any) => void): void; // TODO http.ClientRequest?
        url?: string;
    }

    interface SentMessageInfo {
        /** includes the envelope object for the message */
        envelope: MimeNode.Envelope;
        /** most transports should return the final Message-Id value used with this property */
        messageId: string;
    }
}

declare class SMTPTransport extends EventEmitter implements Transport {
    options: SMTPTransport.Options;

    mailer: Mail;
    logger: shared.Logger;

    name: string;
    version: string;

    auth: SMTPTransport.AuthenticationType;

    constructor(options: SMTPTransport.Options | string);

    /** Placeholder function for creating proxy sockets. This method immediatelly returns without a socket */
    getSocket(options: SMTPTransport.Options, callback: (err: Error | null, socketOptions: object) => void): void;

    getAuth(authOpts: SMTPConnection.AuthenticationTypeLogin | SMTPConnection.AuthenticationTypeOAuth2): SMTPTransport.AuthenticationType;

    /** Sends an e-mail using the selected settings */
    send(mail: MailMessage, callback: (err: Error | null, info: SMTPTransport.SentMessageInfo) => void): void;

    /** Verifies SMTP configuration */
    verify(callback: (err: Error | null, success: true) => void): void;
    verify(): Promise<true>;

    /** Releases resources */
    close(): void;
}

export = SMTPTransport;
