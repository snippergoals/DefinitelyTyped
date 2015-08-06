/// <reference path="semaphore.d.ts"/>

import semaphore = require('semaphore');

var sem: semaphore.Semaphore = semaphore(10);

function task() {
  console.log('My task');
  sem.leave();
}

sem.take(task);
sem.take(2, task);
sem.leave(2);
