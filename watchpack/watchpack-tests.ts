import Watchpack = require('watchpack');
const watch = new Watchpack({});

watch.watch(['test.js'], ['lib/'], 1000);

let time: number
time = watch.getTimes()['test.js']
