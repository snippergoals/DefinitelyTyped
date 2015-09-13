/// <reference path="../node/node.d.ts" />
/// <reference path="mssql.d.ts" />

import sql = require('mssql');

var config: sql.config = {
    user: 'user',
    password: 'password',
    server: 'ip',
    database: 'database',
    connectionTimeout: 10000,
    options: {
        encrypt: true
    }
}

var connection: sql.Connection = new sql.Connection(config, function (err: any) {
    if (err != null) {
        console.warn("Issue with connecting to SQL Server!");
    }
    else {
        var requestQuery = new sql.Request(connection);

        var getArticlesQuery = "SELECT * FROM TABLE";

        requestQuery.query(getArticlesQuery, function (err, recordSet) {
            if (err) {
                console.error('Error happened calling Query: ' + err.name + " " + err.message);

            }
            // checking to see if the articles returned as at least one.
            else if (recordSet.length > 0) {
            }
        });

        var requestStoredProcedure = new sql.Request(connection);
        var testId: number = 0;
        var testString: string = 'test';

        requestStoredProcedure.input('pId', testId);
        requestStoredProcedure.input('pString', testString);


        requestStoredProcedure.execute('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error('Error happened calling Query: ' + err.name + " " + err.message);
            }
            else {
                console.info(returnValue);
            }
        });

        var requestStoredProcedureWithOutput = new sql.Request(connection);
        var testId: number = 0;
        var testString: string = 'test';

        requestStoredProcedureWithOutput.input("name", sql.VarChar, "abc");               // varchar(3)
        requestStoredProcedureWithOutput.input("name", sql.VarChar(50), "abc");           // varchar(MAX)
        requestStoredProcedureWithOutput.output("name", sql.VarChar);                     // varchar(8000)
        requestStoredProcedureWithOutput.output("name", sql.VarChar, "abc");              // varchar(3)

        requestStoredProcedureWithOutput.input("name", sql.Decimal, 155.33);              // decimal(18, 0)
        requestStoredProcedureWithOutput.input("name", sql.Decimal(10), 155.33);          // decimal(10, 0)
        requestStoredProcedureWithOutput.input("name", sql.Decimal(10, 2), 155.33);       // decimal(10, 2)

        requestStoredProcedureWithOutput.input("name", sql.DateTime2, new Date());        // datetime2(7)
        requestStoredProcedureWithOutput.input("name", sql.DateTime2(5), new Date());     // datetime2(5)

        requestStoredProcedure.execute('StoredProcedureName', function (err, recordsets, returnValue) {
            if (err != null) {
                console.error('Error happened calling Query: ' + err.name + " " + err.message);
            }
            else {
                console.info(requestStoredProcedureWithOutput.parameters.output.value);
            }
        });
    }
});

function test_table() {
    var table = new sql.Table('#temp_table');

    table.create = true;

    table.columns.add('name', sql.VarChar(sql.MAX), { nullable: false });
    table.columns.add('type', sql.Int, { nullable: false });
    table.columns.add('amount', sql.Decimal(7, 2), { nullable: false });

    table.rows.add('name', 42, 3.50);
    table.rows.add('name2', 7, 3.14);
}


function test_promise_returns() {
    // Methods return a promises if the callback is omitted.
    var connection: sql.Connection = new sql.Connection(config);
    connection.connect().then(() => { });
    connection.close().then(() => { });

    var preparedStatment = new sql.PreparedStatement(connection);
    preparedStatment.prepare("SELECT @myValue").then(() => { });
    preparedStatment.execute({ myValue: 1 }).then((recordSet) => { });
    preparedStatment.unprepare().then(() => { });

    var transaction = new sql.Transaction(connection);
    transaction.begin().then(() => { });
    transaction.commit().then(() => { });
    transaction.rollback().then(() => { });

    var request = new sql.Request();
    request.batch('create procedure #temporary as select * from table').then((recordset) => { });
    request.bulk(new sql.Table("table_name")).then(() => { });
    request.query('SELECT 1').then((recordset) => { });
    request.execute('procedure_name').then((recordset) => { });
}


function test_request_constructor() {
    // Request can be constructed with a connection, preparedStatment, transaction or no arguments
    var connection: sql.Connection = new sql.Connection(config);
    var preparedStatment = new sql.PreparedStatement(connection);
    var transaction = new sql.Transaction(connection);
    
    var request1 = new sql.Request(connection);
    var request2 = new sql.Request(preparedStatment);
    var request3 = new sql.Request(transaction);
    var request4 = new sql.Request();
}
