/**
 * Created by qingyun on 16/9/27.
 *
 *  1.db.collection().insertOne()
 */

//添加一行
/*
 var MongoClient = require('mongodb').MongoClient,
 test = require('assert');
 var url = 'mongodb://localhost:27017/db_gaga';
 MongoClient.connect(url,function (err ,db  ) {
 var col = db.collection('test');

 col.insertOne({aaa:1}, function(err, r) {
 test.equal(null, err);
 test.equal(1, r.insertedCount);
 // Finish up test
 db.close();
 });
 });*/

//添加多个
/*
var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
MongoClient.connect('mongodb://localhost:27017/db_gaga', function (err, db) {
    var col = db.collection('test');
    col.insertMany([{c: 1}, {c: 2}], function (er, r) {
        test.equal(null, err);
        test.equal(2, r.insertedCount);
        db.close();
    })
});
*/


