function testConstructor() {
    type MyModel = { numericProperty: number };

    let db = new PouchDB<MyModel>(null, {
        adapter: 'leveldb',
    });
    db = new PouchDB<MyModel>('myDb', {
        adapter: 'leveldb',
    });
}

