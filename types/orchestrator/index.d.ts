// Type definitions for Orchestrator 0.3
// Project: https://github.com/orchestrator/orchestrator
// Definitions by: Qubo <https://github.com/tkQubo>, TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from "events";
import * as stream from "stream";
import * as Q from "q";

type _Sequencify = (tasks: Array<{ dep: string[]; }>, names: string[]) => { sequence: string[]; missingTasks: string[]; recursiveDependencies: string[]; };

type _runTask = (task: Orchestrator.TaskMethod, done: (err: any, meta: Orchestrator.Meta) => void) => void;

type Strings = string|string[];

/** A module for sequencing and executing tasks and dependencies in maximum concurrency
 */
declare class Orchestrator extends events.EventEmitter {
    doneCallback?: (error?: any) => any;
    isRunning: boolean;
    seq: any[];
    tasks: { [name: string]: Orchestrator.Task };

    reset(): Orchestrator;

    /** Define a task
     * @param name The name of the task.
     * @param deps An array of task names to be executed and completed before your task will run.
     * @param fn The function that performs the task's operations. For asynchronous tasks, you need to provide a hint when the task is complete:
     *  - Take in a callback
     *  - Return a stream or a promise
     */
    add: Orchestrator.AddMethod;

    task(name: string): Orchestrator.Task;
    task(name: string, fn: Orchestrator.TaskMethod): void;
    task(name: string, dep: string[], fn: Orchestrator.TaskMethod): void;
    task(name: string, dep?: string[] | Orchestrator.TaskMethod, fn?: Orchestrator.TaskMethod): void;

    /** Have you defined a task with this name?
     * @param name The task name to query
     */
    hasTask(name: string): boolean;

    start: Orchestrator.StartMethod;

    stop(err?: any, successfulFinish?: boolean): void;

    sequence: _Sequencify;

    allDone(): boolean;

    /** Listen to orchestrator internals
     * @param event Event name to listen to:
     *  - start: from start() method, shows you the task sequence
     *  - stop: from stop() method, the queue finished successfully
     *  - err: from stop() method, the queue was aborted due to a task error
     *  - task_start: from _runTask() method, task was started
     *  - task_stop: from _runTask() method, task completed successfully
     *  - task_err: from _runTask() method, task errored
     *  - task_not_found: from start() method, you're trying to start a task that doesn't exist
     *  - task_recursion: from start() method, there are recursive dependencies in your task list
     * @param cb Passes single argument: e: event details
     */
    on(event: Orchestrator.EventNames, cb: (e: Orchestrator.OnCallbackEvent) => any): this;

    /** Listen to all orchestrator events from one callback
     * @param cb Passes single argument: e: event details
     */
    onAll(cb: (e: Orchestrator.OnAllCallbackEvent) => any): void;

    // probably supposed to be private methods, but still available on Orchestrator prototype
    _resetTask(task: Orchestrator.Task): void;

    _resetAllTasks(): void;

    _resetSpecificTasks(names: string[]): void;

    _runStep(): void;

    _readyToRunTask(task: Orchestrator.Task): boolean;

    _stopTask(task: Orchestrator.Task, meta: Orchestrator.Meta): void;

    _emitTaskDone(task: Orchestrator.Task, message: string, err?: any): void;

    _runTask(task: Orchestrator.Task): void;
}

declare namespace Orchestrator {
    type runTask = _runTask;

    type Sequencify = _Sequencify;

    /** A task, can either call a callback to indicate task completion or return a promise or a stream: (task is marked complete when promise.then() resolves/fails or stream ends)
     */
    type TaskMethod = (callback: (err?: any) => void) => Q.Promise<any> | stream.Stream | any;

    interface AddMethod {
        /** Define a task
         * @param name The name of the task.
         * @param fn The function that performs the task's operations. For asynchronous tasks, you need to provide a hint when the task is complete:
         *  - Take in a callback
         *  - Return a stream or a promise
         */
        (name: string, fn?: TaskMethod): Orchestrator;
        /** Define a task
         * @param name The name of the task.
         * @param deps An array of task names to be executed and completed before your task will run.
         * @param fn The function that performs the task's operations. For asynchronous tasks, you need to provide a hint when the task is complete:
         *  - Take in a callback
         *  - Return a stream or a promise
         */
        (name: string, deps?: string[], fn?: TaskMethod): Orchestrator;
    }

    /** Start running the tasks
     */
    interface StartMethod {
        /** Start running the tasks
         * @param tasks Tasks to be executed. You may pass any number of tasks as individual arguments.
         * @param cb Callback to call after run completed.
         */
        (tasks: Strings, cb?: (error?: any) => any): Orchestrator;
        /** Start running the tasks
         * @param tasks Tasks to be executed. You may pass any number of tasks as individual arguments.
         * @param cb Callback to call after run completed.
         */
        (...tasks: Strings[]/*, cb?: (error: any) => any */): Orchestrator;
        // TODO: TypeScript 2.1.5 cannot express varargs followed by callback as a last argument...
        (task1: Strings, task2: Strings, cb?: (error?: any) => any): Orchestrator;
        (task1: Strings, task2: Strings, task3: Strings, cb?: (error?: any) => any): Orchestrator;
        (task1: Strings, task2: Strings, task3: Strings, task4: Strings, cb?: (error?: any) => any): Orchestrator;
        (task1: Strings, task2: Strings, task3: Strings, task4: Strings, task5: Strings, cb?: (error?: any) => any): Orchestrator;
        (task1: Strings, task2: Strings, task3: Strings, task4: Strings, task5: Strings, task6: Strings, cb?: (error?: any) => any): Orchestrator;
    }

    interface OnCallbackEvent {
        message: string;
        task: string;
        err: any;
        duration?: number;
    }

    interface OnAllCallbackEvent extends OnCallbackEvent {
        src: string;
    }

    interface Task {
        fn: TaskMethod;
        dep: string[];
        name: string;
        done?: boolean;
        duration?: number;
        hrDuration?: [number, number];
        running?: boolean;
    }

    interface Meta {
        duration: number;
        hrDuration: [number, number];
        runMethod: ("callback" | "catch" | "promise" | "stream" | "sync");
    }

    type EventNames = ("start" | "stop" | "err" | "task_start" | "task_stop" | "task_err" | "task_not_found" | "task_recursion");
}

export = Orchestrator;
