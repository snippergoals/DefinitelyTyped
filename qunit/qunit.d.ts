// Type definitions for QUnit 1.10
// Project: http://qunitjs.com/
// Definitions by: Diullei Gomes <https://github.com/diullei>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


interface DoneCallbackObject {
	failed: number;
	passed: number;
	total: number;
	runtime: number;
}

interface LogCallbackObject {
	result: bool;
	actual: Object;
	expected: Object;
	message: string;
}

interface ModuleDoneCallbackObject {
	name: string;
	failed: number;
	passed: number;
	total: number;
}

interface TestDoneCallbackObject {
	name: string;
	module: string;
	failed: number;
	passed: number;
	total: number;
}

interface TestStartCallbackObject {
	name: string;
	module: string;
	failed: number;
	passed: number;
	total: number;
}

interface Config {
	altertitle: bool;
	autostart: bool;
	current: Object;
	reorder: bool;
	requireExpects: bool;
	urlConfig: Array;
	done: any;
}

interface LifecycleObject {
	setup?: () => any;
	teardown?: () => any;
}

interface QUnitAssert {
	/* ASSERT */
	assert: any;
	current_testEnvironment: any;
	jsDump: any;

	deepEqual(actual: any, expected: any, message?: string);
	equal(actual: any, expected: any, message?: string);
	notDeepEqual(actual: any, expected: any, message?: string);
	notEqual(actual: any, expected: any, message?: string);
	notPropEqual(actual: any, expected: any, message?: string);
	propEqual(actual: any, expected: any, message?: string);
	notStrictEqual(actual: any, expected: any, message?: string);
	ok(state: any, message?: string);
	strictEqual(actual: any, expected: any, message?: string);
	throws(block: () => any, expected: any, message?: string);
	throws(block: () => any, message?: string);
}

interface QUnitStatic extends QUnitAssert{	
	/* ASYNC CONTROL */
	start(decrement?: number);
	stop(increment? : number);
	
	/* CALLBACKS */
	begin(callback: () => any);
	done(callback: (details: DoneCallbackObject) => any);
	log(callback: (details: LogCallbackObject) => any);
	moduleDone(callback: (details: ModuleDoneCallbackObject) => any);
	moduleStart(callback: (name: string) => any);
	testDone(callback: (details: TestDoneCallbackObject) => any);
	testStart(callback: (details: TestStartCallbackObject) => any);
	
	/* CONFIGURATION */
	config: Config;
	
	/* TEST */
	asyncTest(name: string, expected: number, test: () => any);
	asyncTest(name: string, test: () => any);
	expect(amount: number);
	module(name: string, lifecycle?: LifecycleObject);
	test(title: string, expected: number, test: (assert: QUnitAssert) => any);
	test(title: string, test: (assert: QUnitAssert) => any);

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
	equiv(a: any, b: any);

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L661
	raises: any;

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L897
	push(result, actual, expected, message): any;

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L839
	reset(): any;
}

/* ASSERT */
declare var deepEqual: (actual: any, expected: any, message?: string) => any;
declare var equal: (actual: any, expected: any, message?: string) => any;
declare var notDeepEqual: (actual: any, expected: any, message?: string) => any;
declare var notEqual: (actual: any, expected: any, message?: string) => any;
declare var notStrictEqual: (actual: any, expected: any, message?: string) => any;
declare var ok: (state: any, message?: string) => any;
declare var strictEqual: (actual: any, expected: any, message?: string) => any;
// ** I Can't make overload here! :(s
//declare var throws: (block: () => void, expected: Object,  message: string) => any;
declare var throws: (block: () => void, expected?: any, message?: string) => any;

/* ASYNC CONTROL */
declare var start: (decrement?: number) => any;
declare var stop: (increment? : number) => any;
	
/* CALLBACKS */
declare var begin: (callback: () => any) => any;
declare var done: (callback: (details: DoneCallbackObject) => any) => any;
declare var log: (callback: (details: LogCallbackObject) => any) => any;
declare var moduleDone: (callback: (details: ModuleDoneCallbackObject) => any) => any;
declare var moduleStart: (callback: (name: string) => any) => any;
declare var testDone: (callback: (details: TestDoneCallbackObject) => any) => any;
declare var testStart: (callback: (details: TestStartCallbackObject) => any) => any;
	
/* TEST */
declare var asyncTest: (name: string, expected?: any, test?: () => any) => any;
declare var expect: (amount: number) => any;
// ** conflict with TypeScript module keyword. Must be used on QUnit namespace
//declare var module: (name: string, lifecycle?: LifecycleObject) => any;
// ** I can't make an overload here! :(
//declare var test: (title: string, expected?: any, test?: (assert?: any) => any) => any;
declare var test: (title: string, test: (assert?: QUnitAssert) => any) => any;
declare var notPropEqual: (actual: any, expected: any, message?: string) => any;
declare var propEqual: (actual: any, expected: any, message?: string) => any;

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
declare var equiv: (a: any, b: any) => any;

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L661
declare var raises: any;

/* QUNIT */
declare var QUnit: QUnitStatic;