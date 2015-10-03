/// <reference path="lodash-decorators.d.ts" />
/// <reference path="../lodash/lodash.d.ts" />

//
// With Arguments
//

import { after, debounce, memoize, curry } from 'lodash-decorators'

class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @after(3)
    @debounce(100)
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    @curry(2)
    @memoize()
    doSomeHeavyProcessing(arg1: any, arg2: any) {
    }
}

//
// Without Arguments
//

import { tap } from 'lodash-decorators'

class Person2 {
    firstName: string;
    lastName: string;
    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @once
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    @tap
    popIt(list: number[]): void {
        list.pop();
    }
}

const person2 = new Person2();

person2.popIt([1, 2, 3]); //=> [1, 2]

//
// Partials
//

import { partial, wrap } from 'lodash-decorators'

class Person3 {
    firstName: string;
    lastName: string;
    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(type: string) {
        return type === 'firstName' ? this.firstName : this.lastName
    }

    @partial('getName', 'firstName')
    getFirstName(): string { return null; }

    @partial('getName', null)
    getLastName(): string { return null; }

    @wrap('getName')
    getUpperCaseName(fn: Function) {
        return fn().toUpperCase();
    }
}

const person3 = new Person3('Joe', 'Smith');

person3.getFirstName(); // 'Joe'
person3.getLastName(); // 'Smith'
//FIXME: method signature changed by lodash-decorators
(<any>person3.getUpperCaseName)(); // JOE SMITH

//
// Composition
//

//import { kebabCase } from 'lodash';
import * as _ from 'lodash';

class Person4 {
    firstName: string;
    lastName: string;
    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @compose(_.kebabCase, 'getName')
    logName(name: string): void {
        console.log(name);
    }
}

const person4 = new Person4('Joe', 'Smith');

//FIXME: method signature changed by lodash-decorators
(<any>person4.logName)(); // joe-smith

//
// Instance Decorators
//

class Person5 {

    @curry(2) // <= prototype decorator
    @debounce(100) // <= instance decorator
    getName() {} //=> Throws an error. (╯°□°）╯︵ ┻━┻

    @debounce(100) // <= instance decorator
    @curry(2) // <= prototype decorator
    getName2() {} //=> All is well :)
}

//
// Getters and Setters
//

import { once, compose } from 'lodash-decorators'

function alwaysArray(value: string|string[]): string[] {
    return Array.isArray(value) ? value : _.isUndefined(value) ? [] : [value];
}

class Person6 {
    constructor() {}
    private nameList: string[];

    @once.get
    get names(): string[] {
        //FIXME: Resolve type inconsistency
        return [this.nameList.join(' ')];
        //MEMO: Original expression in repo
        //return this.nameList.join(' ');
    }

    //TODO: So far, TypeScript doesn't allow to put a decorator here
    // see https://github.com/Microsoft/TypeScript/issues/2249#issuecomment-141684146
    //@compose.set(alwaysArray)
    set names(names: string[]) {
        this.nameList = names;
    }
}

const person6 = new Person6();

// nameList will always be an array.
person6.names = undefined; //=> []
//FIXME: method signature changed by lodash-decorators
(<any>person6).names = 'Joe'; //=> ['Joe']
person6.names = ['Jim']; //=> ['Jim']

//
// Bind
//

import { bind } from 'lodash-decorators'

class Person7 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @bind()
    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // It can also function as a partial
    @bind('Joe')
    getUpperCaseName(name: string): string {
        return name.toUpperCase();
    }
}

const person7 = new Person7('Joe', 'Smith');

person7.getName.call(null); // Joe Smith
//FIXME: method signature changed by lodash-decorators
(<any>person7.getUpperCaseName)(); // JOE


import { bindAll } from 'lodash-decorators'

@bindAll()
class Person8 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person8 = new Person8('Joe', 'Smith');

person8.getName.call(null); // Joe Smith

//
// Forcing Decorator on Prototype
//

import { throttle } from 'lodash-decorators';

class Person9 {
    @throttle(1000)
    doStuff() {}

    @throttle.proto(1000)
    doStuffMore() {}
}

const person9_1 = new Person9();
const person9_2 = new Person9();

person9_1.doStuff(); //=> Both are called
person9_2.doStuff();

person9_1.doStuffMore();
person9_2.doStuffMore();

// Only one of these methods is actual invoked because throttle is applied to the prototype method
// and not the instance method.

//
// Extensions
//

import { deprecated } from 'lodash-decorators/extensions'

// This is applied globally.
deprecated.methodAction = fn => console.log(`Don't use ${fn.name}!`);

@deprecated
class Person10 {
    constructor() {}
}

class OtherPerson {
    @deprecated
    fn() {}
}

let person10 = new Person10(); //=> Warning!

let otherPerson = new OtherPerson();
otherPerson.fn(); //=> Don't use fn!

