import * as ListStream from "list-stream";

let chunk: any = "chunk";
let listStream: ListStream;
let num: number = 1;

listStream = new ListStream((err: Error, data: any[]) => {
    if (err) { throw err; }
    console.log(data.length);
    for (const date of data) {
        console.log(date);
    }
});
listStream = new ListStream({ objectMode: true }, (err: Error, data: any[]) => {
    if (err) { throw err; }
    console.log(data.length);
    for (const date of data) {
        console.log(date);
    }
});
listStream = ListStream.obj((err: Error, data: any[]) => {
    if (err) { throw err; }
    console.log(data.length);
    for (const date of data) {
        console.log(date);
    }
});

listStream.append(chunk);

listStream = listStream.duplicate();

listStream.end();

chunk = listStream.get(num);

num = listStream.length;
