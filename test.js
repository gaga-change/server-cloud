/**
 * Created by qingyun on 16/9/25.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); //post请求体的解析
var app = express();

app.use(bodyParser.json()); //解析请求体的json
app.use(bodyParser.urlencoded({extended: false})); //解决请求体的编码问题

app.use(express.static(path.join(__dirname, 'public'))); //配置静态文件路径

app.listen(9999, function () {
    console.log("http://localhost:9999");
});
