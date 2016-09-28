var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
var database = '/db_gaga'
var url = 'mongodb://localhost:27017'+database;
// 自己多看看文档吧~~ 然后总结总结

MongoClient.connect(url, function (err, db) {
    var col = db.collection('test');
    var arr=col.find({aaa:{$type : 16}}).toArray(function (err , r) {
    	test.equal(null ,err);
        console.log(r)
    	db.close();
    })
    console.log(arr);
});