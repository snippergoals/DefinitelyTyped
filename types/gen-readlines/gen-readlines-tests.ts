/// <reference types="node" />

import fs = require("fs");
import readlines = require("gen-readlines");

const fd = fs.openSync('./somefile.txt', 'r');
const stats = fs.fstatSync(fd);

let str: string;

for (const line of readlines(fd, stats.size)) {
    str = line;
    console.log(line.toString());
}

fs.closeSync(fd);

fs.open('./test_data/hipster.txt', 'r', (err, fd) => {
    fs.fstat(fd, (err, stats) => {
        for (const line of readlines(fd, stats.size, 64 * 0x400, 0)) {
            str = line;
            console.log(line.toString());
        }
    });
});
