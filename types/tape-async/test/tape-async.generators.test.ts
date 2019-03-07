// TypeScript Version: 2.3

import tape = require("tape-async");

let name: string;
let cb: (test: tape.Test) => IterableIterator<any>;
let opts: tape.TestOptions;
let t: tape.Test;

tape(cb);
tape(name, cb);
tape(opts, cb);
tape(name, opts, cb);

tape(name, function*(test: tape.Test): IterableIterator<void> {
	t = test;
});

tape.skip(cb);
tape.skip(name, cb);
tape.skip(opts, cb);
tape.skip(name, opts, cb);

tape.only(cb);
tape.only(name, cb);
tape.only(opts, cb);
tape.only(name, opts, cb);

tape(name, function*(test: tape.Test): IterableIterator<void> {
	test.test(name, function*(st: tape.Test): IterableIterator<void> {
		t = st;
	});

	test.test(name, opts, function*(st: tape.Test): IterableIterator<void> {
		t = st;
	});
});
