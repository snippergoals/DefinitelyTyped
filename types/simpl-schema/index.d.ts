// Type definitions for simpl-schema 0.1
// Project: https://github.com/aldeed/simple-schema-js
// Definitions by: Andreas Richter <https://github.com/arichter83>
//                 Qkramer <https://github.com/Qkramer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'simpl-schema' {

export class ValidationContext {
    constructor(ss: any);
    addValidationErrors(errors: any): void;
    clean(...args: any[]): any;
    getErrorForKey(key: any, ...args: any[]): any;
    isValid(): any;
    keyErrorMessage(key: any, ...args: any[]): any;
    keyIsInvalid(key: any, ...args: any[]): any;
    reset(): void;
    setValidationErrors(errors: any): void;
    validate(obj: any, ...args: any[]): any;
    validationErrors(): any;
}

interface CustomValidationContext {
    value: any;
}

interface SchemaDefinition {
    type: any;
    label?: string | (() => string);
    optional?: boolean | (() => boolean);
    min?: number | boolean | Date | (() => number | boolean | Date);
    max?: number | boolean | Date | (() => number | boolean | Date);
    minCount?: number | (() => number);
    maxCount?: number | (() => number);
    allowedValues?: any[] | (() => any[]);
    decimal?: boolean;
    exclusiveMax?: boolean;
    exclusiveMin?: boolean;
    regEx?: RegExp | RegExp[];
    custom?: () => any;
    blackbox?: boolean;
    autoValue?: () => any;
    defaultValue?: any;
    trim?: boolean;
}

interface CleanOption {
    filter?: boolean;
    autoConvert?: boolean;
    removeEmptyStrings?: boolean;
    trimStrings?: boolean;
    getAutoValues?: boolean;
    isModifier?: boolean;
    extendAutoValueContext?: boolean;
    removeNullsFromArrays?: boolean;
}

interface SimpleSchemaOptions {
  check?: boolean;
  clean?: CleanOption;
  defaultLabel?: string;
  humanizeAutoLabels?: boolean;
  requiredByDefault?: boolean;
  tracker?: any;
}

interface SimpleSchemaStatic {
  new(
    schema: {
      [key: string]: SchemaDefinition
        | BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor
        | ArrayConstructor
        | string | RegExp
        | SimpleSchema
    } | any[],
    options?: SimpleSchemaOptions
  ): SimpleSchema;
  namedContext(name?: string): SimpleSchemaValidationContextStatic;
  addValidator(validator: () => boolean): any;
  pick(...fields: string[]): SimpleSchemaStatic;
  omit(...fields: string[]): SimpleSchemaStatic;
  clean(doc: any, options?: CleanOption): any;
  schema(key?: string): SchemaDefinition | SchemaDefinition[];
  getDefinition(key: string, propList?: any, functionContext?: any): any;
  keyIsInBlackBox(key: string): boolean;
  labels(labels: {[key: string]: string}): void;
  label(key: any): any;
  Integer: RegExp;
  messages(messages: any): any;
  messageForError(type: any, key: any, def: any, value: any): string;
  allowsKey(key: any): string;
  newContext(): SimpleSchemaValidationContextStatic;
  objectKeys(keyPrefix: any): any[];
  validate(obj: any, options?: ValidationOption): void;
  validator(options: ValidationOption): () => boolean;
  RegEx: {
      Email: RegExp;
      EmailWithTLD: RegExp;
      Domain: RegExp;
      WeakDomain: RegExp;
      IP: RegExp;
      IPv4: RegExp;
      IPv6: RegExp;
      Url: RegExp;
      Id: RegExp;
      ZipCode: RegExp;
      Phone: RegExp;
  };
  ErrorTypes: {
      REQUIRED: string,
      MIN_STRING: string,
      MAX_STRING: string,
      MIN_NUMBER: string,
      MAX_NUMBER: string,
      MIN_NUMBER_EXCLUSIVE: string,
      MAX_NUMBER_EXCLUSIVE: string,
      MIN_DATE: string,
      MAX_DATE: string,
      BAD_DATE: string,
      MIN_COUNT: string,
      MAX_COUNT: string,
      MUST_BE_INTEGER: string,
      VALUE_NOT_ALLOWED: string,
      EXPECTED_TYPE: string,
      FAILED_REGULAR_EXPRESSION: string,
      KEY_NOT_IN_SCHEMA: string
  };
}

interface ValidationOption {
    modifier?: boolean;
    upsert?: boolean;
    clean?: boolean;
    filter?: boolean;
    upsertextendedCustomContext?: boolean;
}

interface SimpleSchemaValidationContextStaticKeys {
    name: string;
    type: string;
    value?: any;
}

interface SimpleSchemaError {
    name: string;
    type: string;
}

interface SimpleSchemaValidationContextStatic {
    validate(obj: any, options?: ValidationOption): boolean;
    validateOne(doc: any, keyName: string, options?: ValidationOption): boolean;
    resetValidation(): void;
    isValid(): boolean;
    invalidKeys(): SimpleSchemaValidationContextStaticKeys[];
    addInvalidKeys(errors: SimpleSchemaError[]): void;
    keyIsInvalid(name: any): boolean;
    keyErrorMessage(name: any): string;
    getErrorObject(): any;
}

interface MongoObjectStatic {
    forEachNode(func: (() => void), options?: {endPointsOnly: boolean}): void;
    getValueForPosition(position: string): any;
    setValueForPosition(position: string, value: any): void;
    removeValueForPosition(position: string): void;
    getKeyForPosition(position: string): any;
    getGenericKeyForPosition(position: string): any;
    getInfoForKey(key: string): any;
    getPositionForKey(key: string): string;
    getPositionsForGenericKey(key: string): string[];
    getValueForKey(key: string): any;
    addKey(key: string, val: any, op: string): any;
    removeGenericKeys(keys: string[]): void;
    removeGenericKey(key: string): void;
    removeKey(key: string): void;
    removeKeys(keys: string[]): void;
    filterGenericKeys(test: (() => boolean)): void;
    setValueForKey(key: string, val: any): void;
    setValueForGenericKey(key: string, val: any): void;
    getObject(): any;
    getFlatObject(options?: {keepArrays?: boolean}): any;
    affectsKey(key: string): any;
    affectsGenericKey(key: string): any;
    affectsGenericKeyImplicit(key: string): any;
}

export const SimpleSchema: SimpleSchemaStatic;
export const SimpleSchemaValidationContext: SimpleSchemaValidationContextStatic;
export const MongoObject: MongoObjectStatic;

export interface SimpleSchema {
    debug: boolean;
    validate(obj: any, options?: ValidationOption): void;
    addValidator(validator: () => boolean): any;
    extendOptions(options: {[key: string]: any}): void;
    messages(messages: any): void;
    RegEx: {
      Email: RegExp;
      Domain: RegExp;
      WeakDomain: RegExp;
      IP: RegExp;
      IPv4: RegExp;
      IPv6: RegExp;
      Url: RegExp;
      Id: RegExp;
      ZipCode: RegExp;
      Phone: RegExp;
    };
}

export interface MongoObject {
  expandKey(val: any, key: string, obj: any): void;
}

export default SimpleSchema;

}
