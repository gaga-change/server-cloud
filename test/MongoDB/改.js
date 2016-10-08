/**
 * Created by qingyun on 16/9/27.
 */

var MongoClient  = require('mongodb').MongoClient,
    test=require('assert');
var database='/db_gaga';
var url ="mongodb://localhost:27017"+database;

// update(selector, document, options, callback)
/***
 * 注意,如果不写$set,默认是替换,写了后是更改指定的参数
 * 如果要配置多个 可以用updateMany  单个 updateOne  省的用update还得配置参数
 */



MongoClient.connect(url,function (err, db) {
    var col = db.collection('test');
    // col.update({a:3},{a:3,b:3},{j:true},function (err, r) {
    // col.update({a:3},{$set:{a:3}},{j:true},function (err, r) {
    // col.update({b:2},{$set:{e:1,f:2}},{multi : true},function (err, r) {
    col.updateMany({e:1},{$set:{c:2}},function (err, r) {
        test.equal(null,err);
        console.log(r)
        db.close;
    })
});