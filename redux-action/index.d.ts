// Type definitions for redux-action 1.2
// Project: https://github.com/coderhaoxin/redux-action
// Definitions by: newraina <https://github.com/newraina>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * inspired by @types/redux-actions, thanks.
 */

import Redux from 'redux';

export as namespace ReduxAction

interface BaseAction {
  type: string;
}

interface Action<Payload> extends BaseAction {
  payload: Payload;
}

interface MetaAction<Payload, Meta> extends Action<Payload> {
  meta: Meta;
}

type ThunkAction<Payload> = (dispatch: Redux.Dispatch<any>, getState: () => any) => Promise<Action<Payload>>;
type ThunkMetaAction<Payload, Meta> = (dispatch: Redux.Dispatch<any>, getState: () => any) => Promise<MetaAction<Payload, Meta>>;

/** argument inferring borrowed from redux-actions definitions */
type ActionFunction0<R> = () => R;
type ActionFunction1<T1, R> = (t1: T1) => R;
type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
type ActionFunction3<T1, T2, T3, R>  = (t1: T1, t2: T2, t3: T3) => R;
type ActionFunctionAny<R> = (...args: any[]) => R;

type ReducerHandler<State> = <A extends BaseAction, S extends State>(payload: any, state?: State, action?: A) => S;

interface ReducerHandlers<State> {
  [type: string]: ReducerHandler<State>;
}

export function createAction<Payload>(
  type: string,
  payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>,
): ActionFunctionAny<ThunkAction<Payload>>;

export function createAction<Payload>(
  payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>,
): ActionFunctionAny<ThunkAction<Payload>>;

export function createAction<Payload, Arg>(
  payloadCreator: ActionFunction1<Arg, Promise<Payload> | Payload>,
): ActionFunction1<Arg, ThunkAction<Payload>>;

export function createAction<Payload, Arg1, Arg2>(
  payloadCreator: ActionFunction2<Arg1, Arg2, Promise<Payload> | Payload>,
): ActionFunction2<Arg1, Arg2, ThunkAction<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3>(
  payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Promise<Payload> | Payload>,
): ActionFunction3<Arg1, Arg2, Arg3, ThunkAction<Payload>>;

export function createAction<Payload, Meta>(
  type: string,
  payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>,
  metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ThunkMetaAction<Payload, Meta>>;

export function createAction<Payload, Meta>(
  payloadCreator: ActionFunctionAny<Promise<Payload> | Payload>,
  metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ThunkMetaAction<Payload, Meta>>;

export function createAction<Payload>(
  type?: string,
): ActionFunction1<any, ThunkAction<Payload>>;

export function createAction<Payload, Arg>(
  type?: string,
): ActionFunction1<Arg, ThunkAction<Payload>>;

export function createSyncAction<Payload>(
  type: string,
  payloadCreator?: ActionFunctionAny<Payload>,
): ActionFunctionAny<Action<Payload>>;

export function createSyncAction<Payload, Meta>(
  type: string,
  payloadCreator: ActionFunctionAny<Payload>,
  metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<MetaAction<Payload, Meta>>;

export function createReducer<State>(defaultState: State, handlers: ReducerHandlers<State>): Redux.Reducer<State>;
