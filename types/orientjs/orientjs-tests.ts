import * as orientjs from 'orientjs';

let dbserver = orientjs({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
});
let db = dbserver.use({
    name: 'mytestdb',
    username: 'root',
    password: 'root'
});
