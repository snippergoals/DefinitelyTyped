// Type definitions for jasmine-matchers 2.0.0-beta2
// Project: https://github.com/JamieMason/Jasmine-Matchers
// Definitions by: UserPixel <https://github.com/UserPixel>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
Typings 2015 UserPixel

TypeScript tests auto-extracted from jasmine-matchers unit test.

Original jasmine-matchers license applies:

Copyright (C) 2013, uxebu Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../jasmine/jasmine.d.ts" />

declare module jasmine {
    interface Matchers {
        // These functions are written in the order defined in the src directory of jasmine-matchers
        // The type system is used smartly whenever it can provide value (by looking at the code of every matcher)
        toBeAfter(otherDate: Date): boolean; //
        toBeArray(): boolean; //
        toBeArrayOfBooleans(): boolean; //
        toBeArrayOfNumbers(): boolean;
        toBeArrayOfObjects(): boolean;
        toBeArrayOfSize(size: number): boolean;
        toBeArrayOfStrings(): boolean;
        toBeBefore(otherDate: Date): boolean; //
        toBeBoolean(): boolean;
        toBeCalculable(): boolean;
        toBeDate(): boolean;
        toBeEmptyArray(): boolean;
        toBeEmptyObject(): boolean;
        toBeEmptyString(): boolean;
        toBeEvenNumber(): boolean;
        toBeFalse(): boolean;
        toBeFunction(): boolean;
        toBeHtmlString(): boolean;
        toBeIso8601(): boolean;
        toBeJsonString(): boolean;
        toBeLongerThan(other: string): boolean;
        toBeNonEmptyArray(): boolean;
        toBeNonEmptyObject(): boolean;
        toBeNonEmptyString(): boolean;
        toBeNumber(): boolean;
        toBeObject(): boolean;
        toBeOddNumber(): boolean;
        toBeSameLengthAs(other: string): boolean;
        toBeShorterThan(other: string): boolean;
        toBeString(): boolean;
        toBeTrue(): boolean;
        toBeWhitespace(): boolean;
        toBeWholeNumber(): boolean;
        toBeWithinRange(floor: number, ceiling: number): boolean;

        toEndWith(subString: string): boolean;

        toHaveArray(key: string): boolean;
        toHaveArrayOfBooleans(key: string): boolean;
        toHaveArrayOfNumbers(key: string): boolean;
        toHaveArrayOfObjects(key: string): boolean;
        toHaveArrayOfSize(key: string, size?: number): boolean;
        toHaveArrayOfStrings(key: string): boolean;
        toHaveBoolean(key: string): boolean;
        toHaveCalculable(key: string): boolean;
        toHaveDate(key: string): boolean;
        toHaveDateAfter(key: string, otherDate: Date): boolean;
        toHaveDateBefore(key: string, otherDate: Date): boolean;
        toHaveEmptyArray(key: string): boolean;
        toHaveEmptyObject(key: string): boolean;
        toHaveEmptyString(key: string): boolean;
        toHaveEvenNumber(key: string): boolean;
        toHaveFalse(key: string): boolean;
        toHaveHtmlString(key: string): boolean;
        toHaveIso8601(key: string): boolean;
        toHaveJsonString(key: string): boolean;
        toHaveMember(key: string): boolean;
        toHaveMethod(key: string): boolean;
        toHaveNonEmptyArray(key: string): boolean;
        toHaveNonEmptyObject(key: string): boolean;
        toHaveNonEmptyString(key: string): boolean;
        toHaveNumber(key: string): boolean;
        toHaveNumberWithinRange(key: string, floor: number, ceiling: number): boolean;
        toHaveObject(key: string): boolean;
        toHaveOddNumber(key: string): boolean;
        toHaveString(key: string): boolean;
        toHaveStringLongerThan(key: string, other: string): boolean;
        toHaveStringSameLengthAs(key: string, other: string): boolean;
        toHaveStringShorterThan(key: string, other: string): boolean;
        toHaveTrue(key: string): boolean;
        toHaveWhitespaceString(key: string): boolean;
        toHaveWholeNumber(key: string): boolean;

        toImplement(api: {}): boolean;

        toStartWith(subString: string): boolean;

        toThrowAnyError(): boolean;
        toThrowErrorOfType(type: string): boolean;
    }
}
