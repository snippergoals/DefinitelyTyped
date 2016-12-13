/// <reference types="chai" />
/// <reference types="mocha" />

import * as chai from 'chai';
import * as spies from 'chai-spies';
import * as Mocha from 'mocha';

function original(): void {
  // do something cool
}

let ee = {
    on(name: string, fn: () => void) {
    }
};

let spiedFn = chai.spy(original);

// then use in place of original
ee.on('some event', spiedFn);

// or use without original
let spy_again = chai.spy();
ee.on('some other event', spy_again);

// or you can track an object's method
let array = [ 1, 2, 3 ];
chai.spy.on(array, 'push');

// or you can track multiple object's methods
chai.spy.on(array, 'push', 'pop');

array.push(5);

// and you can reset the object calls
// array.push.reset();

// or you can create spy object
let object = chai.spy.object([ 'push', 'pop' ]);
object.push(5);

// or you create spy which returns static value
spiedFn = chai.spy.returns(true);

spiedFn(); // true


let should = chai.should()
  , expect = chai.expect;

const spy = chai.spy();

// .spy

expect(spy).to.be.spy;
spy.should.be.spy;

// .called

expect(spy).to.have.been.called();
spy.should.have.been.called();

// .with
const spyStringArg = chai.spy((arg: string) => arg);
spyStringArg('foo');
expect(spyStringArg).to.have.been.called.with('foo');
spyStringArg.should.have.been.called.with('foo');

const spyTwoStringArgsAndOneNumber = chai.spy((arg1: string, arg2: string, arg3: number) => arg3);
spyTwoStringArgsAndOneNumber('foo', 'bar', 1);
expect(spyTwoStringArgsAndOneNumber).to.have.been.called.with('bar', 'foo');
spyTwoStringArgsAndOneNumber.should.have.been.called.with('bar', 'foo');

// .with.exactly
const spyTwoStringArgs = chai.spy((arg1: string, arg2: string) => arg1);
spyTwoStringArgs('', '');
spyTwoStringArgs('foo', 'bar');
expect(spyTwoStringArgs).to.have.been.called.with.exactly('foo', 'bar');
spyTwoStringArgs.should.have.been.called.with.exactly('foo', 'bar');

// .always.with
const spyThreeAnyArgs = chai.spy((arg1: any, arg2: any, arg3: any) => arg1);
spyThreeAnyArgs('foo', null, null);
spyThreeAnyArgs('foo', 'bar', null);
spyThreeAnyArgs(1, 2, 'foo');
expect(spy).to.have.been.called.always.with('foo');
spy.should.have.been.called.always.with('foo');

// .always.with.exactly
spyStringArg('foo');
spyStringArg('foo');
expect(spyStringArg).to.have.been.called.always.with.exactly('foo');
spyStringArg.should.have.been.called.always.with.exactly('foo');

// .once
expect(spy).to.have.been.called.once;
expect(spy).to.not.have.been.called.once;
spy.should.have.been.called.once;
spy.should.not.have.been.called.once;

// .twice
expect(spy).to.have.been.called.twice;
expect(spy).to.not.have.been.called.twice;
spy.should.have.been.called.twice;
spy.should.not.have.been.called.twice;

// .exactly(n)
expect(spy).to.have.been.called.exactly(3);
expect(spy).to.not.have.been.called.exactly(3);
spy.should.have.been.called.exactly(3);
spy.should.not.have.been.called.exactly(3);

// .min(n) / .at.least(n)
expect(spy).to.have.been.called.min(3);
expect(spy).to.not.have.been.called.at.least(3);
spy.should.have.been.called.at.least(3);
spy.should.not.have.been.called.min(3);

// .max(n) / .at.most(n)
expect(spy).to.have.been.called.max(3);
expect(spy).to.not.have.been.called.at.most(3);
spy.should.have.been.called.at.most(3);
spy.should.not.have.been.called.max(3);

// .above(n) / .gt(n)
expect(spy).to.have.been.called.above(3);
expect(spy).to.not.have.been.called.gt(3);
spy.should.have.been.called.gt(3);
spy.should.not.have.been.called.above(3);

// .below(n) / .lt(n)
expect(spy).to.have.been.called.below(3);
expect(spy).to.not.have.been.called.lt(3);
spy.should.have.been.called.lt(3);
spy.should.not.have.been.called.below(3);