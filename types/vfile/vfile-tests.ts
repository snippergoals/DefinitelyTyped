import vfile = require("vfile");
import { Point, Position } from "vfile";

const file = vfile({
    path: '~/example.txt',
    contents: 'Alpha *braavo* charlie.',
    custom: 'Custom tango',
    data: {
        custom: 12345
    }
});

file.path; // => '~/example.txt'
file.dirname; // => '~'

file.extname = '.md';

file.basename; // => 'example.md'

file.basename = 'index.text';

file.history; // => ['~/example.txt', '~/example.md', '~/index.text']

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8});

console.log(file.messages);

// Typings of the custom data can be resolved from the parameters above
const custom: string = file.custom; // 'Custom tango'
const dataCustom: number = file.data.custom; // 12345

// message method accept any Stringifiable Position(e.g. point, position, node with position)
const startPoint: Point = {
    line: 1,
    column: 1,
};
const position: Position = {
    start: startPoint,
    end: {
        line: 2,
        column: 2,
    }
};
// Accept Point
file.message('test', position);
// Accept Position
file.message('test', position);
// Accept Node with extra value
file.message('test', {
    position
});
// But, it must reject any malformed position
file.message({ start: 'invalid point' }); // $ExpectError

// Typings of original properties must be kept
const fileWithWrongParams = vfile({ path: 1234 }); // $ExpectError
