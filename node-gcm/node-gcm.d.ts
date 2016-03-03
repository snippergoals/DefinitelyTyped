// Type definitions for node-gcm 0.14.0
// Project: https://www.npmjs.org/package/node-gcm
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "node-gcm" {

    export interface INotificationOptions {
        title: string;
        body?: string;
        icon: string;
        sound?: string;
        badge?: string;
        tag?: string;
        color?: string;
        click_action?: string;
    }
    
    export interface IMessageOptions {
        collapseKey?: string;
        priority?: string;
        contentAvailable?: boolean;
        delayWhileIdle?: boolean;
        timeToLive?: number;
        restrictedPackageName?: string;
        dryRun?: boolean;
        data: {
            [key: string]: string;
        };
        notification?: INotificationOptions;
    }
    
    export class Message {
        constructor(options?: IMessageOptions);
        collapseKey: string;
        delayWhileIdle: boolean;
        timeToLive: number;
        dryRun: boolean;

        addData(key: string, value: string): void;
        addData(data: { [key: string]: string }): void;
        addNotification(value: INotificationOptions);
        addNotification(key: string, value:INotificationOptions);
    }


    export interface ISenderOptions {
        proxy?: any;
        maxSockets?: number;
        timeout?: number;
    }
    export interface ISenderSendOptions {
        retries?: number;
        backoff?: number;
    }

    export class Sender {
        constructor(key: string, options?: ISenderOptions);
        key: string;
        options: ISenderOptions;

        send(message: Message, registrationIds: string|string[], callback: (err: any, resJson: IResponseBody) => void): void;
        send(message: Message, registrationIds: string|string[], retries: number, callback: (err: any, resJson: IResponseBody) => void): void;
        send(message: Message, registrationIds: string|string[], options: ISenderSendOptions, callback: (err: any, resJson: IResponseBody) => void): void;
        sendNoRetry(message: Message, registrationIds: string|string[], callback: (err: any, resJson: IResponseBody) => void): void;
    }


    export interface IResponseBody {
        success: number;
        failure: number;
        canonical_ids: number;
        multicast_id?: number;
        results?: {
            message_id?: string;
            registration_id?: string;
            error?: string;
        }[];
    }

}

