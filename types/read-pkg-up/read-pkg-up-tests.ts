import * as ReadPkgUp from 'read-pkg-up';

ReadPkgUp({cwd: '.', normalize: false}).then(pkg => typeof pkg === 'object');
typeof ReadPkgUp.sync({cwd: '.', normalize: false}) === 'object';
