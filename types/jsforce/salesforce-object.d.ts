import * as stream from 'stream';

import { SObjectCreateOptions } from './create-options';
import { DescribeSObjectResult } from './describe-result';
import { Query } from './query';
import { Record, RecordReference } from './record';
import { RecordResult } from './record-result';
import { Connection, Callback } from './connection';
import { SalesforceId } from './salesforce-id';
import { Batch, BatchResultInfo } from './batch';
import { QuickAction, QuickActionInfo } from './quick-action';

export class SObject<T> {
    record(id: SalesforceId): RecordReference<T>;
    retrieve(id: SalesforceId, options?: Object, callback?: Callback<Record<T>>): Promise<Record<T>>;
    retrieve(ids: SalesforceId[], options?: Object, callback?: Callback<Array<Record<T>>>): Promise<Array<Record<T>>>;
    update(record: Partial<T>, options?: Object, callback?: Callback<RecordResult>): Promise<RecordResult>;
    update(records: Array<Partial<T>>, options?: Object, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    // FIXME: should input really be optional? the documentation says so, but how can you actually update without it?
    updateBulk(input?: Record[] | stream.Stream | string, callback?: Callback<RecordResult[]>): Batch;
    updated(start: string | Date, end: string | Date, callback?: Callback<UpdatedRecordsInfo>): Promise<UpdatedRecordsInfo>;
    upsert(records: Record<T>, extIdField: SalesforceId, options?: Object, callback?: Callback<RecordResult>): Promise<RecordResult>;
    upsert(records: Array<Record<T>>, extIdField: SalesforceId, options?: Object, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    upsertBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult[] | BatchResultInfo[]>): Batch;

    find<T>(query?: object | string, callback?: Callback<Array<Record<T>>>): Query<Array<Record<T>>>;
    find<T>(query?: object | string, fields?: Object | string[] | string, callback?: Callback<Array<Record<T>>>): Query<Array<Record<T>>>;
    find<T>(query?: object | string, fields?: Object | string[] | string, options?: FindOptions, callback?: Callback<Array<Record<T>>>): Query<Array<Record<T>>>;

    findOne<T>(query?: object | string, callback?: Callback<Record<T>>): Query<Record<T>>;
    findOne<T>(query?: object | string, fields?: Object | string[] | string, callback?: Callback<Record<T>>): Query<Record<T>>;
    findOne<T>(query?: object | string, fields?: Object | string[] | string, options?: FindOptions, callback?: Callback<Record<T>>): Query<Record<T>>;

    approvalLayouts$: {
        /** Returns a value from the cache if it exists, otherwise calls SObject.approvalLayouts */
        (callback?: Callback<ApprovalLayoutInfo>): ApprovalLayoutInfo;
        clear(): void;
    }
    approvalLayouts(callback?: Callback<ApprovalLayoutInfo>): Promise<ApprovalLayoutInfo>;
    bulkload(operation: string, options?: { extIdField?: string }, input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult[]>): Batch;
    compactLayouts$: {
        /** Returns a value from the cache if it exists, otherwise calls SObject.compactLayouts */
        (callback?: Callback<CompactLayoutInfo>): CompactLayoutInfo;
        clear(): void;
    }
    compactLayouts(callback?: Callback<CompactLayoutInfo>): Promise<CompactLayoutInfo>;
    count(conditions?: Object | string, callback?: Callback<number>): Query<number>;
    create(record: Record<T>, options: object, callback?: Callback<RecordResult>): Promise<RecordResult>;
    create(record: Record<T>, callback?: Callback<RecordResult>): Promise<RecordResult>;
    create(record: Array<Record<T>>, options: object, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    create(record: Array<Record<T>>, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    // FIXME: why does the callback return a single RecordResult instead of an array as in the documentation?
    createBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult>): Batch;
    del(id: string, callback?: Callback<RecordResult>): Promise<RecordResult>;
    del(ids: string[], callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    destroy(id: string, callback?: Callback<RecordResult>): Promise<RecordResult>;
    destroy(ids: string[], callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    delete(id: string, callback?: Callback<RecordResult>): Promise<RecordResult>;
    delete(ids: string[], callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    // FIXME: why does the callback return a single RecordResult instead of an array as in the documentation?
    deleteBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult>): Batch;
    // FIXME: why does the callback return a single RecordResult instead of an array as in the documentation?
    destroyBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult>): Batch;
    // FIXME: why does the callback return a single RecordResult instead of an array as in the documentation?
    destroyHardBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult>): Batch;
    deleted(start: Date | string, end: Date | string, callback?: Callback<DeletedRecordsInfo>): Promise<DeletedRecordsInfo>;
    // FIXME: why does the callback return a single RecordResult instead of an array as in the documentation?
    deleteHardBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult>): Batch;
    describe(callback?: Callback<DescribeSObjectResult>): Promise<DescribeSObjectResult>;
    describe$: {
        /** Returns a value from the cache if it exists, otherwise calls SObject.describe */
        (callback?: Callback<DescribeSObjectResult>): DescribeSObjectResult;
        clear(): void;
    }
    insert(record: Record<T>, callback?: Callback<RecordResult>): Promise<RecordResult>;
    insert(records: Array<Record<T>>, callback?: Callback<RecordResult[]>): Promise<RecordResult[]>;
    insertBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: Callback<RecordResult>): Batch;
    /** Returns a value from the cache if it exists, otherwise calls SObject.layouts */
    layouts$: {
        (layoutName?: string, callback?: Callback<LayoutInfo>): LayoutInfo;
        clear(): void;
    }
    layouts(layoutName?: string, callback?: Callback<LayoutInfo>): Promise<LayoutInfo>;
    listview(id: string): ListView;
    listviews(callback?: Callback<ListViewsInfo>): Promise<ListViewsInfo>;
    quickAction(actionName: string): QuickAction;
    quickActions(callback?: Callback<QuickActionInfo[]>): Promise<QuickActionInfo[]>;
    // FIXME: why does the callback return a single RecordResult instead of an array as in the documentation?
    recent(callback?: Callback<RecordResult>): Promise<RecordResult>;
    select(callback?: Callback<T[]>): Query<T[]>;
    // TODO:use a typed pluck to turn `fields` into a subset of T's fields so that the output is slimmed down appropriately
    select(fields?: {[P in keyof T]: boolean}  | Array<(keyof T)> | (keyof T), callback?: Callback<Array<Partial<T>>>): Query<Array<Partial<T>>>;
}

export interface FindOptions {
    limit?: number;
    offset?: number;
    skip?: number;
}

export interface UpdatedRecordsInfo {
    latestDateCovered: string;
    ids: string[];
}

export interface ApprovalLayoutInfo {
    approvalLayouts: Object[];
}

export interface CompactLayoutInfo {
    compactLayouts: Object[];
    defaultCompactLayoutId: string;
    recordTypeCompactLayoutMappings: Object[];
}

export interface DeletedRecordsInfo {
    earliestDateAvailable: string;
    latestDateCovered: string;
    deletedRecords: {
        id: string,
        deletedDate: string,
    };
}

export interface LayoutInfo {
    layouts: Object[];
    recordTypeMappings: Object[];
}

export class ListView {
    constructor(connection: Connection, type: string, id: SalesforceId)
}

export class ListViewsInfo { }
// TODO: Remove this export
export { QuickAction } // for compatibility if anyone had imported it from this file
