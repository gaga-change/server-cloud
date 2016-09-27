/**
 * Created by qingyun on 16/9/27.
 */
var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
var url='mongodb://localhost:27017';
var database = '/db_gaga';

//删除多行

// MongoClient.connect(url+database,function (err, db) {
//     var col = db.collection('test');
//     col.deleteMany({a:2},function (err, r) {
//         // console.log(r);
//         test.equal(null,err);
//         // test.equal(1,r.insertedCount);
//         console.log("删除的个数",r.deletedCount);
//         db.close();
//     })
// });

//删除一行

MongoClient.connect(url+database,function (err, db) {
    var col = db.collection('test');
    col.deleteOne({aaa:1},function (err, r) {
        // console.log(r);
        test.equal(null,err);
        // test.equal(1,r.insertedCount);
        console.log("删除的个数",r.deletedCount);
        db.close();
    })
});


