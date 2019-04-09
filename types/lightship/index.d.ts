// Type definitions for lightship 1.0
// Project: https://github.com/gajus/lightship#readme
// Definitions by: Scott Chang <https://github.com/purmac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * A teardown function called when shutdown is initialized.
 * @param userConfiguration User configuration object
 */
export function createLightship(userConfiguration?: UserConfigurationType): LightshipType;

export interface UserConfigurationType {
    /* Run Iapetus only if service is detected ro be running in Kubernetes. Default: true. */
    detectKubernetes?: boolean;
    /* The port on which the Lightship service listens. This port must be different than your main service port, if any. The default port is 9000.*/
    port?: number;
    /* An a array of [signal events]{@link https://nodejs.org/api/process.html#process_signal_events}. Default: [SIGTERM]. */
    signals?: ReadonlyArray<NodeJS.Signals>;
    /* A number of milliseconds before force full termination. Default: 60000. */
    timeout?: number;
}

export interface LightshipType {
    /* Checks if server is in SERVER_IS_READY state */
    isServerReady: () => boolean;
    /* Checks if server is in SERVER_IS_SHUTTING_DOWN state */
    isServerShuttingDown: () => boolean;
    /**
     * Registers teardown functions that are called when shutdown is initialized.
     * All registered shutdown handlers are executed in the order they have been registered.
     * After all shutdown handlers have been executed, Lightship asks `process.exit()` to terminate the process synchronously.
     */
    registerShutdownHandler: (shutdownHandler: ShutdownHandlerType) => void;
    /* Changes server state to SERVER_IS_SHUTTING_DOWN and initialises the shutdown of the application.*/
    shutdown: () => Promise<void>;
    /* Changes server state to SERVER_IS_NOT_READY. */
    signalNotReady: () => void;
    /* Changes server state to SERVER_IS_READY. */
    signalReady: () => void;
}

export type ShutdownHandlerType = () => Promise<void> | void;
