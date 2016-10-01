/**
 * Created by qingyun on 16/9/25.
 */
//
//var express = require('express')
//var morgan = require('morgan')
//
//var app = express()
//
//app.use(morgan('dev'))
//
//app.get('/', function (req, res) {
//    res.send('hello, world!')
//});
//app.listen(9999,function () {
//    console.log("http://localhost:9999");
//});
var str = 'C:/fakepath/chrome_200.xls_percent.xlsx a';
var r=new RegExp(/(\.xls|\.xlsx)$/,'g');
var result=r.test(str);
console.log(result);
while (true){
    var result = r.exec(str);
    if(result){
        console.log(result);
    }else{
        break;
    }
}